import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type {
  ApiResponse,
  ServiceRequestPayload,
  ServiceRequestResultData,
} from "@/types/serviceRequest";
import { generateFormattedEmailHtml } from "@/lib/emailTemplate";
import { checkRateLimit, validateServiceRequestInput } from "@/lib/validation";

function generateProtocol(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `JNEXUS-${y}${m}${d}-${random}`;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse<ServiceRequestResultData>>> {
  try {
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "local-client";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Limite de envios atingido. Aguarde um minuto antes de enviar uma nova solicitação.",
        },
        { status: 429 }
      );
    }

    const rawBody: unknown = await request.json();
    const validation = validateServiceRequestInput(rawBody);

    if (!validation.isValid || !validation.sanitizedData) {
      return NextResponse.json(
        {
          success: false,
          error:
            validation.errorMessage ||
            "Verifique os campos informados e tente novamente.",
        },
        { status: 400 }
      );
    }

    const {
      nome,
      email,
      whatsapp,
      empresa,
      categoriaServico,
      tipoProjeto,
      mensagem,
    } = validation.sanitizedData;

    const timestamp = new Date().toISOString();

    const payload: ServiceRequestPayload = {
      protocolo: generateProtocol(),
      dataEnvio: timestamp,
      empresaDestino: "JNexus - Dados, Automação & IA",
      cliente: {
        nome,
        email,
        whatsapp,
        empresa,
      },
      solicitacao: {
        categoriaServico,
        tipoProjeto,
        mensagem,
      },
      metadados: {
        origem: "Portal Web JNexus",
        versaoSchema: "2.0",
      },
    };

    const emailHtml = generateFormattedEmailHtml(payload);
    const jsonString = JSON.stringify(payload, null, 2);

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;
    const resendApiKey = process.env.RESEND_API_KEY;

    // 1. Prioridade A: Envio moderno via Resend API (se configurado)
    const hasResendConfigured =
      Boolean(resendApiKey) &&
      resendApiKey !== "re_xxxx_xxxx" &&
      resendApiKey!.startsWith("re_");

    if (hasResendConfigured && emailTo) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM || "JNexus <onboarding@resend.dev>",
          to: [emailTo],
          reply_to: email,
          subject: `[${payload.protocolo}] ${categoriaServico} — ${nome}`,
          html: emailHtml,
          text: `Nova Solicitação JNexus (${payload.protocolo})\n\nPayload JSON:\n${jsonString}`,
          attachments: [
            {
              filename: `${payload.protocolo.toLowerCase()}.json`,
              content: Buffer.from(jsonString).toString("base64"),
            },
          ],
        }),
      });

      if (!resendRes.ok) {
        const errorData = (await resendRes.json()) as { message?: string };
        throw new Error(
          errorData.message || "Falha ao enviar mensagem através da Resend API."
        );
      }

      return NextResponse.json({
        success: true,
        data: {
          mensagem:
            "Solicitação estruturada em JSON e entregue no e-mail da JNexus via Resend.",
          payload,
          emailHtmlPreview: emailHtml,
        },
        meta: {
          deliveryMode: "smtp_real",
          timestamp,
        },
      });
    }

    // 2. Prioridade B: Envio clássico via SMTP / Nodemailer (Gmail, Outlook, etc.)
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);

    const hasSmtpConfigured =
      typeof emailUser === "string" &&
      emailUser.length > 0 &&
      typeof emailPass === "string" &&
      emailPass.length > 0 &&
      emailUser !== "seu_email@gmail.com" &&
      emailPass !== "xxxx_xxxx_xxxx_xxxx";

    if (hasSmtpConfigured && emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: emailUser,
          pass: emailPass.replace(/\s+/g, ""),
        },
      });

      await transporter.sendMail({
        from: `"JNexus Engenharia" <${emailUser}>`,
        to: emailTo,
        replyTo: email,
        subject: `[${payload.protocolo}] ${categoriaServico} — ${nome}`,
        html: emailHtml,
        text: `Nova Solicitação JNexus (${payload.protocolo})\n\nPayload JSON:\n${jsonString}`,
        attachments: [
          {
            filename: `${payload.protocolo.toLowerCase()}.json`,
            content: jsonString,
            contentType: "application/json",
          },
        ],
      });

      return NextResponse.json({
        success: true,
        data: {
          mensagem:
            "Solicitação estruturada em JSON e entregue no e-mail da JNexus.",
          payload,
          emailHtmlPreview: emailHtml,
        },
        meta: {
          deliveryMode: "smtp_real",
          timestamp,
        },
      });
    }

    // 3. Fallback de Desenvolvimento / Simulação
    return NextResponse.json({
      success: true,
      data: {
        mensagem:
          "JSON computado e relatório HTML gerado com sucesso. Configure RESEND_API_KEY ou EMAIL_USER/EMAIL_PASS no .env.local para envio real.",
        payload,
        emailHtmlPreview: emailHtml,
      },
      meta: {
        deliveryMode: "simulacao_dev",
        timestamp,
      },
    });
  } catch (error: unknown) {
    const safeDetail =
      error instanceof Error ? error.message : "Erro inesperado na rota.";
    return NextResponse.json(
      {
        success: false,
        error: `Não foi possível processar a solicitação (${safeDetail}).`,
      },
      { status: 500 }
    );
  }
}

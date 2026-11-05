import type { ServiceRequestPayload } from "@/types/serviceRequest";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function generateFormattedEmailHtml(payload: ServiceRequestPayload): string {
  const jsonFormatted = JSON.stringify(payload, null, 2);
  const cleanPhone = payload.cliente.whatsapp.replace(/\D/g, "");
  const whatsappUrl = cleanPhone
    ? `https://wa.me/${cleanPhone.startsWith("55") ? cleanPhone : `55${cleanPhone}`}?text=${encodeURIComponent(
        `Olá ${payload.cliente.nome}, tudo bem? Recebemos sua solicitação (${payload.protocolo}) na JNexus referente a "${payload.solicitacao.categoriaServico}".`
      )}`
    : "#";

  const dataFormatada = new Date(payload.dataEnvio).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    dateStyle: "short",
    timeStyle: "medium",
  });

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Requisição ${escapeHtml(payload.protocolo)} — JNexus</title>
</head>
<body style="margin:0; padding:0; background-color:#F5F5F7; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#1D1D1F; -webkit-font-smoothing: antialiased;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F5F7; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; background-color:#FFFFFF; border: 1px solid rgba(0,0,0,0.08); border-radius: 24px; overflow: hidden; box-shadow: 0 12px 32px rgba(0,0,0,0.04);">
          
          <!-- Editorial Header -->
          <tr>
            <td style="padding: 36px 36px 28px 36px; border-bottom: 1px solid #ECECEF;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display:inline-block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #6E6E73; background: #F5F5F7; padding: 5px 12px; border-radius: 999px;">
                      JNexus • Relatório de Requisição
                    </span>
                    <h1 style="margin: 14px 0 6px 0; font-size: 24px; color: #1D1D1F; font-weight: 700; letter-spacing: -0.025em; line-height: 1.2;">
                      ${escapeHtml(payload.solicitacao.categoriaServico)}
                    </h1>
                    <p style="margin: 0; font-size: 13px; color: #6E6E73;">
                      Protocolo <strong style="color:#1D1D1F; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;">${escapeHtml(payload.protocolo)}</strong> • Computado em ${escapeHtml(dataFormatada)}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 01. Solicitante -->
          <tr>
            <td style="padding: 28px 36px 12px 36px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #86868B;">
                01 / Identificação do Solicitante
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F5F7; border-radius: 16px; padding: 16px 20px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6E6E73; width: 120px;">Nome</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #1D1D1F; font-weight: 600;">${escapeHtml(payload.cliente.nome)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6E6E73;">Organização</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #1D1D1F;">${escapeHtml(payload.cliente.empresa)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6E6E73;">E-mail</td>
                  <td style="padding: 6px 0; font-size: 14px;">
                    <a href="mailto:${escapeHtml(payload.cliente.email)}" style="color: #0066CC; text-decoration: none; font-weight: 500;">${escapeHtml(payload.cliente.email)}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6E6E73;">WhatsApp</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #1D1D1F; font-variant-numeric: tabular-nums;">${escapeHtml(payload.cliente.whatsapp)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 02. Escopo -->
          <tr>
            <td style="padding: 16px 36px 16px 36px;">
              <p style="margin: 0 0 12px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #86868B;">
                02 / Especificação da Demanda
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F5F7; border-radius: 16px; padding: 16px 20px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6E6E73; width: 120px;">Solução</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #0066CC; font-weight: 600;">${escapeHtml(payload.solicitacao.categoriaServico)}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 13px; color: #6E6E73;">Modalidade</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #1D1D1F;">${escapeHtml(payload.solicitacao.tipoProjeto)}</td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 14px 0 6px 0; font-size: 12px; font-weight: 600; color: #6E6E73;">
                    Contexto e Requisitos Informados:
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding: 14px 16px; background-color:#FFFFFF; border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; font-size: 14px; line-height: 1.6; color: #1D1D1F; white-space: pre-wrap;">${escapeHtml(payload.solicitacao.mensagem)}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ações Rápidas -->
          <tr>
            <td style="padding: 8px 36px 24px 36px;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right: 10px;">
                    <a href="mailto:${escapeHtml(payload.cliente.email)}?subject=${encodeURIComponent(`JNexus • Solicitação ${payload.protocolo}`)}"
                       style="display: inline-block; background-color: #1D1D1F; color: #FFFFFF; font-weight: 600; font-size: 13px; padding: 11px 20px; border-radius: 999px; text-decoration: none;">
                      Responder por E-mail
                    </a>
                  </td>
                  ${
                    cleanPhone
                      ? `<td>
                          <a href="${whatsappUrl}"
                             style="display: inline-block; background-color: #0066CC; color: #FFFFFF; font-weight: 600; font-size: 13px; padding: 11px 20px; border-radius: 999px; text-decoration: none;">
                            Iniciar Conversa no WhatsApp
                          </a>
                        </td>`
                      : ""
                  }
                </tr>
              </table>
            </td>
          </tr>

          <!-- 03. Bloco JSON Obsidian -->
          <tr>
            <td style="padding: 0 36px 36px 36px;">
              <p style="margin: 0 0 10px 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: #86868B;">
                03 / Payload JSON Estruturado (Anexo .json incluso)
              </p>
              <pre style="margin: 0; padding: 18px 20px; background-color: #111113; border-radius: 16px; color: #F5F5F7; font-family: 'SF Mono', 'JetBrains Mono', Consolas, monospace; font-size: 12px; line-height: 1.55; overflow-x: auto;">${escapeHtml(jsonFormatted)}</pre>
            </td>
          </tr>

          <!-- Rodapé -->
          <tr>
            <td style="background-color:#F5F5F7; border-top: 1px solid #ECECEF; padding: 18px 36px; text-align: center; font-size: 12px; color: #86868B;">
              JNexus — Engenharia de Dados, Automação &amp; Inteligência Artificial
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

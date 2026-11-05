import type {
  ProjectType,
  ServiceCategory,
  ServiceRequestFormInput,
} from "@/types/serviceRequest";
import { PROJECT_TYPES, SERVICE_CATEGORIES } from "@/data/portfolioData";

export interface ValidationResult {
  readonly isValid: boolean;
  readonly isSpamHoneypot?: boolean;
  readonly errorMessage?: string;
  readonly sanitizedData?: ServiceRequestFormInput;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// In-memory rate limit store per IP (web-security.md & common-security.md)
const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 6;
const MAX_RATE_LIMIT_ENTRIES = 2_000;

export function checkRateLimit(clientKey: string): boolean {
  const now = Date.now();

  if (rateLimitMap.size > MAX_RATE_LIMIT_ENTRIES) {
    rateLimitMap.forEach((value, key) => {
      if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    });
  }

  const record = rateLimitMap.get(clientKey);

  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(clientKey, { count: 1, windowStart: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  rateLimitMap.set(clientKey, {
    count: record.count + 1,
    windowStart: record.windowStart,
  });
  return true;
}

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }
  return value.trim().slice(0, maxLength);
}

function isServiceCategory(value: string): value is ServiceCategory {
  return (SERVICE_CATEGORIES as ReadonlyArray<string>).includes(value);
}

function isProjectType(value: string): value is ProjectType {
  return (PROJECT_TYPES as ReadonlyArray<string>).includes(value);
}

export function validateServiceRequestInput(rawBody: unknown): ValidationResult {
  if (typeof rawBody !== "object" || rawBody === null) {
    return {
      isValid: false,
      errorMessage: "Formato de requisição inválido. Envie um objeto JSON válido.",
    };
  }

  const record = rawBody as Record<string, unknown>;

  // Honeypot check (prefer honeypot over intrusive CAPTCHA per web-security.md)
  const websiteUrl = sanitizeText(record.websiteUrl, 200);
  if (websiteUrl.length > 0) {
    return {
      isValid: false,
      isSpamHoneypot: true,
      errorMessage: "Submissão bloqueada pelo filtro anti-spam.",
    };
  }

  const nome = sanitizeText(record.nome, 120);
  const email = sanitizeText(record.email, 160);
  const whatsapp = sanitizeText(record.whatsapp, 40);
  const empresa = sanitizeText(record.empresa, 120) || "Não informada";
  const rawCategoria = sanitizeText(record.categoriaServico, 120);
  const rawTipo = sanitizeText(record.tipoProjeto, 120);
  const mensagem = sanitizeText(record.mensagem, 3000);

  if (nome.length < 2) {
    return {
      isValid: false,
      errorMessage: "Informe seu nome completo (mínimo de 2 caracteres).",
    };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      isValid: false,
      errorMessage: "Informe um endereço de e-mail corporativo ou pessoal válido.",
    };
  }

  const digitsOnlyPhone = whatsapp.replace(/\D/g, "");
  if (digitsOnlyPhone.length < 8) {
    return {
      isValid: false,
      errorMessage: "Informe um número de WhatsApp ou telefone válido com DDD.",
    };
  }

  if (mensagem.length < 10) {
    return {
      isValid: false,
      errorMessage:
        "Descreva brevemente o contexto ou necessidade do seu projeto (mínimo de 10 caracteres).",
    };
  }

  const categoriaServico: ServiceCategory = isServiceCategory(rawCategoria)
    ? rawCategoria
    : "Automação com IA & Agentes Inteligentes";

  const tipoProjeto: ProjectType = isProjectType(rawTipo)
    ? rawTipo
    : "Novo Projeto do Zero";

  return {
    isValid: true,
    sanitizedData: {
      nome,
      email,
      whatsapp,
      empresa,
      categoriaServico,
      tipoProjeto,
      mensagem,
    },
  };
}

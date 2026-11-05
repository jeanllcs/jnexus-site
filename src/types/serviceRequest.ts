export type ServiceCategory =
  | "Automação com IA & Agentes Inteligentes"
  | "Engenharia & Análise de Dados (BI)"
  | "Integração de Sistemas, APIs & RPA"
  | "Desenvolvimento de Software & Web Apps"
  | "Consultoria em Dados & IA";

export type ProjectType =
  | "Novo Projeto do Zero"
  | "Automação de Processo Existente"
  | "Integração / Pipeline de Dados"
  | "Evolução / Manutenção de Sistema"
  | "Consultoria / Diagnóstico Técnico";

export interface ServiceRequestFormInput {
  readonly nome: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly empresa: string;
  readonly categoriaServico: ServiceCategory;
  readonly tipoProjeto: ProjectType;
  readonly mensagem: string;
  readonly websiteUrl?: string; // Honeypot field (web-security.md)
}

export interface ServiceRequestPayload {
  readonly protocolo: string;
  readonly dataEnvio: string;
  readonly empresaDestino: string;
  readonly cliente: {
    readonly nome: string;
    readonly email: string;
    readonly whatsapp: string;
    readonly empresa: string;
  };
  readonly solicitacao: {
    readonly categoriaServico: ServiceCategory;
    readonly tipoProjeto: ProjectType;
    readonly mensagem: string;
  };
  readonly metadados: {
    readonly origem: string;
    readonly versaoSchema: string;
  };
}

export interface ServiceRequestResultData {
  readonly mensagem: string;
  readonly payload: ServiceRequestPayload;
  readonly emailHtmlPreview: string;
}

export interface ApiResponse<T> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
  readonly meta?: {
    readonly deliveryMode: "smtp_real" | "simulacao_dev";
    readonly timestamp: string;
  };
}

export type BentoSurfaceVariant = "hero-wide" | "obsidian-pro" | "standard";

export interface PortfolioProject {
  readonly id: string;
  readonly codigo: string;
  readonly titulo: string;
  readonly categoria: "Automação & IA" | "Dados & BI" | "Software & APIs";
  readonly resumo: string;
  readonly problemaResolvido: string;
  readonly metricaPrincipal: string;
  readonly metricaLegenda: string;
  readonly tecnologias: ReadonlyArray<string>;
  readonly varianteBento: BentoSurfaceVariant;
}

export interface ServiceItem {
  readonly id: string;
  readonly indice: string;
  readonly titulo: ServiceCategory;
  readonly subtitulo: string;
  readonly descricao: string;
  readonly entregaveis: ReadonlyArray<string>;
  readonly metricaReferencia: string;
  readonly varianteBento: BentoSurfaceVariant;
}

export interface TechStackGroup {
  readonly codigo: string;
  readonly categoria: string;
  readonly descricao: string;
  readonly itens: ReadonlyArray<string>;
}

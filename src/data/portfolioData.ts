import type {
  PortfolioProject,
  ProjectType,
  ServiceCategory,
  ServiceItem,
  TechStackGroup,
} from "@/types/serviceRequest";

export const JNEXUS_INFO = {
  nome: "JNexus",
  assinatura: "Sistemas Sob Medida, Automação & Soluções em Dados",
  descricaoCurta:
    "Desenvolvemos softwares sob medida, automações inteligentes e painéis de dados para eliminar processos manuais e fazer sua empresa operar com máxima eficiência.",
  emailContato: "contato@jnexus.tech",
  whatsappContato: "+55 (11) 99999-9999",
  localizacao: "São Paulo, Brasil • Atendimento Remoto Nacional & Global",
} as const;

export const SERVICE_CATEGORIES: ReadonlyArray<ServiceCategory> = [
  "Desenvolvimento de Software & Web Apps",
  "Automação com IA & Agentes Inteligentes",
  "Engenharia & Análise de Dados (BI)",
  "Integração de Sistemas, APIs & RPA",
  "Consultoria em Dados & IA",
];

export const PROJECT_TYPES: ReadonlyArray<ProjectType> = [
  "Novo Projeto do Zero",
  "Automação de Processo Existente",
  "Integração / Pipeline de Dados",
  "Evolução / Manutenção de Sistema",
  "Consultoria / Diagnóstico Técnico",
];

export const SERVICES_LIST: ReadonlyArray<ServiceItem> = [
  {
    id: "software-web",
    indice: "01",
    titulo: "Desenvolvimento de Software & Web Apps",
    subtitulo: "Aplicações web, portais internos e centros de controle",
    descricao:
      "Cansado de tentar encaixar sua empresa em softwares prontos e engessados? Criamos portais e sistemas personalizados para o fluxo exato do seu negócio — acessíveis pelo celular ou computador, rápidos e fáceis de usar.",
    entregaveis: [
      "Sistemas de cadastro, pedidos e acompanhamento operacional",
      "Portais para seus clientes solicitarem serviços ou consultarem status",
      "Controle de acesso por usuário, permissões e histórico de ações",
      "Design intuitivo e moderno que não exige semanas de treinamento",
    ],
    metricaReferencia: "Entrega do MVP em até 14 dias",
    varianteBento: "hero-wide",
  },
  {
    id: "automacao-ia",
    indice: "02",
    titulo: "Automação com IA & Agentes Inteligentes",
    subtitulo: "Atendimento no WhatsApp, orçamentos automáticos e triagem",
    descricao:
      "Elimine o trabalho manual de copiar dados, responder clientes com as mesmas mensagens repetitivas e gerar orçamentos um a um. Conectamos seu WhatsApp, e-mail e sistemas para rodar no automático.",
    entregaveis: [
      "Assistentes inteligentes no WhatsApp que qualificam leads e tiram dúvidas",
      "Geração instantânea de orçamentos, ordens de serviço e PDFs",
      "Leitura automática de documentos, comprovantes e notas fiscais",
      "Roteamento inteligente de chamados e pedidos diretamente para seu sistema",
    ],
    metricaReferencia: "Economia de 3+ horas diárias por operador",
    varianteBento: "obsidian-pro",
  },
  {
    id: "engenharia-dados",
    indice: "03",
    titulo: "Engenharia & Análise de Dados (BI)",
    subtitulo: "Fim do caos das planilhas e relatórios em tempo real",
    descricao:
      "Se sua empresa depende de planilhas pesadas, fórmulas que quebram e números desencontrados, nós organizamos tudo. Transformamos seus arquivos em uma base de dados segura com gráficos executivos claros.",
    entregaveis: [
      "Centralização de múltiplas planilhas em banco de dados seguro",
      "Painéis executivos (Dashboards) com faturamento, custos e metas",
      "Acesso em tempo real via navegador ou celular para gestores",
      "Alertas automáticos quando métricas importantes saírem do padrão",
    ],
    metricaReferencia: "Visibilidade em tempo real sem fórmulas quebradas",
    varianteBento: "standard",
  },
  {
    id: "integracao-rpa",
    indice: "04",
    titulo: "Integração de Sistemas, APIs & RPA",
    subtitulo: "Faça seu ERP, CRM, financeiro e e-commerce conversarem",
    descricao:
      "Acabe com a digitação repetitiva entre diferentes plataformas. Integramos suas ferramentas para que, ao fechar uma venda, a nota seja emitida, o estoque atualizado e o cliente notificado instantaneamente.",
    entregaveis: [
      "Conexão automatizada entre plataformas comerciais, financeiras e estoque",
      "Sincronização bidirecional em tempo real via APIs e Webhooks",
      "Robôs de automação (RPA) para rotinas em portais externos e governamentais",
      "Zero duplicidade de cadastros e eliminação de falhas humanas",
    ],
    metricaReferencia: "Zero retrabalho manual entre ferramentas",
    varianteBento: "standard",
  },
];

export const PORTFOLIO_PROJECTS: ReadonlyArray<PortfolioProject> = [
  {
    id: "portal-ordens-servico",
    codigo: "CASE — 01",
    titulo: "Portal Web de Ordens de Serviço & Gestão Operacional",
    categoria: "Software & APIs",
    resumo:
      "Sistema web responsivo para abertura, triagem e controle de ordens de serviço em tempo real, substituindo blocos de papel e conversas soltas no WhatsApp.",
    problemaResolvido:
      "Atrasos recorrentes em entregas e perda frequente de pedidos devido a anotações manuais e falta de controle centralizado.",
    metricaPrincipal: "-75%",
    metricaLegenda: "no tempo de resposta e atendimento ao cliente",
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "WhatsApp API"],
    varianteBento: "hero-wide",
  },
  {
    id: "automacao-cotacoes-whatsapp",
    codigo: "CASE — 02",
    titulo: "Automação de Cotações & Pedidos via WhatsApp com IA",
    categoria: "Automação & IA",
    resumo:
      "Assistente inteligente que recebe especificações dos clientes pelo WhatsApp, calcula orçamentos pelas regras da empresa e emite proposta formal em PDF na hora.",
    problemaResolvido:
      "A equipe comercial demorava até 4 horas para calcular e preencher propostas em planilhas para cada cliente, perdendo vendas por lentidão.",
    metricaPrincipal: "40 seg",
    metricaLegenda: "para envio do orçamento formal em PDF",
    tecnologias: ["OpenAI API", "Node.js", "n8n", "WhatsApp Cloud API", "PDF Generation"],
    varianteBento: "obsidian-pro",
  },
  {
    id: "migracao-planilhas-bi",
    codigo: "CASE — 03",
    titulo: "Migração de Planilhas & Painel Financeiro em Tempo Real",
    categoria: "Dados & BI",
    resumo:
      "Centralização de 8 planilhas financeiras isoladas em um banco de dados relacional com painel executivo de faturamento, margem e fluxo de caixa.",
    problemaResolvido:
      "Fórmulas corrompidas e fechamento financeiro que levava mais de 3 dias úteis ao final de cada mês com números divergentes.",
    metricaPrincipal: "3 dias → 0",
    metricaLegenda: "fechamento em tempo real com conciliação automática",
    tecnologias: ["Python", "PostgreSQL", "Power BI", "SQL Server", "Docker"],
    varianteBento: "standard",
  },
  {
    id: "integracao-ecommerce-erp",
    codigo: "CASE — 04",
    titulo: "Integração E-commerce, ERP e Notificações de Rastreio",
    categoria: "Software & APIs",
    resumo:
      "Integração bidirecional entre loja virtual, emissão fiscal no ERP e envio automático de status e rastreamento para clientes no WhatsApp.",
    problemaResolvido:
      "Necessidade de digitar pedidos manualmente no sistema um a um e copiar códigos de rastreio para avisar os compradores.",
    metricaPrincipal: "25h/sem",
    metricaLegenda: "economizadas pela equipe de expedição e suporte",
    tecnologias: ["Next.js", "APIs REST", "Webhooks", "n8n", "PostgreSQL"],
    varianteBento: "standard",
  },
];

export const TECH_STACK: ReadonlyArray<TechStackGroup> = [
  {
    codigo: "01 / WEB",
    categoria: "Sistemas & Softwares Sob Medida",
    descricao: "Aplicações web rápidas, responsivas e prontas para uso diário.",
    itens: [
      "Next.js & React (App Router)",
      "TypeScript Estrito & Node.js",
      "Bancos Relacionais (PostgreSQL & SQL Server)",
      "Portais com Controle de Permissões",
      "Design Responsivo para Celular e Desktop",
      "Deploy Seguro em Nuvem com Backups",
    ],
  },
  {
    codigo: "02 / AUTO",
    categoria: "Automação de Processos & APIs",
    descricao: "Integração silenciosa e sem falhas entre as ferramentas da sua empresa.",
    itens: [
      "Workflows Automatizados em n8n & Make",
      "Integração com WhatsApp Business API",
      "Conectores de APIs RESTful & Webhooks",
      "Robôs de Processamento e Preenchimento (RPA)",
      "Geração Automática de Documentos e PDFs",
      "Alertas Imediatos de Status e Falhas",
    ],
  },
  {
    codigo: "03 / DATA",
    categoria: "Engenharia de Dados & Dashboards",
    descricao: "Fim das planilhas soltas e controle total dos indicadores da empresa.",
    itens: [
      "Python para Tratamento de Dados (Pandas)",
      "Modelagem e Higienização de Dados em SQL",
      "Painéis Executivos em Power BI & Web",
      "Pipelines Automáticos de Sincronização",
      "Métricas de Faturamento, Custos e Margem",
      "Relatórios Automatizados por E-mail",
    ],
  },
  {
    codigo: "04 / AI",
    categoria: "Inteligência Artificial Aplicada",
    descricao: "IA prática para acelerar atendimentos e eliminar rotinas burocráticas.",
    itens: [
      "Agentes de IA Conectados ao seu Negócio",
      "Modelos OpenAI GPT & Claude Integrados",
      "Leitura Inteligente de Documentos e Notas (OCR)",
      "Respostas Automáticas com Base nas suas Regras",
      "Triagem e Roteamento Rápido de Solicitações",
      "Outputs Estruturados em JSON Sem Erros",
    ],
  },
];

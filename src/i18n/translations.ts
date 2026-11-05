import type {
  BentoSurfaceVariant,
  ProjectType,
  ServiceCategory,
} from "@/types/serviceRequest";

export type Locale = "pt-BR" | "pt-PT" | "en-US" | "es-ES" | "fr-FR";

export interface LocaleOption {
  readonly code: Locale;
  readonly shortLabel: string;
  readonly nativeName: string;
  readonly regionLabel: string;
}

export const LOCALE_OPTIONS: ReadonlyArray<LocaleOption> = [
  {
    code: "pt-BR",
    shortLabel: "PT-BR",
    nativeName: "Português",
    regionLabel: "Brasil",
  },
  {
    code: "pt-PT",
    shortLabel: "PT-PT",
    nativeName: "Português",
    regionLabel: "Portugal",
  },
  {
    code: "en-US",
    shortLabel: "EN-US",
    nativeName: "English",
    regionLabel: "United States",
  },
  {
    code: "es-ES",
    shortLabel: "ES-ES",
    nativeName: "Español",
    regionLabel: "España",
  },
  {
    code: "fr-FR",
    shortLabel: "FR",
    nativeName: "Français",
    regionLabel: "France",
  },
];

export interface TranslatedServiceItem {
  readonly id: string;
  readonly indice: string;
  readonly canonicalCategory: ServiceCategory;
  readonly titulo: string;
  readonly subtitulo: string;
  readonly descricao: string;
  readonly entregaveis: ReadonlyArray<string>;
  readonly metricaReferencia: string;
  readonly varianteBento: BentoSurfaceVariant;
}

export interface ProcessStep {
  readonly number: string;
  readonly badge: string;
  readonly title: string;
  readonly description: string;
  readonly highlight: string;
}

export interface AboutPillar {
  readonly tag: string;
  readonly title: string;
  readonly description: string;
}

export interface SiteDictionary {
  readonly navbar: {
    readonly tagline: string;
    readonly about: string;
    readonly solutions: string;
    readonly process: string;
    readonly requestService: string;
    readonly startProject: string;
    readonly skipToContent: string;
    readonly themeLight: string;
    readonly themeDark: string;
    readonly themeAriaLight: string;
    readonly themeAriaDark: string;
    readonly languageAriaLabel: string;
  };
  readonly hero: {
    readonly eyebrow: string;
    readonly titleLine1: string;
    readonly titleLine2: string;
    readonly subtitle: string;
    readonly primaryCta: string;
    readonly secondaryCta: string;
    readonly bento1: {
      readonly eyebrow: string;
      readonly status: string;
      readonly title: string;
      readonly subtitle: string;
      readonly step1Tag: string;
      readonly step1Title: string;
      readonly step1Desc: string;
      readonly step2Tag: string;
      readonly step2Title: string;
      readonly step2Desc: string;
      readonly step3Tag: string;
      readonly step3Title: string;
      readonly step3Desc: string;
      readonly metric1Label: string;
      readonly metric2Label: string;
      readonly metric3Label: string;
    };
    readonly bento2: {
      readonly eyebrow: string;
      readonly badge: string;
      readonly title: string;
      readonly subtitle: string;
      readonly bullets: ReadonlyArray<string>;
      readonly footerLabel: string;
      readonly footerCta: string;
    };
  };
  readonly about: {
    readonly eyebrow: string;
    readonly titleLine1: string;
    readonly titleLine2: string;
    readonly portraitAlt: string;
    readonly roleBadge: string;
    readonly nameTitle: string;
    readonly roleSubtitle: string;
    readonly trajectoryEyebrow: string;
    readonly trajectoryTitle: string;
    readonly trajectoryParagraph1: string;
    readonly trajectoryParagraph2: string;
    readonly philosophyEyebrow: string;
    readonly pillars: ReadonlyArray<AboutPillar>;
    readonly quote: string;
    readonly ctaLabel: string;
  };
  readonly services: {
    readonly eyebrow: string;
    readonly titleLine1: string;
    readonly titleLine2: string;
    readonly subtitle: string;
    readonly solutionPrefix: string;
    readonly ctaButton: string;
    readonly items: ReadonlyArray<TranslatedServiceItem>;
  };
  readonly process: {
    readonly eyebrow: string;
    readonly titleLine1: string;
    readonly titleLine2: string;
    readonly subtitle: string;
    readonly steps: ReadonlyArray<ProcessStep>;
    readonly guarantee: {
      readonly badge: string;
      readonly title: string;
      readonly description: string;
      readonly points: ReadonlyArray<string>;
      readonly cta: string;
    };
  };
  readonly form: {
    readonly eyebrow: string;
    readonly titleLine1: string;
    readonly titleLine2: string;
    readonly subtitle: string;
    readonly nameLabel: string;
    readonly namePlaceholder: string;
    readonly companyLabel: string;
    readonly companyPlaceholder: string;
    readonly emailLabel: string;
    readonly emailPlaceholder: string;
    readonly phoneLabel: string;
    readonly phonePlaceholder: string;
    readonly serviceLabel: string;
    readonly projectTypeLabel: string;
    readonly messageLabel: string;
    readonly messagePlaceholder: string;
    readonly serviceOptions: ReadonlyArray<{
      readonly value: ServiceCategory;
      readonly label: string;
    }>;
    readonly projectTypeOptions: ReadonlyArray<{
      readonly value: ProjectType;
      readonly label: string;
    }>;
    readonly submitButton: string;
    readonly submittingButton: string;
    readonly successTitlePrefix: string;
    readonly successMessage: string;
    readonly errorTitle: string;
    readonly connectionError: string;
    readonly steps: {
      readonly eyebrow: string;
      readonly title: string;
      readonly step1Title: string;
      readonly step1Desc: string;
      readonly step2Title: string;
      readonly step2Desc: string;
      readonly step3Title: string;
      readonly step3Desc: string;
      readonly directContactLabel: string;
      readonly location: string;
    };
  };
  readonly footer: {
    readonly shortDescription: string;
    readonly location: string;
    readonly rightsReserved: string;
  };
}

export const TRANSLATIONS: Record<Locale, SiteDictionary> = {
  "pt-BR": {
    "navbar": {
      "tagline": "Sistemas Sob Medida & Automações",
      "about": "Sobre Mim",
      "solutions": "Soluções",
      "process": "Como Funciona",
      "requestService": "Diagnóstico Grátis",
      "startProject": "Falar com Jean",
      "skipToContent": "Pular para o conteúdo principal",
      "themeLight": "Claro",
      "themeDark": "Escuro",
      "themeAriaLight": "Ativar modo claro",
      "themeAriaDark": "Ativar modo escuro",
      "languageAriaLabel": "Selecionar idioma do site"
    },
    "hero": {
      "eyebrow": "JNexus • Sistemas Sob Medida & Automações",
      "titleLine1": "Sua empresa ainda perde horas com planilhas que travam",
      "titleLine2": "e tarefas repetitivas no dia a dia?",
      "subtitle": "Criamos o sistema que o seu negócio precisa, do jeito que você trabalha. Portais web, robôs de WhatsApp e painéis de controle simples e rápidos — prontos em poucos dias e sem cobrar os preços abusivos das grandes agências.",
      "primaryCta": "Quero destravar minha operação",
      "secondaryCta": "Ver como funciona",
      "bento1": {
        "eyebrow": "O Que Resolvemos na Prática",
        "status": "● Pronto em Poucos Dias",
        "title": "Chega de perder tempo com processos manuais demorados.",
        "subtitle": "Não empurramos softwares de prateleira genéricos cheios de botões inúteis. Criamos a ferramenta exata que resolve o gargalo da sua rotina.",
        "step1Tag": "01 / PLANILHAS",
        "step1Title": "Planilhas Fora de Controle",
        "step1Desc": "Juntamos seus arquivos de Excel numa tela só, onde ninguém apaga fórmula por engano e os números fecham sozinhos.",
        "step2Tag": "02 / WHATSAPP",
        "step2Title": "Orçamentos Lentos",
        "step2Desc": "Seu cliente pede preço no WhatsApp e recebe a proposta pronta em PDF na hora, sem deixar ele ir cotar no concorrente.",
        "step3Tag": "03 / CONTROLE",
        "step3Title": "Ordens & Chamados",
        "step3Desc": "Acompanhe pedidos, clientes e tarefas em tempo real, pelo celular ou computador, sem papéis perdidos.",
        "metric1Label": "Menos tempo digitando dados",
        "metric2Label": "Prazo da primeira versão",
        "metric3Label": "Feito para o seu fluxo"
      },
      "bento2": {
        "eyebrow": "Comparativo Direto",
        "badge": "Sem Enrolação",
        "title": "Por que a JNexus e não uma agência comum?",
        "subtitle": "Enquanto grandes agências cobram R$ 50 mil, pedem 6 meses e colocam estagiários para te atender, a JNexus resolve seu problema direto com quem programa.",
        "bullets": [
          "Primeira versão funcional pronta em 7 a 15 dias",
          "Preço justo e transparente, pensado para o caixa de PMEs",
          "Você fala direto com o Jean — sem intermediários ou termos difíceis",
          "Telas limpas que qualquer funcionário aprende a usar em 5 minutos"
        ],
        "footerLabel": "Tem um processo que toma muito tempo?",
        "footerCta": "Me conta no WhatsApp"
      }
    },
    "about": {
      "eyebrow": "Quem Faz a Coisa Acontecer",
      "titleLine1": "Direto ao ponto, sem intermediários",
      "titleLine2": "e focado no que resolve na prática.",
      "portraitAlt": "Retrato profissional do fundador Jean",
      "roleBadge": "Fundador & Desenvolvedor",
      "nameTitle": "Jean — Fundador da JNexus",
      "roleSubtitle": "Sistemas Web Sob Medida, Automações de WhatsApp & Painéis de Dados",
      "trajectoryEyebrow": "Por Que Criei a JNexus",
      "trajectoryTitle": "Cansei de ver empresários sofrendo com planilhas e agências caras.",
      "trajectoryParagraph1": "Comecei a JNexus porque vi donos de pequenas e médias empresas passando pelo mesmo sufoco todo santo dia: o negócio começa a crescer, as planilhas de Excel começam a travar, as mensagens dos clientes se perdem no WhatsApp e, no fim do mês, ninguém sabe com clareza quanto a empresa realmente lucrou.",
      "trajectoryParagraph2": "Quando esse empresário procura uma software house tradicional, toma um banho de água fria: orçamentos de R$ 50 mil e prazos de 6 meses em reuniões intermináveis. Eu resolvo isso de outro jeito. Uso ferramentas modernas e inteligência artificial para construir softwares sob medida e automações em dias, cobrando um valor que cabe no seu bolso. Você conversa direto comigo do início ao fim.",
      "philosophyEyebrow": "Meus 3 Compromissos",
      "pillars": [
        {
          "tag": "01 / SEM ENROLAÇÃO",
          "title": "Falo a língua do seu negócio",
          "description": "Sem jargões técnicos complicados. Se uma ferramenta não economizar seu tempo ou não aumentar sua margem, a gente simplesmente não faz."
        },
        {
          "tag": "02 / VELOCIDADE REAL",
          "title": "Pronto para testar em dias",
          "description": "Não fico meses desenhando coisas teóricas. Em poucos dias você já tem uma tela ou fluxo funcionando para testar na sua rotina."
        },
        {
          "tag": "03 / PARCERIA DE VERDADE",
          "title": "Acompanhamento até funcionar 100%",
          "description": "Não entrego o sistema e sumo. Ajusto tudo com você até que sua equipe esteja operando com total tranquilidade."
        }
      ],
      "quote": "“Meu objetivo não é vender código complicado, é te dar a tranquilidade de ver sua empresa rodando redonda, organizada e automática todos os dias.”",
      "ctaLabel": "Quero falar com o Jean"
    },
    "services": {
      "eyebrow": "O Que Criamos Para Sua Empresa",
      "titleLine1": "Ferramentas práticas.",
      "titleLine2": "Feitas para a realidade do seu dia a dia.",
      "subtitle": "Clique em qualquer solução para iniciar sua conversa com a especialidade já selecionada no formulário.",
      "solutionPrefix": "SOLUÇÃO",
      "ctaButton": "Quero esta solução",
      "items": [
        {
          "id": "software-web",
          "indice": "01",
          "canonicalCategory": "Desenvolvimento de Software & Web Apps",
          "titulo": "Sistemas Web & Portais do Seu Jeito",
          "subtitulo": "Aplicações web, portais internos e controle de pedidos",
          "descricao": "Cansado de tentar forçar sua empresa a usar sistemas prontos que são cheios de telas complicadas e ainda assim não fazem o que você precisa? Criamos uma tela simples e rápida para você cadastrar clientes, emitir ordens de serviço e acompanhar o trabalho da equipe pelo celular.",
          "entregaveis": [
            "Telas simples para cadastro de clientes, pedidos e serviços",
            "Portal para seus clientes abrirem chamados e consultarem status sozinhos",
            "Controle de acesso por funcionário (níveis de permissão seguros)",
            "Funciona direto no navegador do celular ou computador sem instalar nada"
          ],
          "metricaReferencia": "Primeira versão em até 14 dias",
          "varianteBento": "hero-wide"
        },
        {
          "id": "automacao-ia",
          "indice": "02",
          "canonicalCategory": "Automação com IA & Agentes Inteligentes",
          "titulo": "WhatsApp no Piloto Automático",
          "subtitulo": "Responda clientes, calcule preços e mande propostas em segundos",
          "descricao": "Quantas vendas sua empresa já perdeu porque o vendedor demorou 3 horas para abrir uma planilha e calcular um orçamento? Nosso sistema atende o cliente no WhatsApp, tira dúvidas frequentes e emite a proposta em PDF na mesma hora.",
          "entregaveis": [
            "Robô inteligente no WhatsApp que qualifica o cliente e tira dúvidas",
            "Cálculo automático pela sua tabela e emissão de proposta em PDF na hora",
            "Leitura automática de comprovantes de pagamento e notas fiscais",
            "Aviso no celular da equipe assim que um pedido quente é confirmado"
          ],
          "metricaReferencia": "Economia de 3+ horas por dia",
          "varianteBento": "obsidian-pro"
        },
        {
          "id": "engenharia-dados",
          "indice": "03",
          "canonicalCategory": "Engenharia & Análise de Dados (BI)",
          "titulo": "Fim do Caos das Planilhas de Excel",
          "subtitulo": "Centralize seus números em um painel visual atualizado em tempo real",
          "descricao": "Se na sua empresa tem a planilha do financeiro, a de vendas e a de estoque — e nenhuma bate com a outra —, você está pilotando no escuro. Nós organizamos tudo num banco de dados seguro com um painel visual que mostra seu lucro diário no celular.",
          "entregaveis": [
            "Migração de planilhas soltas para um banco de dados seguro",
            "Painel no celular com faturamento, despesas, lucro real e contas a vencer",
            "Relatórios automáticos enviados no seu e-mail toda semana",
            "Alertas automáticos quando alguma métrica ou meta sair do padrão"
          ],
          "metricaReferencia": "Fechamento financeiro em 1 clique",
          "varianteBento": "standard"
        },
        {
          "id": "integracao-rpa",
          "indice": "04",
          "canonicalCategory": "Integração de Sistemas, APIs & RPA",
          "titulo": "Faça Seus Sistemas Conversarem Entre Si",
          "subtitulo": "Conecte seu site de vendas, emissor de notas, WhatsApp e estoque",
          "descricao": "Colocar um funcionário para copiar os dados da venda no site e digitar manualmente no ERP para emitir nota é jogar dinheiro no lixo. Integramos suas ferramentas para que uma converse com a outra automaticamente.",
          "entregaveis": [
            "Vendeu no site -> emite ordem no ERP -> gera nota -> avisa no WhatsApp",
            "Zero digitação duplicada e zero erro de endereço ou CPF",
            "Robôs para preencher dados em sites externos e portais do governo",
            "Sua equipe livre de tarefas manuais chatas para focar em vender"
          ],
          "metricaReferencia": "Zero retrabalho manual",
          "varianteBento": "standard"
        }
      ]
    },
    "process": {
      "eyebrow": "Passo a Passo Transparente",
      "titleLine1": "Como tirar sua ideia do papel",
      "titleLine2": "sem complicação e sem dor de cabeça.",
      "subtitle": "Dono de empresa não tem tempo a perder com reuniões infinitas ou projetos que nunca terminam. Veja como nosso processo é rápido, seguro e sem risco para você:",
      "steps": [
        {
          "number": "01",
          "badge": "15 Min no WhatsApp",
          "title": "Conversa Rápida e Direta",
          "description": "Você me manda um áudio no WhatsApp ou marcamos uma conversa de 15 minutos. Me conta onde sua equipe mais perde tempo, quais planilhas vivem travando ou o que você gostaria de ver automatizado.",
          "highlight": "Zero termos técnicos ou conversa difícil"
        },
        {
          "number": "02",
          "badge": "Sem Custo Nenhum",
          "title": "Você Vê Antes de Contratar",
          "description": "Em 3 a 5 dias, eu desenho a tela do seu sistema ou o fluxo do seu robô e te mostro funcionando. Você vê com seus próprios olhos, testa a lógica e dá seus palpites antes de fechar qualquer contrato ou gastar um centavo.",
          "highlight": "Risco zero para o seu bolso"
        },
        {
          "number": "03",
          "badge": "Pronto em 7 a 15 Dias",
          "title": "Construção Ágil com IA",
          "description": "Aprovou a tela? Eu programo a ferramenta usando tecnologia moderna e IA para acelerar a entrega. Nada de esperar 6 meses: em uma a duas semanas sua ferramenta já está pronta para a sua equipe usar.",
          "highlight": "Atualizações semanais no seu WhatsApp"
        },
        {
          "number": "04",
          "badge": "Parceria de Verdade",
          "title": "Treinamento & Suporte Direto",
          "description": "Eu não entrego o código e desapareço. Ensino sua equipe a usar em 15 minutos (as telas são simples como o WhatsApp) e você fica com meu contato direto para qualquer dúvida, ajuste ou melhoria futura.",
          "highlight": "Contato direto com o Jean, sem abrir chamados"
        }
      ],
      "guarantee": {
        "badge": "Compromisso JNexus",
        "title": "Por que donos de empresas escolhem esse modelo?",
        "description": "Porque você não precisa assinar contratos caros no escuro. Você vê a solução pronta antes de investir, tem prazo fixo de entrega e fala sempre direto com quem programa.",
        "points": [
          "Você só fecha se aprovar o protótipo",
          "Preço e prazo combinados antes de começar",
          "Telas fáceis que qualquer funcionário usa"
        ],
        "cta": "Quero Meu Diagnóstico Gratuito"
      }
    },
    "form": {
      "eyebrow": "Diagnóstico Rápido e Sem Custo",
      "titleLine1": "Vamos conversar sobre o seu negócio?",
      "titleLine2": "Me conta qual processo está travando sua equipe.",
      "subtitle": "Eu analiso sua rotina sem custo nenhum e te mostro na prática o que dá para automatizar ou simplificar em poucos dias.",
      "nameLabel": "Como posso te chamar? *",
      "namePlaceholder": "Ex: Roberto Silva",
      "companyLabel": "Qual o nome da sua empresa?",
      "companyPlaceholder": "Ex: Silva Distribuidora",
      "emailLabel": "Seu melhor e-mail *",
      "emailPlaceholder": "roberto@empresa.com.br",
      "phoneLabel": "Seu WhatsApp para conversarmos *",
      "phonePlaceholder": "(11) 98765-4321",
      "serviceLabel": "Qual problema você quer resolver primeiro? *",
      "projectTypeLabel": "Em que momento está a sua necessidade?",
      "messageLabel": "Me conta em poucas palavras como funciona hoje na sua empresa *",
      "messagePlaceholder": "Ex: Hoje usamos 3 planilhas de Excel para controlar ordens de serviço e perdemos muito tempo passando dados para o WhatsApp. Queria uma tela simples no celular para os técnicos darem baixa...",
      "serviceOptions": [
        {
          "value": "Desenvolvimento de Software & Web Apps",
          "label": "Quero um sistema web próprio e simples para minha equipe"
        },
        {
          "value": "Automação com IA & Agentes Inteligentes",
          "label": "Quero colocar meu WhatsApp para atender e orçar no automático"
        },
        {
          "value": "Engenharia & Análise de Dados (BI)",
          "label": "Minhas planilhas de Excel viraram uma bagunça e quero organizar"
        },
        {
          "value": "Integração de Sistemas, APIs & RPA",
          "label": "Quero conectar ferramentas que já uso para parar de redigitar dados"
        },
        {
          "value": "Consultoria em Dados & IA",
          "label": "Outro desafio operacional (quero entender o que dá para fazer)"
        }
      ],
      "projectTypeOptions": [
        {
          "value": "Novo Projeto do Zero",
          "label": "Quero criar algo do zero"
        },
        {
          "value": "Automação de Processo Existente",
          "label": "Já tenho uma rotina manual e quero automatizar"
        },
        {
          "value": "Integração / Pipeline de Dados",
          "label": "Quero organizar minhas planilhas ou dados"
        },
        {
          "value": "Evolução / Manutenção de Sistema",
          "label": "Já tenho um sistema e quero melhorar"
        },
        {
          "value": "Consultoria / Diagnóstico Técnico",
          "label": "Quero apenas um diagnóstico inicial sem custo"
        }
      ],
      "submitButton": "Quero Meu Diagnóstico Gratuito",
      "submittingButton": "Enviando suas informações...",
      "successTitlePrefix": "Mensagem Recebida com Sucesso!",
      "successMessage": "Recebi sua mensagem! Vou analisar o que você me contou e te chamo no WhatsApp em até 24 horas úteis com uma avaliação prática.",
      "errorTitle": "Não foi possível enviar a mensagem",
      "connectionError": "Houve uma falha de conexão. Se preferir, pode me chamar direto no e-mail: contato@jnexus.tech.",
      "steps": {
        "eyebrow": "Como Funciona o Processo",
        "title": "Sem burocracia do primeiro contato até o sistema no ar.",
        "step1Title": "1. Conversa Inicial Sem Custo",
        "step1Desc": "Você me conta onde sua equipe perde tempo ou onde as planilhas estão travando. Eu avalio o que dá para resolver.",
        "step2Title": "2. Proposta & Telas",
        "step2Desc": "Te mostro exatamente como a ferramenta ou automação vai funcionar, com prazo certo e valor que cabe no seu bolso.",
        "step3Title": "3. Entrega & Testes",
        "step3Desc": "Construo o sistema em dias, testo com você na sua rotina e acompanho sua equipe até que tudo esteja rodando perfeitamente.",
        "directContactLabel": "Contato Direto com o Jean",
        "location": "São Paulo, Brasil • Atendimento Remoto para todo o Brasil"
      }
    },
    "footer": {
      "shortDescription": "Criamos sistemas web sob medida, robôs de WhatsApp e painéis de dados para empresas que querem parar de perder tempo com tarefas manuais e planilhas travadas.",
      "location": "São Paulo, Brasil • Atendimento Remoto Nacional",
      "rightsReserved": "Todos os direitos reservados. JNexus Soluções Digitais."
    }
  },
  "pt-PT": {
    "navbar": {
      "tagline": "Sistemas Sob Medida & Automações",
      "about": "Sobre Mim",
      "solutions": "Soluções",
      "process": "Como Funciona",
      "requestService": "Diagnóstico Gratuito",
      "startProject": "Falar com Jean",
      "skipToContent": "Pular para o conteúdo principal",
      "themeLight": "Claro",
      "themeDark": "Escuro",
      "themeAriaLight": "Ativar modo claro",
      "themeAriaDark": "Ativar modo escuro",
      "languageAriaLabel": "Selecionar idioma do site"
    },
    "hero": {
      "eyebrow": "JNexus • Sistemas Sob Medida & Automações",
      "titleLine1": "Sua empresa ainda perde horas com planilhas que travam",
      "titleLine2": "e tarefas repetitivas no dia a dia?",
      "subtitle": "Criamos o sistema que o seu negócio precisa, do jeito que você trabalha. Portais web, robôs de WhatsApp e painéis de controle simples e rápidos — prontos em poucos dias e sem cobrar os preços abusivos das grandes agências.",
      "primaryCta": "Quero destravar minha operação",
      "secondaryCta": "Ver como funciona",
      "bento1": {
        "eyebrow": "O Que Resolvemos na Prática",
        "status": "● Pronto em Poucos Dias",
        "title": "Chega de perder tempo com processos manuais demorados.",
        "subtitle": "Não empurramos softwares de prateleira genéricos cheios de botões inúteis. Criamos a ferramenta exata que resolve o gargalo da sua rotina.",
        "step1Tag": "01 / PLANILHAS",
        "step1Title": "Planilhas Fora de Controle",
        "step1Desc": "Juntamos seus arquivos de Excel numa tela só, onde ninguém apaga fórmula por engano e os números fecham sozinhos.",
        "step2Tag": "02 / WHATSAPP",
        "step2Title": "Orçamentos Lentos",
        "step2Desc": "Seu cliente pede preço no WhatsApp e recebe a proposta pronta em PDF na hora, sem deixar ele ir cotar no concorrente.",
        "step3Tag": "03 / CONTROLE",
        "step3Title": "Ordens & Chamados",
        "step3Desc": "Acompanhe pedidos, clientes e tarefas em tempo real, pelo celular ou computador, sem papéis perdidos.",
        "metric1Label": "Menos tempo digitando dados",
        "metric2Label": "Prazo da primeira versão",
        "metric3Label": "Feito para o seu fluxo"
      },
      "bento2": {
        "eyebrow": "Comparativo Direto",
        "badge": "Sem Enrolação",
        "title": "Por que a JNexus e não uma agência comum?",
        "subtitle": "Enquanto grandes agências cobram R$ 50 mil, pedem 6 meses e colocam estagiários para te atender, a JNexus resolve seu problema direto com quem programa.",
        "bullets": [
          "Primeira versão funcional pronta em 7 a 15 dias",
          "Preço justo e transparente, pensado para o caixa de PMEs",
          "Você fala direto com o Jean — sem intermediários ou termos difíceis",
          "Telas limpas que qualquer funcionário aprende a usar em 5 minutos"
        ],
        "footerLabel": "Tem um processo que toma muito tempo?",
        "footerCta": "Me conta no WhatsApp"
      }
    },
    "about": {
      "eyebrow": "Quem Faz a Coisa Acontecer",
      "titleLine1": "Direto ao ponto, sem intermediários",
      "titleLine2": "e focado no que resolve na prática.",
      "portraitAlt": "Retrato profissional do fundador Jean",
      "roleBadge": "Fundador & Desenvolvedor",
      "nameTitle": "Jean — Fundador da JNexus",
      "roleSubtitle": "Sistemas Web Sob Medida, Automações de WhatsApp & Painéis de Dados",
      "trajectoryEyebrow": "Por Que Criei a JNexus",
      "trajectoryTitle": "Cansei de ver empresários sofrendo com planilhas e agências caras.",
      "trajectoryParagraph1": "Comecei a JNexus porque vi donos de pequenas e médias empresas passando pelo mesmo sufoco todo santo dia: o negócio começa a crescer, as planilhas de Excel começam a travar, as mensagens dos clientes se perdem no WhatsApp e, no fim do mês, ninguém sabe com clareza quanto a empresa realmente lucrou.",
      "trajectoryParagraph2": "Quando esse empresário procura uma software house tradicional, toma um banho de água fria: orçamentos de R$ 50 mil e prazos de 6 meses em reuniões intermináveis. Eu resolvo isso de outro jeito. Uso ferramentas modernas e inteligência artificial para construir softwares sob medida e automações em dias, cobrando um valor que cabe no seu bolso. Você conversa direto comigo do início ao fim.",
      "philosophyEyebrow": "Meus 3 Compromissos",
      "pillars": [
        {
          "tag": "01 / SEM ENROLAÇÃO",
          "title": "Falo a língua do seu negócio",
          "description": "Sem jargões técnicos complicados. Se uma ferramenta não economizar seu tempo ou não aumentar sua margem, a gente simplesmente não faz."
        },
        {
          "tag": "02 / VELOCIDADE REAL",
          "title": "Pronto para testar em dias",
          "description": "Não fico meses desenhando coisas teóricas. Em poucos dias você já tem uma tela ou fluxo funcionando para testar na sua rotina."
        },
        {
          "tag": "03 / PARCERIA DE VERDADE",
          "title": "Acompanhamento até funcionar 100%",
          "description": "Não entrego o sistema e sumo. Ajusto tudo com você até que sua equipe esteja operando com total tranquilidade."
        }
      ],
      "quote": "“Meu objetivo não é vender código complicado, é te dar a tranquilidade de ver sua empresa rodando redonda, organizada e automática todos os dias.”",
      "ctaLabel": "Quero falar com o Jean"
    },
    "services": {
      "eyebrow": "O Que Criamos Para Sua Empresa",
      "titleLine1": "Ferramentas práticas.",
      "titleLine2": "Feitas para a realidade do seu dia a dia.",
      "subtitle": "Clique em qualquer solução para iniciar sua conversa com a especialidade já selecionada no formulário.",
      "solutionPrefix": "SOLUÇÃO",
      "ctaButton": "Quero esta solução",
      "items": [
        {
          "id": "software-web",
          "indice": "01",
          "canonicalCategory": "Desenvolvimento de Software & Web Apps",
          "titulo": "Sistemas Web & Portais do Seu Jeito",
          "subtitulo": "Aplicações web, portais internos e controle de pedidos",
          "descricao": "Cansado de tentar forçar sua empresa a usar sistemas prontos que são cheios de telas complicadas e ainda assim não fazem o que você precisa? Criamos uma tela simples e rápida para você cadastrar clientes, emitir ordens de serviço e acompanhar o trabalho da equipe pelo celular.",
          "entregaveis": [
            "Telas simples para cadastro de clientes, pedidos e serviços",
            "Portal para seus clientes abrirem chamados e consultarem status sozinhos",
            "Controle de acesso por funcionário (níveis de permissão seguros)",
            "Funciona direto no navegador do celular ou computador sem instalar nada"
          ],
          "metricaReferencia": "Primeira versão em até 14 dias",
          "varianteBento": "hero-wide"
        },
        {
          "id": "automacao-ia",
          "indice": "02",
          "canonicalCategory": "Automação com IA & Agentes Inteligentes",
          "titulo": "WhatsApp no Piloto Automático",
          "subtitulo": "Responda clientes, calcule preços e mande propostas em segundos",
          "descricao": "Quantas vendas sua empresa já perdeu porque o vendedor demorou 3 horas para abrir uma planilha e calcular um orçamento? Nosso sistema atende o cliente no WhatsApp, tira dúvidas frequentes e emite a proposta em PDF na mesma hora.",
          "entregaveis": [
            "Robô inteligente no WhatsApp que qualifica o cliente e tira dúvidas",
            "Cálculo automático pela sua tabela e emissão de proposta em PDF na hora",
            "Leitura automática de comprovantes de pagamento e notas fiscais",
            "Aviso no celular da equipe assim que um pedido quente é confirmado"
          ],
          "metricaReferencia": "Economia de 3+ horas por dia",
          "varianteBento": "obsidian-pro"
        },
        {
          "id": "engenharia-dados",
          "indice": "03",
          "canonicalCategory": "Engenharia & Análise de Dados (BI)",
          "titulo": "Fim do Caos das Planilhas de Excel",
          "subtitulo": "Centralize seus números em um painel visual atualizado em tempo real",
          "descricao": "Se na sua empresa tem a planilha do financeiro, a de vendas e a de estoque — e nenhuma bate com a outra —, você está pilotando no escuro. Nós organizamos tudo num banco de dados seguro com um painel visual que mostra seu lucro diário no celular.",
          "entregaveis": [
            "Migração de planilhas soltas para um banco de dados seguro",
            "Painel no celular com faturamento, despesas, lucro real e contas a vencer",
            "Relatórios automáticos enviados no seu e-mail toda semana",
            "Alertas automáticos quando alguma métrica ou meta sair do padrão"
          ],
          "metricaReferencia": "Fechamento financeiro em 1 clique",
          "varianteBento": "standard"
        },
        {
          "id": "integracao-rpa",
          "indice": "04",
          "canonicalCategory": "Integração de Sistemas, APIs & RPA",
          "titulo": "Faça Seus Sistemas Conversarem Entre Si",
          "subtitulo": "Conecte seu site de vendas, emissor de notas, WhatsApp e estoque",
          "descricao": "Colocar um funcionário para copiar os dados da venda no site e digitar manualmente no ERP para emitir nota é jogar dinheiro no lixo. Integramos suas ferramentas para que uma converse com a outra automaticamente.",
          "entregaveis": [
            "Vendeu no site -> emite ordem no ERP -> gera nota -> avisa no WhatsApp",
            "Zero digitação duplicada e zero erro de endereço ou CPF",
            "Robôs para preencher dados em sites externos e portais do governo",
            "Sua equipe livre de tarefas manuais chatas para focar em vender"
          ],
          "metricaReferencia": "Zero retrabalho manual",
          "varianteBento": "standard"
        }
      ]
    },
    "process": {
      "eyebrow": "Passo a Passo Transparente",
      "titleLine1": "Como tirar sua ideia do papel",
      "titleLine2": "sem complicação e sem dor de cabeça.",
      "subtitle": "Dono de empresa não tem tempo a perder com reuniões infinitas ou projetos que nunca terminam. Veja como nosso processo é rápido, seguro e sem risco para você:",
      "steps": [
        {
          "number": "01",
          "badge": "15 Min no WhatsApp",
          "title": "Conversa Rápida e Direta",
          "description": "Você me manda um áudio no WhatsApp ou marcamos uma conversa de 15 minutos. Me conta onde sua equipe mais perde tempo, quais planilhas vivem travando ou o que você gostaria de ver automatizado.",
          "highlight": "Zero termos técnicos ou conversa difícil"
        },
        {
          "number": "02",
          "badge": "Sem Custo Nenhum",
          "title": "Você Vê Antes de Contratar",
          "description": "Em 3 a 5 dias, eu desenho a tela do seu sistema ou o fluxo do seu robô e te mostro funcionando. Você vê com seus próprios olhos, testa a lógica e dá seus palpites antes de fechar qualquer contrato ou gastar um centavo.",
          "highlight": "Risco zero para o seu bolso"
        },
        {
          "number": "03",
          "badge": "Pronto em 7 a 15 Dias",
          "title": "Construção Ágil com IA",
          "description": "Aprovou a tela? Eu programo a ferramenta usando tecnologia moderna e IA para acelerar a entrega. Nada de esperar 6 meses: em uma a duas semanas sua ferramenta já está pronta para a sua equipe usar.",
          "highlight": "Atualizações semanais no seu WhatsApp"
        },
        {
          "number": "04",
          "badge": "Parceria de Verdade",
          "title": "Treinamento & Suporte Direto",
          "description": "Eu não entrego o código e desapareço. Ensino sua equipe a usar em 15 minutos (as telas são simples como o WhatsApp) e você fica com meu contato direto para qualquer dúvida, ajuste ou melhoria futura.",
          "highlight": "Contato direto com o Jean, sem abrir chamados"
        }
      ],
      "guarantee": {
        "badge": "Compromisso JNexus",
        "title": "Por que donos de empresas escolhem esse modelo?",
        "description": "Porque você não precisa assinar contratos caros no escuro. Você vê a solução pronta antes de investir, tem prazo fixo de entrega e fala sempre direto com quem programa.",
        "points": [
          "Você só fecha se aprovar o protótipo",
          "Preço e prazo combinados antes de começar",
          "Telas fáceis que qualquer funcionário usa"
        ],
        "cta": "Quero Meu Diagnóstico Gratuito"
      }
    },
    "form": {
      "eyebrow": "Diagnóstico Rápido e Sem Custo",
      "titleLine1": "Vamos conversar sobre o seu negócio?",
      "titleLine2": "Me conta qual processo está travando sua equipe.",
      "subtitle": "Eu analiso sua rotina sem custo nenhum e te mostro na prática o que dá para automatizar ou simplificar em poucos dias.",
      "nameLabel": "Como posso te chamar? *",
      "namePlaceholder": "Ex: Roberto Silva",
      "companyLabel": "Qual o nome da sua empresa?",
      "companyPlaceholder": "Ex: Silva Distribuidora",
      "emailLabel": "Seu melhor e-mail *",
      "emailPlaceholder": "roberto@empresa.com.br",
      "phoneLabel": "Seu WhatsApp para conversarmos *",
      "phonePlaceholder": "(11) 98765-4321",
      "serviceLabel": "Qual problema você quer resolver primeiro? *",
      "projectTypeLabel": "Em que momento está a sua necessidade?",
      "messageLabel": "Me conta em poucas palavras como funciona hoje na sua empresa *",
      "messagePlaceholder": "Ex: Hoje usamos 3 planilhas de Excel para controlar ordens de serviço e perdemos muito tempo passando dados para o WhatsApp. Queria uma tela simples no celular para os técnicos darem baixa...",
      "serviceOptions": [
        {
          "value": "Desenvolvimento de Software & Web Apps",
          "label": "Quero um sistema web próprio e simples para minha equipe"
        },
        {
          "value": "Automação com IA & Agentes Inteligentes",
          "label": "Quero colocar meu WhatsApp para atender e orçar no automático"
        },
        {
          "value": "Engenharia & Análise de Dados (BI)",
          "label": "Minhas planilhas de Excel viraram uma bagunça e quero organizar"
        },
        {
          "value": "Integração de Sistemas, APIs & RPA",
          "label": "Quero conectar ferramentas que já uso para parar de redigitar dados"
        },
        {
          "value": "Consultoria em Dados & IA",
          "label": "Outro desafio operacional (quero entender o que dá para fazer)"
        }
      ],
      "projectTypeOptions": [
        {
          "value": "Novo Projeto do Zero",
          "label": "Quero criar algo do zero"
        },
        {
          "value": "Automação de Processo Existente",
          "label": "Já tenho uma rotina manual e quero automatizar"
        },
        {
          "value": "Integração / Pipeline de Dados",
          "label": "Quero organizar minhas planilhas ou dados"
        },
        {
          "value": "Evolução / Manutenção de Sistema",
          "label": "Já tenho um sistema e quero melhorar"
        },
        {
          "value": "Consultoria / Diagnóstico Técnico",
          "label": "Quero apenas um diagnóstico inicial sem custo"
        }
      ],
      "submitButton": "Quero Meu Diagnóstico Gratuito",
      "submittingButton": "Enviando suas informações...",
      "successTitlePrefix": "Mensagem Recebida com Sucesso!",
      "successMessage": "Recebi sua mensagem! Vou analisar o que você me contou e te chamo no WhatsApp em até 24 horas úteis com uma avaliação prática.",
      "errorTitle": "Não foi possível enviar a mensagem",
      "connectionError": "Houve uma falha de conexão. Se preferir, pode me chamar direto no e-mail: contato@jnexus.tech.",
      "steps": {
        "eyebrow": "Como Funciona o Processo",
        "title": "Sem burocracia do primeiro contato até o sistema no ar.",
        "step1Title": "1. Conversa Inicial Sem Custo",
        "step1Desc": "Você me conta onde sua equipe perde tempo ou onde as planilhas estão travando. Eu avalio o que dá para resolver.",
        "step2Title": "2. Proposta & Telas",
        "step2Desc": "Te mostro exatamente como a ferramenta ou automação vai funcionar, com prazo certo e valor que cabe no seu bolso.",
        "step3Title": "3. Entrega & Testes",
        "step3Desc": "Construo o sistema em dias, testo com você na sua rotina e acompanho sua equipe até que tudo esteja rodando perfeitamente.",
        "directContactLabel": "Contato Direto com o Jean",
        "location": "São Paulo, Brasil • Atendimento Remoto para Portugal & Global"
      }
    },
    "footer": {
      "shortDescription": "Criamos sistemas web sob medida, robôs de WhatsApp e painéis de dados para empresas que querem parar de perder tempo com tarefas manuais e planilhas travadas.",
      "location": "São Paulo, Brasil • Atendimento Remoto para Portugal & Global",
      "rightsReserved": "Todos os direitos reservados. JNexus Soluções Digitais."
    }
  },
  "en-US": {
    "navbar": {
      "tagline": "Custom Systems & Automations",
      "about": "About Me",
      "solutions": "Solutions",
      "process": "How It Works",
      "requestService": "Free Diagnostic",
      "startProject": "Talk to Jean",
      "skipToContent": "Skip to main content",
      "themeLight": "Light",
      "themeDark": "Dark",
      "themeAriaLight": "Activate light mode",
      "themeAriaDark": "Activate dark mode",
      "languageAriaLabel": "Select language"
    },
    "hero": {
      "eyebrow": "JNexus • Custom Software & Smart Automations",
      "titleLine1": "Is your team still wasting hours on freezing spreadsheets",
      "titleLine2": "and repetitive manual tasks every single day?",
      "subtitle": "We build the exact internal software, WhatsApp bots, and executive dashboards your business needs — ready in days or weeks, without the traditional agency bureaucracy and exorbitant fees.",
      "primaryCta": "I want to streamline my business",
      "secondaryCta": "See how it works",
      "bento1": {
        "eyebrow": "What We Solve In Practice",
        "status": "● Ready In Just Days",
        "title": "No more wasted hours on slow manual busywork.",
        "subtitle": "We don't sell bloated generic software. We engineer the specific tool or automated workflow that eliminates your daily headaches.",
        "step1Tag": "01 / SPREADSHEETS",
        "step1Title": "Spreadsheets Out Of Control",
        "step1Desc": "We unify your messy Excel files into one secure screen where nobody deletes formulas by mistake and books balance automatically.",
        "step2Tag": "02 / WHATSAPP",
        "step2Title": "Slow Customer Quotes",
        "step2Desc": "Your leads ask for prices on WhatsApp and receive formatted PDF proposals in seconds, before they go to a competitor.",
        "step3Tag": "03 / OPERATIONS",
        "step3Title": "Work Orders & Job Tracking",
        "step3Desc": "Track orders, customers, and field staff in real time on mobile or desktop, with zero lost paperwork.",
        "metric1Label": "Less time retyping data",
        "metric2Label": "First version delivery",
        "metric3Label": "Built for your exact workflow"
      },
      "bento2": {
        "eyebrow": "Honest Comparison",
        "badge": "No Fluff",
        "title": "Why JNexus instead of a traditional software agency?",
        "subtitle": "While big agencies charge $20k+, demand 6 months, and assign junior account reps to your project, JNexus solves your problem directly with the engineer who builds it.",
        "bullets": [
          "Working version ready to test in 7 to 15 days",
          "Fair and transparent pricing tailored for growing businesses",
          "Direct communication with Jean — no middlemen or confusing tech jargon",
          "Clean, intuitive screens that any employee learns to use in 5 minutes"
        ],
        "footerLabel": "Have a process taking up too much time?",
        "footerCta": "Tell me about it"
      }
    },
    "about": {
      "eyebrow": "Who Makes It Happen",
      "titleLine1": "Straight to the point, zero middlemen,",
      "titleLine2": "and laser-focused on practical results.",
      "portraitAlt": "Professional portrait of founder Jean",
      "roleBadge": "Founder & Developer",
      "nameTitle": "Jean — Founder of JNexus",
      "roleSubtitle": "Custom Web Software, WhatsApp Automations & Real-Time Dashboards",
      "trajectoryEyebrow": "Why I Built JNexus",
      "trajectoryTitle": "I got tired of seeing business owners struggle with spreadsheets and overpriced agencies.",
      "trajectoryParagraph1": "I started JNexus after seeing small and medium business owners endure the same frustration every day: the company grows, spreadsheets start freezing, customer messages get buried in WhatsApp, and at the end of the month nobody knows the exact net profit.",
      "trajectoryParagraph2": "When they look for a traditional software house, they get sticker shock: $30k quotes and 6-month timelines filled with endless meetings. I solve this differently. Using modern developer tooling and AI acceleration, I build custom web tools and practical automations in days, at a fair price. You talk directly to me from start to finish.",
      "philosophyEyebrow": "My 3 Core Commitments",
      "pillars": [
        {
          "tag": "01 / NO TECH JARGON",
          "title": "I speak the language of your business",
          "description": "Clear, honest communication. If a feature won't save your staff real hours or boost your bottom line, we don't build it."
        },
        {
          "tag": "02 / REAL SPEED",
          "title": "Working versions in days",
          "description": "I don't spend months drafting theoretical slides. Within days, you have a functional screen or workflow to test in your routine."
        },
        {
          "tag": "03 / TRUE PARTNERSHIP",
          "title": "Hands-on until it works 100%",
          "description": "I don't deliver code and vanish. I stay with you until your team is operating smoothly and confidently every day."
        }
      ],
      "quote": "“My goal isn't to sell complex code; it's to give you the peace of mind of seeing your company run organized, clean, and automated every day.”",
      "ctaLabel": "Talk directly with Jean"
    },
    "services": {
      "eyebrow": "What We Build For Your Business",
      "titleLine1": "Practical tools.",
      "titleLine2": "Engineered for your everyday reality.",
      "subtitle": "Click any solution below to pre-select it in our contact form.",
      "solutionPrefix": "SOLUTION",
      "ctaButton": "I want this solution",
      "items": [
        {
          "id": "software-web",
          "indice": "01",
          "canonicalCategory": "Desenvolvimento de Software & Web Apps",
          "titulo": "Custom Web Systems & Portals",
          "subtitulo": "Internal tools, client portals, and job tracking systems",
          "descricao": "Tired of trying to cram your business into rigid off-the-shelf software with endless buttons you'll never use? We build simple, blazing-fast web tools so your team can register clients, issue work orders, and track jobs right from their phones.",
          "entregaveis": [
            "Clean screens for customer records, orders, and operations",
            "Self-service client portal for opening tickets and checking status",
            "Role-based access permissions (secure manager & staff controls)",
            "Works directly in mobile or desktop browsers with zero installation"
          ],
          "metricaReferencia": "First version in up to 14 days",
          "varianteBento": "hero-wide"
        },
        {
          "id": "automacao-ia",
          "indice": "02",
          "canonicalCategory": "Automação com IA & Agentes Inteligentes",
          "titulo": "WhatsApp on Autopilot",
          "subtitulo": "Reply to customers, calculate quotes, and send PDF proposals in seconds",
          "descricao": "How many sales has your business lost because an employee took 3 hours to open a spreadsheet and manually calculate a quote? Our system answers FAQs, gathers measurements, and sends a formal PDF quote instantly.",
          "entregaveis": [
            "Smart WhatsApp bot that qualifies leads and answers questions 24/7",
            "Instant automated pricing calculation and branded PDF quote dispatch",
            "Automatic OCR reading of payment receipts and incoming invoices",
            "Instant phone alert to your team when a hot order is confirmed"
          ],
          "metricaReferencia": "Saves 3+ hours every day",
          "varianteBento": "obsidian-pro"
        },
        {
          "id": "engenharia-dados",
          "indice": "03",
          "canonicalCategory": "Engenharia & Análise de Dados (BI)",
          "titulo": "No More Spreadsheet Chaos",
          "subtitulo": "Unify fragmented Excel files into a real-time executive dashboard",
          "descricao": "If you have a finance spreadsheet, a sales spreadsheet, and an inventory spreadsheet — and none of them match —, you're flying blind. We migrate your data to a secure database and give you a visual dashboard on your phone showing true daily profit.",
          "entregaveis": [
            "Safe migration from loose spreadsheets into a secure encrypted database",
            "Executive mobile dashboard showing revenue, costs, net profit, and bills due",
            "Automated weekly performance reports delivered to your inbox every Monday",
            "Automated anomaly alerts when key business metrics drop"
          ],
          "metricaReferencia": "1-click financial closing",
          "varianteBento": "standard"
        },
        {
          "id": "integracao-rpa",
          "indice": "04",
          "canonicalCategory": "Integração de Sistemas, APIs & RPA",
          "titulo": "Make Your Existing Tools Talk To Each Other",
          "subtitulo": "Connect your e-commerce, ERP, tax invoicing, and WhatsApp",
          "descricao": "Paying an employee to copy sales data from a website and type it into an accounting system to issue invoices is burning cash. We connect your tools so data flows automatically with zero errors.",
          "entregaveis": [
            "Website sale -> ERP order -> Invoicing -> WhatsApp tracking notification",
            "Zero duplicate typing and zero customer address or tax ID mistakes",
            "Automation bots for legacy portals without modern APIs",
            "Freed-up staff that can focus on customer service and sales"
          ],
          "metricaReferencia": "Zero manual rework",
          "varianteBento": "standard"
        }
      ]
    },
    "process": {
      "eyebrow": "Transparent 4-Step Roadmap",
      "titleLine1": "How to bring your tool to life",
      "titleLine2": "with zero friction and zero risk.",
      "subtitle": "Business owners don't have time to waste on endless meetings or projects that drag on for months. Here is how our simple, risk-free process works:",
      "steps": [
        {
          "number": "01",
          "badge": "15 Min WhatsApp Chat",
          "title": "Fast & Direct Conversation",
          "description": "Send me a voice note on WhatsApp or let's hop on a quick 15-minute call. Tell me where your team loses the most time, which spreadsheets freeze, or what you want automated.",
          "highlight": "Zero confusing tech jargon"
        },
        {
          "number": "02",
          "badge": "Zero Cost Prototype",
          "title": "You See It Before You Commit",
          "description": "In 3 to 5 days, I design your system screens or your bot's logic and show you how it works. You test it with your own eyes before signing any agreement or spending a single dollar.",
          "highlight": "Zero financial risk for your business"
        },
        {
          "number": "03",
          "badge": "Ready In 7-15 Days",
          "title": "AI-Accelerated Fast Build",
          "description": "Approved the screens? I engineer the tool using modern tech and AI to accelerate delivery. No 6-month waits: in one to two weeks, your custom tool is ready for real daily use.",
          "highlight": "Weekly progress updates on WhatsApp"
        },
        {
          "number": "04",
          "badge": "True Partnership",
          "title": "Team Training & Direct Support",
          "description": "I don't deliver code and vanish. I train your team in 15 minutes (our screens are as easy to use as WhatsApp) and you keep my direct phone number for any future updates or questions.",
          "highlight": "Direct access to Jean, no support tickets"
        }
      ],
      "guarantee": {
        "badge": "JNexus Peace Of Mind",
        "title": "Why business owners choose this approach?",
        "description": "Because you never have to sign blind, expensive contracts. You see the working prototype first, agree on a fixed timeline and price, and talk directly to the builder.",
        "points": [
          "You only move forward if you love the prototype",
          "Fixed price and timeline agreed upfront",
          "Intuitive screens any employee can master in minutes"
        ],
        "cta": "Get My Free Diagnostic"
      }
    },
    "form": {
      "eyebrow": "Free Diagnostic With Zero Obligation",
      "titleLine1": "Let's talk about your business.",
      "titleLine2": "Tell me what manual process is holding your team back.",
      "subtitle": "I will review your workflow for free and show you practical ways to automate or simplify it in a few days.",
      "nameLabel": "What should I call you? *",
      "namePlaceholder": "e.g. Robert Smith",
      "companyLabel": "What is your company's name?",
      "companyPlaceholder": "e.g. Smith Logistics",
      "emailLabel": "Your best email *",
      "emailPlaceholder": "robert@company.com",
      "phoneLabel": "Your WhatsApp or Phone *",
      "phonePlaceholder": "+1 (555) 234-5678",
      "serviceLabel": "Which challenge do you want to solve first? *",
      "projectTypeLabel": "What stage is your project in?",
      "messageLabel": "Tell me briefly how things work today in your company *",
      "messagePlaceholder": "e.g. Right now we use 3 Excel spreadsheets to track jobs, and our staff wastes hours copying data into WhatsApp. I'd like a simple web tool on mobile for technicians to log status...",
      "serviceOptions": [
        {
          "value": "Desenvolvimento de Software & Web Apps",
          "label": "I want a simple custom web system for my team"
        },
        {
          "value": "Automação com IA & Agentes Inteligentes",
          "label": "I want WhatsApp to handle quotes and customer replies automatically"
        },
        {
          "value": "Engenharia & Análise de Dados (BI)",
          "label": "My Excel spreadsheets are chaotic and I want them organized into a dashboard"
        },
        {
          "value": "Integração de Sistemas, APIs & RPA",
          "label": "I want to connect tools I already use to stop retyping data"
        },
        {
          "value": "Consultoria em Dados & IA",
          "label": "Another operational challenge (I want to understand what's possible)"
        }
      ],
      "projectTypeOptions": [
        {
          "value": "Novo Projeto do Zero",
          "label": "I want to build something from scratch"
        },
        {
          "value": "Automação de Processo Existente",
          "label": "I have a manual routine and want to automate it"
        },
        {
          "value": "Integração / Pipeline de Dados",
          "label": "I want to clean up my spreadsheets or data"
        },
        {
          "value": "Evolução / Manutenção de Sistema",
          "label": "I have an existing tool and want to upgrade it"
        },
        {
          "value": "Consultoria / Diagnóstico Técnico",
          "label": "I just want an initial free diagnostic"
        }
      ],
      "submitButton": "Get My Free Diagnostic",
      "submittingButton": "Sending your details...",
      "successTitlePrefix": "Message Received Successfully!",
      "successMessage": "Got your message! I'll review your details and reach out on WhatsApp within 24 business hours with a practical evaluation.",
      "errorTitle": "Could not send message",
      "connectionError": "Connection issue. You can also email me directly at contato@jnexus.tech.",
      "steps": {
        "eyebrow": "Our Simple Process",
        "title": "Zero bureaucracy from first chat to a live working tool.",
        "step1Title": "1. Free Initial Conversation",
        "step1Desc": "You tell me where your team loses time or where spreadsheets break. I evaluate what can be automated.",
        "step2Title": "2. Proposal & Mockups",
        "step2Desc": "I show you exactly how the tool or automation will work, with a guaranteed timeline and fixed fair pricing.",
        "step3Title": "3. Fast Build & Launch",
        "step3Desc": "I build it in days, test it with you in your daily routine, and stay by your side until everything runs smoothly.",
        "directContactLabel": "Direct Contact with Jean",
        "location": "São Paulo, Brazil • Remote Consulting Worldwide"
      }
    },
    "footer": {
      "shortDescription": "We build custom web software, WhatsApp automations, and executive dashboards for businesses that want to stop wasting hours on manual tasks and broken spreadsheets.",
      "location": "São Paulo, Brazil • Global Remote Delivery",
      "rightsReserved": "All rights reserved. JNexus Digital Solutions."
    }
  },
  "es-ES": {
    "navbar": {
      "tagline": "Sistemas a Medida & Automatizaciones",
      "about": "Sobre Mí",
      "solutions": "Soluciones",
      "process": "Cómo Funciona",
      "requestService": "Diagnóstico Gratis",
      "startProject": "Hablar con Jean",
      "skipToContent": "Skip to main content",
      "themeLight": "Light",
      "themeDark": "Dark",
      "themeAriaLight": "Activate light mode",
      "themeAriaDark": "Activate dark mode",
      "languageAriaLabel": "Select language"
    },
    "hero": {
      "eyebrow": "JNexus • Software a Medida & Automatizaciones",
      "titleLine1": "¿Su empresa sigue perdiendo horas con hojas de cálculo que se cuelgan",
      "titleLine2": "y tareas repetitivas en el día a día?",
      "subtitle": "Creamos el sistema que su negocio necesita, a la medida de su flujo de trabajo. Portales web, bots de WhatsApp y paneles de control rápidos y sencillos — listos en pocos días y sin los precios abusivos de las agencias tradicionales.",
      "primaryCta": "Quiero optimizar mi operación",
      "secondaryCta": "Ver cómo funciona",
      "bento1": {
        "eyebrow": "What We Solve In Practice",
        "status": "● Ready In Just Days",
        "title": "No more wasted hours on slow manual busywork.",
        "subtitle": "We don't sell bloated generic software. We engineer the specific tool or automated workflow that eliminates your daily headaches.",
        "step1Tag": "01 / SPREADSHEETS",
        "step1Title": "Spreadsheets Out Of Control",
        "step1Desc": "We unify your messy Excel files into one secure screen where nobody deletes formulas by mistake and books balance automatically.",
        "step2Tag": "02 / WHATSAPP",
        "step2Title": "Slow Customer Quotes",
        "step2Desc": "Your leads ask for prices on WhatsApp and receive formatted PDF proposals in seconds, before they go to a competitor.",
        "step3Tag": "03 / OPERATIONS",
        "step3Title": "Work Orders & Job Tracking",
        "step3Desc": "Track orders, customers, and field staff in real time on mobile or desktop, with zero lost paperwork.",
        "metric1Label": "Less time retyping data",
        "metric2Label": "First version delivery",
        "metric3Label": "Built for your exact workflow"
      },
      "bento2": {
        "eyebrow": "Honest Comparison",
        "badge": "No Fluff",
        "title": "Why JNexus instead of a traditional software agency?",
        "subtitle": "While big agencies charge $20k+, demand 6 months, and assign junior account reps to your project, JNexus solves your problem directly with the engineer who builds it.",
        "bullets": [
          "Working version ready to test in 7 to 15 days",
          "Fair and transparent pricing tailored for growing businesses",
          "Direct communication with Jean — no middlemen or confusing tech jargon",
          "Clean, intuitive screens that any employee learns to use in 5 minutes"
        ],
        "footerLabel": "Have a process taking up too much time?",
        "footerCta": "Tell me about it"
      }
    },
    "about": {
      "eyebrow": "Who Makes It Happen",
      "titleLine1": "Straight to the point, zero middlemen,",
      "titleLine2": "and laser-focused on practical results.",
      "portraitAlt": "Professional portrait of founder Jean",
      "roleBadge": "Founder & Developer",
      "nameTitle": "Jean — Founder of JNexus",
      "roleSubtitle": "Custom Web Software, WhatsApp Automations & Real-Time Dashboards",
      "trajectoryEyebrow": "Why I Built JNexus",
      "trajectoryTitle": "I got tired of seeing business owners struggle with spreadsheets and overpriced agencies.",
      "trajectoryParagraph1": "I started JNexus after seeing small and medium business owners endure the same frustration every day: the company grows, spreadsheets start freezing, customer messages get buried in WhatsApp, and at the end of the month nobody knows the exact net profit.",
      "trajectoryParagraph2": "When they look for a traditional software house, they get sticker shock: $30k quotes and 6-month timelines filled with endless meetings. I solve this differently. Using modern developer tooling and AI acceleration, I build custom web tools and practical automations in days, at a fair price. You talk directly to me from start to finish.",
      "philosophyEyebrow": "My 3 Core Commitments",
      "pillars": [
        {
          "tag": "01 / NO TECH JARGON",
          "title": "I speak the language of your business",
          "description": "Clear, honest communication. If a feature won't save your staff real hours or boost your bottom line, we don't build it."
        },
        {
          "tag": "02 / REAL SPEED",
          "title": "Working versions in days",
          "description": "I don't spend months drafting theoretical slides. Within days, you have a functional screen or workflow to test in your routine."
        },
        {
          "tag": "03 / TRUE PARTNERSHIP",
          "title": "Hands-on until it works 100%",
          "description": "I don't deliver code and vanish. I stay with you until your team is operating smoothly and confidently every day."
        }
      ],
      "quote": "“My goal isn't to sell complex code; it's to give you the peace of mind of seeing your company run organized, clean, and automated every day.”",
      "ctaLabel": "Talk directly with Jean"
    },
    "services": {
      "eyebrow": "What We Build For Your Business",
      "titleLine1": "Practical tools.",
      "titleLine2": "Engineered for your everyday reality.",
      "subtitle": "Click any solution below to pre-select it in our contact form.",
      "solutionPrefix": "SOLUTION",
      "ctaButton": "I want this solution",
      "items": [
        {
          "id": "software-web",
          "indice": "01",
          "canonicalCategory": "Desenvolvimento de Software & Web Apps",
          "titulo": "Custom Web Systems & Portals",
          "subtitulo": "Internal tools, client portals, and job tracking systems",
          "descricao": "Tired of trying to cram your business into rigid off-the-shelf software with endless buttons you'll never use? We build simple, blazing-fast web tools so your team can register clients, issue work orders, and track jobs right from their phones.",
          "entregaveis": [
            "Clean screens for customer records, orders, and operations",
            "Self-service client portal for opening tickets and checking status",
            "Role-based access permissions (secure manager & staff controls)",
            "Works directly in mobile or desktop browsers with zero installation"
          ],
          "metricaReferencia": "First version in up to 14 days",
          "varianteBento": "hero-wide"
        },
        {
          "id": "automacao-ia",
          "indice": "02",
          "canonicalCategory": "Automação com IA & Agentes Inteligentes",
          "titulo": "WhatsApp on Autopilot",
          "subtitulo": "Reply to customers, calculate quotes, and send PDF proposals in seconds",
          "descricao": "How many sales has your business lost because an employee took 3 hours to open a spreadsheet and manually calculate a quote? Our system answers FAQs, gathers measurements, and sends a formal PDF quote instantly.",
          "entregaveis": [
            "Smart WhatsApp bot that qualifies leads and answers questions 24/7",
            "Instant automated pricing calculation and branded PDF quote dispatch",
            "Automatic OCR reading of payment receipts and incoming invoices",
            "Instant phone alert to your team when a hot order is confirmed"
          ],
          "metricaReferencia": "Saves 3+ hours every day",
          "varianteBento": "obsidian-pro"
        },
        {
          "id": "engenharia-dados",
          "indice": "03",
          "canonicalCategory": "Engenharia & Análise de Dados (BI)",
          "titulo": "No More Spreadsheet Chaos",
          "subtitulo": "Unify fragmented Excel files into a real-time executive dashboard",
          "descricao": "If you have a finance spreadsheet, a sales spreadsheet, and an inventory spreadsheet — and none of them match —, you're flying blind. We migrate your data to a secure database and give you a visual dashboard on your phone showing true daily profit.",
          "entregaveis": [
            "Safe migration from loose spreadsheets into a secure encrypted database",
            "Executive mobile dashboard showing revenue, costs, net profit, and bills due",
            "Automated weekly performance reports delivered to your inbox every Monday",
            "Automated anomaly alerts when key business metrics drop"
          ],
          "metricaReferencia": "1-click financial closing",
          "varianteBento": "standard"
        },
        {
          "id": "integracao-rpa",
          "indice": "04",
          "canonicalCategory": "Integração de Sistemas, APIs & RPA",
          "titulo": "Make Your Existing Tools Talk To Each Other",
          "subtitulo": "Connect your e-commerce, ERP, tax invoicing, and WhatsApp",
          "descricao": "Paying an employee to copy sales data from a website and type it into an accounting system to issue invoices is burning cash. We connect your tools so data flows automatically with zero errors.",
          "entregaveis": [
            "Website sale -> ERP order -> Invoicing -> WhatsApp tracking notification",
            "Zero duplicate typing and zero customer address or tax ID mistakes",
            "Automation bots for legacy portals without modern APIs",
            "Freed-up staff that can focus on customer service and sales"
          ],
          "metricaReferencia": "Zero manual rework",
          "varianteBento": "standard"
        }
      ]
    },
    "process": {
      "eyebrow": "Paso a Paso Transparente",
      "titleLine1": "Cómo hacer realidad su herramienta",
      "titleLine2": "sin complicaciones y sin dolores de cabeza.",
      "subtitle": "Un dueño de empresa no tiene tiempo que perder en reuniones eternas. Así es nuestro proceso rápido, seguro y sin riesgo para usted:",
      "steps": [
        {
          "number": "01",
          "badge": "15 Min WhatsApp Chat",
          "title": "Fast & Direct Conversation",
          "description": "Send me a voice note on WhatsApp or let's hop on a quick 15-minute call. Tell me where your team loses the most time, which spreadsheets freeze, or what you want automated.",
          "highlight": "Zero confusing tech jargon"
        },
        {
          "number": "02",
          "badge": "Zero Cost Prototype",
          "title": "You See It Before You Commit",
          "description": "In 3 to 5 days, I design your system screens or your bot's logic and show you how it works. You test it with your own eyes before signing any agreement or spending a single dollar.",
          "highlight": "Zero financial risk for your business"
        },
        {
          "number": "03",
          "badge": "Ready In 7-15 Days",
          "title": "AI-Accelerated Fast Build",
          "description": "Approved the screens? I engineer the tool using modern tech and AI to accelerate delivery. No 6-month waits: in one to two weeks, your custom tool is ready for real daily use.",
          "highlight": "Weekly progress updates on WhatsApp"
        },
        {
          "number": "04",
          "badge": "True Partnership",
          "title": "Team Training & Direct Support",
          "description": "I don't deliver code and vanish. I train your team in 15 minutes (our screens are as easy to use as WhatsApp) and you keep my direct phone number for any future updates or questions.",
          "highlight": "Direct access to Jean, no support tickets"
        }
      ],
      "guarantee": {
        "badge": "JNexus Peace Of Mind",
        "title": "Why business owners choose this approach?",
        "description": "Because you never have to sign blind, expensive contracts. You see the working prototype first, agree on a fixed timeline and price, and talk directly to the builder.",
        "points": [
          "You only move forward if you love the prototype",
          "Fixed price and timeline agreed upfront",
          "Intuitive screens any employee can master in minutes"
        ],
        "cta": "Quiero mi diagnóstico gratuito"
      }
    },
    "form": {
      "eyebrow": "Free Diagnostic With Zero Obligation",
      "titleLine1": "Let's talk about your business.",
      "titleLine2": "Tell me what manual process is holding your team back.",
      "subtitle": "I will review your workflow for free and show you practical ways to automate or simplify it in a few days.",
      "nameLabel": "What should I call you? *",
      "namePlaceholder": "e.g. Robert Smith",
      "companyLabel": "What is your company's name?",
      "companyPlaceholder": "e.g. Smith Logistics",
      "emailLabel": "Your best email *",
      "emailPlaceholder": "robert@company.com",
      "phoneLabel": "Your WhatsApp or Phone *",
      "phonePlaceholder": "+1 (555) 234-5678",
      "serviceLabel": "Which challenge do you want to solve first? *",
      "projectTypeLabel": "What stage is your project in?",
      "messageLabel": "Tell me briefly how things work today in your company *",
      "messagePlaceholder": "e.g. Right now we use 3 Excel spreadsheets to track jobs, and our staff wastes hours copying data into WhatsApp. I'd like a simple web tool on mobile for technicians to log status...",
      "serviceOptions": [
        {
          "value": "Desenvolvimento de Software & Web Apps",
          "label": "I want a simple custom web system for my team"
        },
        {
          "value": "Automação com IA & Agentes Inteligentes",
          "label": "I want WhatsApp to handle quotes and customer replies automatically"
        },
        {
          "value": "Engenharia & Análise de Dados (BI)",
          "label": "My Excel spreadsheets are chaotic and I want them organized into a dashboard"
        },
        {
          "value": "Integração de Sistemas, APIs & RPA",
          "label": "I want to connect tools I already use to stop retyping data"
        },
        {
          "value": "Consultoria em Dados & IA",
          "label": "Another operational challenge (I want to understand what's possible)"
        }
      ],
      "projectTypeOptions": [
        {
          "value": "Novo Projeto do Zero",
          "label": "I want to build something from scratch"
        },
        {
          "value": "Automação de Processo Existente",
          "label": "I have a manual routine and want to automate it"
        },
        {
          "value": "Integração / Pipeline de Dados",
          "label": "I want to clean up my spreadsheets or data"
        },
        {
          "value": "Evolução / Manutenção de Sistema",
          "label": "I have an existing tool and want to upgrade it"
        },
        {
          "value": "Consultoria / Diagnóstico Técnico",
          "label": "I just want an initial free diagnostic"
        }
      ],
      "submitButton": "Quiero mi diagnóstico gratuito",
      "submittingButton": "Sending your details...",
      "successTitlePrefix": "Message Received Successfully!",
      "successMessage": "Got your message! I'll review your details and reach out on WhatsApp within 24 business hours with a practical evaluation.",
      "errorTitle": "Could not send message",
      "connectionError": "Connection issue. You can also email me directly at contato@jnexus.tech.",
      "steps": {
        "eyebrow": "Our Simple Process",
        "title": "Zero bureaucracy from first chat to a live working tool.",
        "step1Title": "1. Free Initial Conversation",
        "step1Desc": "You tell me where your team loses time or where spreadsheets break. I evaluate what can be automated.",
        "step2Title": "2. Proposal & Mockups",
        "step2Desc": "I show you exactly how the tool or automation will work, with a guaranteed timeline and fixed fair pricing.",
        "step3Title": "3. Fast Build & Launch",
        "step3Desc": "I build it in days, test it with you in your daily routine, and stay by your side until everything runs smoothly.",
        "directContactLabel": "Direct Contact with Jean",
        "location": "São Paulo, Brazil • Remote Consulting Worldwide"
      }
    },
    "footer": {
      "shortDescription": "We build custom web software, WhatsApp automations, and executive dashboards for businesses that want to stop wasting hours on manual tasks and broken spreadsheets.",
      "location": "São Paulo, Brazil • Global Remote Delivery",
      "rightsReserved": "All rights reserved. JNexus Digital Solutions."
    }
  },
  "fr-FR": {
    "navbar": {
      "tagline": "Systèmes sur Mesure & Automatisations",
      "about": "Qui Suis-Je",
      "solutions": "Solutions",
      "process": "Comment Ça Marche",
      "requestService": "Diagnostic Gratuit",
      "startProject": "Parler à Jean",
      "skipToContent": "Skip to main content",
      "themeLight": "Light",
      "themeDark": "Dark",
      "themeAriaLight": "Activate light mode",
      "themeAriaDark": "Activate dark mode",
      "languageAriaLabel": "Select language"
    },
    "hero": {
      "eyebrow": "JNexus • Logiciels sur Mesure & Automatisations",
      "titleLine1": "Votre entreprise perd-elle encore des heures sur des fichiers Excel",
      "titleLine2": "et des tâches manuelles répétitives au quotidien ?",
      "subtitle": "Nous créons le logiciel dont votre entreprise a besoin, selon vos méthodes. Portails web, robots WhatsApp et tableaux de bord simples et rapides — prêts en quelques jours, sans la lourdeur et les tarifs prohibitifs des agences traditionnelles.",
      "primaryCta": "Je veux débloquer mes opérations",
      "secondaryCta": "Voir comment ça marche",
      "bento1": {
        "eyebrow": "What We Solve In Practice",
        "status": "● Ready In Just Days",
        "title": "No more wasted hours on slow manual busywork.",
        "subtitle": "We don't sell bloated generic software. We engineer the specific tool or automated workflow that eliminates your daily headaches.",
        "step1Tag": "01 / SPREADSHEETS",
        "step1Title": "Spreadsheets Out Of Control",
        "step1Desc": "We unify your messy Excel files into one secure screen where nobody deletes formulas by mistake and books balance automatically.",
        "step2Tag": "02 / WHATSAPP",
        "step2Title": "Slow Customer Quotes",
        "step2Desc": "Your leads ask for prices on WhatsApp and receive formatted PDF proposals in seconds, before they go to a competitor.",
        "step3Tag": "03 / OPERATIONS",
        "step3Title": "Work Orders & Job Tracking",
        "step3Desc": "Track orders, customers, and field staff in real time on mobile or desktop, with zero lost paperwork.",
        "metric1Label": "Less time retyping data",
        "metric2Label": "First version delivery",
        "metric3Label": "Built for your exact workflow"
      },
      "bento2": {
        "eyebrow": "Honest Comparison",
        "badge": "No Fluff",
        "title": "Why JNexus instead of a traditional software agency?",
        "subtitle": "While big agencies charge $20k+, demand 6 months, and assign junior account reps to your project, JNexus solves your problem directly with the engineer who builds it.",
        "bullets": [
          "Working version ready to test in 7 to 15 days",
          "Fair and transparent pricing tailored for growing businesses",
          "Direct communication with Jean — no middlemen or confusing tech jargon",
          "Clean, intuitive screens that any employee learns to use in 5 minutes"
        ],
        "footerLabel": "Have a process taking up too much time?",
        "footerCta": "Tell me about it"
      }
    },
    "about": {
      "eyebrow": "Who Makes It Happen",
      "titleLine1": "Straight to the point, zero middlemen,",
      "titleLine2": "and laser-focused on practical results.",
      "portraitAlt": "Professional portrait of founder Jean",
      "roleBadge": "Founder & Developer",
      "nameTitle": "Jean — Founder of JNexus",
      "roleSubtitle": "Custom Web Software, WhatsApp Automations & Real-Time Dashboards",
      "trajectoryEyebrow": "Why I Built JNexus",
      "trajectoryTitle": "I got tired of seeing business owners struggle with spreadsheets and overpriced agencies.",
      "trajectoryParagraph1": "I started JNexus after seeing small and medium business owners endure the same frustration every day: the company grows, spreadsheets start freezing, customer messages get buried in WhatsApp, and at the end of the month nobody knows the exact net profit.",
      "trajectoryParagraph2": "When they look for a traditional software house, they get sticker shock: $30k quotes and 6-month timelines filled with endless meetings. I solve this differently. Using modern developer tooling and AI acceleration, I build custom web tools and practical automations in days, at a fair price. You talk directly to me from start to finish.",
      "philosophyEyebrow": "My 3 Core Commitments",
      "pillars": [
        {
          "tag": "01 / NO TECH JARGON",
          "title": "I speak the language of your business",
          "description": "Clear, honest communication. If a feature won't save your staff real hours or boost your bottom line, we don't build it."
        },
        {
          "tag": "02 / REAL SPEED",
          "title": "Working versions in days",
          "description": "I don't spend months drafting theoretical slides. Within days, you have a functional screen or workflow to test in your routine."
        },
        {
          "tag": "03 / TRUE PARTNERSHIP",
          "title": "Hands-on until it works 100%",
          "description": "I don't deliver code and vanish. I stay with you until your team is operating smoothly and confidently every day."
        }
      ],
      "quote": "“My goal isn't to sell complex code; it's to give you the peace of mind of seeing your company run organized, clean, and automated every day.”",
      "ctaLabel": "Talk directly with Jean"
    },
    "services": {
      "eyebrow": "What We Build For Your Business",
      "titleLine1": "Practical tools.",
      "titleLine2": "Engineered for your everyday reality.",
      "subtitle": "Click any solution below to pre-select it in our contact form.",
      "solutionPrefix": "SOLUTION",
      "ctaButton": "I want this solution",
      "items": [
        {
          "id": "software-web",
          "indice": "01",
          "canonicalCategory": "Desenvolvimento de Software & Web Apps",
          "titulo": "Custom Web Systems & Portals",
          "subtitulo": "Internal tools, client portals, and job tracking systems",
          "descricao": "Tired of trying to cram your business into rigid off-the-shelf software with endless buttons you'll never use? We build simple, blazing-fast web tools so your team can register clients, issue work orders, and track jobs right from their phones.",
          "entregaveis": [
            "Clean screens for customer records, orders, and operations",
            "Self-service client portal for opening tickets and checking status",
            "Role-based access permissions (secure manager & staff controls)",
            "Works directly in mobile or desktop browsers with zero installation"
          ],
          "metricaReferencia": "First version in up to 14 days",
          "varianteBento": "hero-wide"
        },
        {
          "id": "automacao-ia",
          "indice": "02",
          "canonicalCategory": "Automação com IA & Agentes Inteligentes",
          "titulo": "WhatsApp on Autopilot",
          "subtitulo": "Reply to customers, calculate quotes, and send PDF proposals in seconds",
          "descricao": "How many sales has your business lost because an employee took 3 hours to open a spreadsheet and manually calculate a quote? Our system answers FAQs, gathers measurements, and sends a formal PDF quote instantly.",
          "entregaveis": [
            "Smart WhatsApp bot that qualifies leads and answers questions 24/7",
            "Instant automated pricing calculation and branded PDF quote dispatch",
            "Automatic OCR reading of payment receipts and incoming invoices",
            "Instant phone alert to your team when a hot order is confirmed"
          ],
          "metricaReferencia": "Saves 3+ hours every day",
          "varianteBento": "obsidian-pro"
        },
        {
          "id": "engenharia-dados",
          "indice": "03",
          "canonicalCategory": "Engenharia & Análise de Dados (BI)",
          "titulo": "No More Spreadsheet Chaos",
          "subtitulo": "Unify fragmented Excel files into a real-time executive dashboard",
          "descricao": "If you have a finance spreadsheet, a sales spreadsheet, and an inventory spreadsheet — and none of them match —, you're flying blind. We migrate your data to a secure database and give you a visual dashboard on your phone showing true daily profit.",
          "entregaveis": [
            "Safe migration from loose spreadsheets into a secure encrypted database",
            "Executive mobile dashboard showing revenue, costs, net profit, and bills due",
            "Automated weekly performance reports delivered to your inbox every Monday",
            "Automated anomaly alerts when key business metrics drop"
          ],
          "metricaReferencia": "1-click financial closing",
          "varianteBento": "standard"
        },
        {
          "id": "integracao-rpa",
          "indice": "04",
          "canonicalCategory": "Integração de Sistemas, APIs & RPA",
          "titulo": "Make Your Existing Tools Talk To Each Other",
          "subtitulo": "Connect your e-commerce, ERP, tax invoicing, and WhatsApp",
          "descricao": "Paying an employee to copy sales data from a website and type it into an accounting system to issue invoices is burning cash. We connect your tools so data flows automatically with zero errors.",
          "entregaveis": [
            "Website sale -> ERP order -> Invoicing -> WhatsApp tracking notification",
            "Zero duplicate typing and zero customer address or tax ID mistakes",
            "Automation bots for legacy portals without modern APIs",
            "Freed-up staff that can focus on customer service and sales"
          ],
          "metricaReferencia": "Zero manual rework",
          "varianteBento": "standard"
        }
      ]
    },
    "process": {
      "eyebrow": "Feuille de Route en 4 Étapes",
      "titleLine1": "Donner vie à votre outil",
      "titleLine2": "sans complexité et sans mauvaise surprise.",
      "subtitle": "Un dirigeant d'entreprise n'a pas de temps à perdre en réunions interminables. Voici notre démarche rapide, transparente et sans risque :",
      "steps": [
        {
          "number": "01",
          "badge": "15 Min WhatsApp Chat",
          "title": "Fast & Direct Conversation",
          "description": "Send me a voice note on WhatsApp or let's hop on a quick 15-minute call. Tell me where your team loses the most time, which spreadsheets freeze, or what you want automated.",
          "highlight": "Zero confusing tech jargon"
        },
        {
          "number": "02",
          "badge": "Zero Cost Prototype",
          "title": "You See It Before You Commit",
          "description": "In 3 to 5 days, I design your system screens or your bot's logic and show you how it works. You test it with your own eyes before signing any agreement or spending a single dollar.",
          "highlight": "Zero financial risk for your business"
        },
        {
          "number": "03",
          "badge": "Ready In 7-15 Days",
          "title": "AI-Accelerated Fast Build",
          "description": "Approved the screens? I engineer the tool using modern tech and AI to accelerate delivery. No 6-month waits: in one to two weeks, your custom tool is ready for real daily use.",
          "highlight": "Weekly progress updates on WhatsApp"
        },
        {
          "number": "04",
          "badge": "True Partnership",
          "title": "Team Training & Direct Support",
          "description": "I don't deliver code and vanish. I train your team in 15 minutes (our screens are as easy to use as WhatsApp) and you keep my direct phone number for any future updates or questions.",
          "highlight": "Direct access to Jean, no support tickets"
        }
      ],
      "guarantee": {
        "badge": "JNexus Peace Of Mind",
        "title": "Why business owners choose this approach?",
        "description": "Because you never have to sign blind, expensive contracts. You see the working prototype first, agree on a fixed timeline and price, and talk directly to the builder.",
        "points": [
          "You only move forward if you love the prototype",
          "Fixed price and timeline agreed upfront",
          "Intuitive screens any employee can master in minutes"
        ],
        "cta": "Je veux mon diagnostic gratuit"
      }
    },
    "form": {
      "eyebrow": "Free Diagnostic With Zero Obligation",
      "titleLine1": "Let's talk about your business.",
      "titleLine2": "Tell me what manual process is holding your team back.",
      "subtitle": "I will review your workflow for free and show you practical ways to automate or simplify it in a few days.",
      "nameLabel": "What should I call you? *",
      "namePlaceholder": "e.g. Robert Smith",
      "companyLabel": "What is your company's name?",
      "companyPlaceholder": "e.g. Smith Logistics",
      "emailLabel": "Your best email *",
      "emailPlaceholder": "robert@company.com",
      "phoneLabel": "Your WhatsApp or Phone *",
      "phonePlaceholder": "+1 (555) 234-5678",
      "serviceLabel": "Which challenge do you want to solve first? *",
      "projectTypeLabel": "What stage is your project in?",
      "messageLabel": "Tell me briefly how things work today in your company *",
      "messagePlaceholder": "e.g. Right now we use 3 Excel spreadsheets to track jobs, and our staff wastes hours copying data into WhatsApp. I'd like a simple web tool on mobile for technicians to log status...",
      "serviceOptions": [
        {
          "value": "Desenvolvimento de Software & Web Apps",
          "label": "I want a simple custom web system for my team"
        },
        {
          "value": "Automação com IA & Agentes Inteligentes",
          "label": "I want WhatsApp to handle quotes and customer replies automatically"
        },
        {
          "value": "Engenharia & Análise de Dados (BI)",
          "label": "My Excel spreadsheets are chaotic and I want them organized into a dashboard"
        },
        {
          "value": "Integração de Sistemas, APIs & RPA",
          "label": "I want to connect tools I already use to stop retyping data"
        },
        {
          "value": "Consultoria em Dados & IA",
          "label": "Another operational challenge (I want to understand what's possible)"
        }
      ],
      "projectTypeOptions": [
        {
          "value": "Novo Projeto do Zero",
          "label": "I want to build something from scratch"
        },
        {
          "value": "Automação de Processo Existente",
          "label": "I have a manual routine and want to automate it"
        },
        {
          "value": "Integração / Pipeline de Dados",
          "label": "I want to clean up my spreadsheets or data"
        },
        {
          "value": "Evolução / Manutenção de Sistema",
          "label": "I have an existing tool and want to upgrade it"
        },
        {
          "value": "Consultoria / Diagnóstico Técnico",
          "label": "I just want an initial free diagnostic"
        }
      ],
      "submitButton": "Je veux mon diagnostic gratuit",
      "submittingButton": "Sending your details...",
      "successTitlePrefix": "Message Received Successfully!",
      "successMessage": "Got your message! I'll review your details and reach out on WhatsApp within 24 business hours with a practical evaluation.",
      "errorTitle": "Could not send message",
      "connectionError": "Connection issue. You can also email me directly at contato@jnexus.tech.",
      "steps": {
        "eyebrow": "Our Simple Process",
        "title": "Zero bureaucracy from first chat to a live working tool.",
        "step1Title": "1. Free Initial Conversation",
        "step1Desc": "You tell me where your team loses time or where spreadsheets break. I evaluate what can be automated.",
        "step2Title": "2. Proposal & Mockups",
        "step2Desc": "I show you exactly how the tool or automation will work, with a guaranteed timeline and fixed fair pricing.",
        "step3Title": "3. Fast Build & Launch",
        "step3Desc": "I build it in days, test it with you in your daily routine, and stay by your side until everything runs smoothly.",
        "directContactLabel": "Direct Contact with Jean",
        "location": "São Paulo, Brazil • Remote Consulting Worldwide"
      }
    },
    "footer": {
      "shortDescription": "We build custom web software, WhatsApp automations, and executive dashboards for businesses that want to stop wasting hours on manual tasks and broken spreadsheets.",
      "location": "São Paulo, Brazil • Global Remote Delivery",
      "rightsReserved": "All rights reserved. JNexus Digital Solutions."
    }
  }
};

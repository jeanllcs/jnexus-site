# CLAUDE.md — Guia de Engenharia JNexus (Padrões ECC)

Este projeto segue rigorosamente as regras instaladas em `.agents/rules/` (Everything Claude Code / ECC).

## Comandos Principais

- `npm run dev` — Inicia o servidor de desenvolvimento Next.js em `http://localhost:3000`
- `npm run build` — Valida tipos TypeScript, regras de Server/Client Components e gera o build de produção
- `npm run lint` — Executa a verificação estática de código

## Arquitetura por Domínio/Superfície (`web-coding-style.md`)

```text
src/
├── app/
│   ├── api/solicitar-servico/route.ts   # Endpoint POST com validação, rate-limit, honeypot e envio SMTP
│   ├── globals.css                      # Importação dos tokens CSS e utilitários Liquid Glass
│   ├── layout.tsx                       # Server Component raiz (Metadados e SEO)
│   └── page.tsx                         # Server Component principal compondo as superfícies
├── components/
│   ├── navigation/Navbar.tsx            # Barra superior em Liquid Glass (Server Component)
│   ├── hero/Hero.tsx                    # Apresentação editorial + Bento de Telemetria (Server Component)
│   ├── services/ServicesSection.tsx     # Bento Grid assimétrico de soluções (Client interaction bridge)
│   ├── portfolio/PortfolioSection.tsx   # Cases reais com Segmented Control estilo Apple
│   ├── stack/TechStackSection.tsx       # Especificações técnicas em layout de ficha de hardware (Server Component)
│   ├── request-form/ServiceRequestForm.tsx # Formulário acessível + Inspetor JSON/E-mail ao vivo
│   ├── footer/Footer.tsx                # Rodapé institucional (Server Component)
│   └── ui/SurfaceCard.tsx               # Componente base de superfície Bento / Liquid Glass
├── data/
│   └── portfolioData.ts                 # Dados imutáveis da JNexus (Projetos, Serviços, Stack)
├── lib/
│   ├── emailTemplate.ts                 # Gerador de e-mail HTML com escape contra XSS
│   └── validation.ts                    # Validação determinística de payload, sanitização e rate-limit
├── styles/
│   ├── tokens.css                       # CSS Custom Properties (cores, tipografia fluida, motion)
│   └── typography.css                   # Regras tipográficas editoriais e tabular-nums
└── types/
    └── serviceRequest.ts                # Contratos TypeScript estritos (sem `any`, com `ApiResponse<T>`)
```

## Padrões Obrigatórios (ECC Rules)

1. **Imutabilidade (`common-coding-style.md`):** Nunca mutar objetos ou arrays diretamente; usar `Readonly<T>` em props e retornos.
2. **TypeScript Estrito (`typescript-coding-style.md`):** Sem uso de `any`, sem `React.FC`, tipos explícitos de retorno nas funções e componentes exportados, envelope `ApiResponse<T>` padronizado.
3. **Fronteira Server/Client (`react-coding-style.md`):** Componentes são Server Components por padrão. Apenas módulos com estado/eventos de navegador usam `"use client"`.
4. **Segurança Web (`web-security.md`):** Validação no cliente e no servidor, campo *honeypot* anti-bot, *rate limiting* por IP na rota de API, escape de HTML contra XSS e cabeçalhos HTTP de segurança em `next.config.mjs`.
5. **Qualidade Visual (`web-design-quality.md` & `DESIGN.md`):** Estética Apple Editorial & Liquid Glass; proibidos gradientes roxo/azul genéricos, cartões repetitivos sem hierarquia ou elementos sem função.

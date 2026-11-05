# JNexus — Portfólio & Central de Serviços (Dados, Automação & IA)

Portal institucional, vitrine de portfólio e sistema de requisição de serviços da **JNexus**, desenvolvido em **Next.js (App Router) + TypeScript + Tailwind CSS + Nodemailer**.

---

## Como funciona o fluxo de Solicitação de Serviços?

1. **No Front-end ([`ServiceRequestForm.tsx`](./src/components/ServiceRequestForm.tsx)):**
   - À medida que o cliente preenche seus dados de contato e escolhe o serviço (ex: *Automação com IA & Agentes Inteligentes*, *Engenharia & Análise de Dados*), um objeto **JSON padronizado** é computado em tempo real.
   - O visitante (ou você) pode visualizar o JSON ao vivo, copiá-lo ou baixar o arquivo `.json`.
2. **Na API Route ([`route.ts`](./src/app/api/solicitar-servico/route.ts)):**
   - Recebe o JSON via `POST /api/solicitar-servico`.
   - Valida os campos obrigatórios e gera um protocolo único (`JNEXUS-AAAAMMDD-XXXX`).
   - Transforma o JSON em um **E-mail HTML formatado** ([`emailTemplate.ts`](./src/lib/emailTemplate.ts)) contendo:
     - Tabela executiva com dados do cliente e escopo do projeto;
     - Botões de ação rápida (*Responder por E-mail* e *Chamar no WhatsApp*);
     - Bloco `<pre>` com o JSON identado no corpo do e-mail;
     - O arquivo `.json` anexado ao e-mail.

---

## Como rodar o projeto na sua máquina

No terminal, dentro da pasta `d:\Página para serviços`, execute:

```bash
npm install
npm run dev
```

Depois, abra no navegador: **`http://localhost:3000`**

---

## Como configurar o envio real para o seu E-mail (Gmail SMTP)

1. Duplique o arquivo [`.env.example`](./.env.example) e renomeie a cópia para **`.env.local`**.
2. Preencha com o seu e-mail e sua **Senha de App do Google**:

```env
EMAIL_USER=seu_email@gmail.com
EMAIL_PASS=sua_senha_de_app_de_16_digitos
EMAIL_TO=seu_email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
```

> **Dica:** Mesmo antes de configurar o `.env.local`, você já pode testar o formulário no navegador! O sistema entrará automaticamente em **Modo de Simulação**, computando o JSON, gerando o protocolo e exibindo na própria tela a pré-visualização exata de como o e-mail formatado chega na sua caixa de entrada.

---

## Onde editar seus Projetos e Dados de Contato?

Todos os textos, contatos, serviços e cases do portfólio estão centralizados em um único arquivo fácil de editar:
- [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

# DESIGN.md — JNexus Visual System (Apple Editorial & Liquid Glass)

Este documento define o sistema de design da **JNexus**, alinhado às diretrizes do **ECC (`web-design-quality.md`, `web-coding-style.md`, `frontend-design-direction` e `liquid-glass-design`)** para eliminar padrões visuais genéricos gerados por IA ("AI slop").

---

## 1. Direção de Design (`frontend-design-direction`)

1. **Propósito:** Apresentar a engenharia de Dados, Automação e Inteligência Artificial da JNexus com a sobriedade de um produto de hardware/software de precisão e converter visitantes em solicitações técnicas estruturadas em JSON.
2. **Público:** Diretores de operação, CTOs, gestores de negócio e líderes técnicos que precisam escanear resultados reais, arquitetura e requisitar projetos sem fricção.
3. **Tom:** **Apple Editorial & Pro Studio** — luminoso, silencioso, tipograficamente rigoroso, com contraste intencional entre superfícies claras (`#F5F5F7` / `#FFFFFF`) e painéis de inspeção técnica em carbono profundo (`#111113`).
4. **Detalhe Memorável:** Navegação flutuante em **Liquid Glass** combinada a um **Inspetor de Payload JSON em Tempo Real** com estética de utilitário nativo macOS/iOS 26.

---

## 2. O que foi banido (Anti-AI-Slop Checklist)

Seguindo `.agents/rules/web-design-quality.md` e `design-system`:
- **Sem gradientes neon roxo/ciano** (`from-cyan-500 to-indigo-600`) em botões, títulos ou fundos.
- **Sem "glow blobs" decorativos** flutuando atrás da seção Hero.
- **Sem ícones genéricos de "Sparkles" (`✨`)** no topo de cada seção.
- **Sem grades de cartões idênticos (2x2 uniformes):** Substituídas por **Bento Grids assimétricos** com variação de escala, peso visual e densidade de informação.
- **Sem botões falsos de janela (vermelho/amarelo/verde) meramente decorativos:** O inspetor de código funciona como uma ferramenta real de engenharia.

---

## 3. Paleta Semântica e Materiais

| Token | Valor | Papel Semântico |
| :--- | :--- | :--- |
| `--color-canvas` | `#F5F5F7` | Fundo principal Alabaster (descanso ocular e contraste de superfície) |
| `--color-surface` | `#FFFFFF` | Superfície elevada dos módulos Bento primários |
| `--color-surface-subtle` | `#ECECEF` | Controles segmentados (Segmented Controls) e áreas secundárias |
| `--color-obsidian` | `#111113` | Superfície exclusiva para código, terminal JSON e card Pro em destaque |
| `--color-ink` | `#1D1D1F` | Tipografia primária de alto contraste (WCAG AAA) |
| `--color-ink-secondary` | `#6E6E73` | Corpo de texto secundário em tom titânio |
| `--color-accent` | `#0066CC` | Azul interativo de sistema (links, foco e indicadores ativos) |
| `--glass-surface` | `rgba(255, 255, 255, 0.76)` | Material **Liquid Glass** com `backdrop-filter: saturate(180%) blur(20px)` |

---

## 4. Tipografia e Ritmo Espacial

- **Fonte Principal (`--font-sans`):** Pilha nativa `-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", sans-serif`.
- **Tracking (Espaçamento entre letras):** Títulos com tracking negativo preciso (`-0.035em`), subtítulos técnicos com `-0.02em` e números alinhados com `font-variant-numeric: tabular-nums`.
- **Animações (`web-coding-style.md`):** Exclusivamente em `transform` e `opacity` usando a curva `--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)`, respeitando `prefers-reduced-motion: reduce`.

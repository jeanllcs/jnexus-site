import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JNexus — Engenharia de Dados, Automação & Inteligência Artificial",
  description:
    "Portfólio técnico e central de requisição de serviços da JNexus. Arquiteturas de Dados, Agentes de IA, Integrações de APIs e Software sob medida.",
  icons: {
    icon: "/logo_circle_dark.png",
    shortcut: "/logo_circle_dark.png",
    apple: "/logo_circle_dark.png",
  },
};

export interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-apple-canvas text-apple-ink antialiased selection:bg-apple-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}

"use client";

import type React from "react";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/navigation/ThemeToggle";
import { LanguageSelector } from "@/components/navigation/LanguageSelector";
import { useLanguage } from "@/i18n/LanguageContext";
import { Logo } from "@/components/ui/Logo";

export function Navbar(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-apple-btnBg focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-apple-btnText focus:shadow-lg"
      >
        {t.navbar.skipToContent}
      </a>
      <nav
        aria-label="Navegação principal"
        className="liquid-glass-bar mx-auto flex w-full items-center justify-between gap-4 rounded-full px-4 py-2 sm:px-6"
      >
        {/* Marca JNexus com Logo Oficial */}
        <a
          href="#inicio"
          aria-label="JNexus Início"
          className="flex shrink-0 items-center text-apple-ink transition-opacity hover:opacity-85"
        >
          <Logo variant="full" height={32} />
        </a>

        {/* Links Centrais de Navegação */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-xs sm:text-sm font-medium text-apple-secondary whitespace-nowrap">
          <a
            href="#sobre"
            className="py-1 transition-colors hover:text-apple-ink"
          >
            {t.navbar.about}
          </a>
          <a
            href="#servicos"
            className="py-1 transition-colors hover:text-apple-ink"
          >
            {t.navbar.solutions}
          </a>
          <a
            href="#como-funciona"
            className="py-1 transition-colors hover:text-apple-ink"
          >
            {t.navbar.process}
          </a>
        </div>

        {/* Ações à Direita: Idioma + Tema + CTA Iniciar Projeto */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <LanguageSelector />
          <ThemeToggle />

          <a
            href="#solicitar"
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-apple-btnBg px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-apple-btnText shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.navbar.startProject}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

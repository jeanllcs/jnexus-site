"use client";

import type React from "react";
import { JNEXUS_INFO } from "@/data/portfolioData";
import { useLanguage } from "@/i18n/LanguageContext";
import { Logo } from "@/components/ui/Logo";

export function Footer(): React.JSX.Element {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-apple-border bg-apple-canvas py-14 text-apple-secondary">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a
              href="#inicio"
              aria-label="JNexus Início"
              className="inline-block transition-opacity hover:opacity-85"
            >
              <Logo variant="full" height={36} />
            </a>
            <p className="mt-3 max-w-md text-xs sm:text-sm text-apple-secondary leading-relaxed">
              {t.footer.shortDescription}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-xs sm:text-sm md:items-end">
            <a
              href={`mailto:${JNEXUS_INFO.emailContato}`}
              className="font-medium text-apple-ink hover:text-apple-blue transition-colors"
            >
              {JNEXUS_INFO.emailContato}
            </a>
            <span>{t.footer.location}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between border-t border-apple-border pt-6 text-xs text-apple-secondary sm:flex-row">
          <p>
            Copyright © {currentYear} JNexus. {t.footer.rightsReserved}
          </p>
          <div className="mt-2 flex flex-wrap gap-6 sm:mt-0">
            <a href="#sobre" className="hover:text-apple-ink transition-colors">
              {t.navbar.about}
            </a>
            <a href="#servicos" className="hover:text-apple-ink transition-colors">
              {t.navbar.solutions}
            </a>
            <a href="#como-funciona" className="hover:text-apple-ink transition-colors">
              {t.navbar.process}
            </a>
            <a href="#solicitar" className="hover:text-apple-ink transition-colors">
              {t.navbar.requestService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import type React from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export function AboutSection(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <section
      id="sobre"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 border-t border-apple-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="apple-eyebrow mb-3">{t.about.eyebrow}</p>
          <h2 id="about-heading" className="apple-heading-section">
            {t.about.titleLine1}
            <br />
            <span className="text-apple-secondary">{t.about.titleLine2}</span>
          </h2>
        </div>

        {/* Apple Editorial Bento Grid: Portrait (5 cols) + Story & Principles (7 cols) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Coluna Esquerda: Retrato Executivo em Estúdio */}
          <SurfaceCard
            variant="obsidian"
            className="lg:col-span-5 relative overflow-hidden min-h-[500px] sm:min-h-[580px] flex flex-col justify-end p-6 sm:p-7"
          >
            {/* Imagem servida diretamente de D:\Página para serviços\Assets\foto_perfil.jpg */}
            <img
              src="/api/assets/foto-perfil"
              alt={t.about.portraitAlt}
              width={640}
              height={850}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            />

            {/* Vinheta sutil na base para leitura perfeita do cartão Liquid Glass */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
            />

            {/* Cápsula Liquid Glass com Identificação */}
            <div className="relative z-10 rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-md">
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] font-medium text-white">
                {t.about.roleBadge}
              </span>
              <h3 className="mt-2.5 text-lg font-bold tracking-tight text-white">
                {t.about.nameTitle}
              </h3>
              <p className="mt-0.5 text-xs text-[#E5E5EA]">
                {t.about.roleSubtitle}
              </p>
            </div>
          </SurfaceCard>

          {/* Coluna Direita: Trajetória Profissional + Satisfação do Cliente & Melhoria Contínua */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Módulo 1: Trajetória */}
            <SurfaceCard variant="light" className="p-7 sm:p-9">
              <div className="border-b border-apple-border pb-4">
                <span className="apple-eyebrow">
                  {t.about.trajectoryEyebrow}
                </span>
                <h3 className="apple-heading-card mt-2 text-apple-ink">
                  {t.about.trajectoryTitle}
                </h3>
              </div>

              <div className="mt-5 space-y-4 text-sm sm:text-base text-apple-secondary leading-relaxed">
                <p>{t.about.trajectoryParagraph1}</p>
                <p>{t.about.trajectoryParagraph2}</p>
              </div>

              <blockquote className="mt-6 rounded-2xl bg-apple-canvas border border-apple-border p-4 sm:p-5 text-xs sm:text-sm font-medium italic text-apple-ink leading-relaxed">
                {t.about.quote}
              </blockquote>
            </SurfaceCard>

            {/* Módulo 2: Satisfação do Cliente & Melhoria Contínua */}
            <SurfaceCard variant="light" className="p-7 sm:p-9">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-apple-border pb-4">
                <span className="apple-eyebrow">
                  {t.about.philosophyEyebrow}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {t.about.pillars.map((pillar) => (
                  <div
                    key={pillar.tag}
                    className="rounded-2xl bg-apple-canvas p-4 border border-apple-border flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[10px] font-semibold text-apple-blue">
                        {pillar.tag}
                      </span>
                      <h4 className="mt-2 text-sm font-semibold text-apple-ink leading-snug">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-apple-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-apple-border flex items-center justify-end">
                <a
                  href="#solicitar"
                  className="inline-flex items-center gap-2 rounded-full bg-apple-btnBg px-5 py-2.5 text-xs sm:text-sm font-semibold text-apple-btnText transition-transform hover:scale-[1.01] active:scale-[0.98]"
                >
                  <span>{t.about.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </SurfaceCard>
          </div>
        </div>
      </div>
    </section>
  );
}

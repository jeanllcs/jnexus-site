"use client";

import type React from "react";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { useLanguage } from "@/i18n/LanguageContext";

export function Hero(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="pt-12 pb-20 sm:pt-16 sm:pb-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Editorial Header */}
        <div className="max-w-4xl">
          <p className="apple-eyebrow mb-4">{t.hero.eyebrow}</p>
          <h1 id="hero-heading" className="apple-heading-hero">
            {t.hero.titleLine1}
            <br />
            <span className="text-apple-secondary">{t.hero.titleLine2}</span>
          </h1>
          <p className="apple-body-large mt-6 max-w-2xl">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <a
              href="#solicitar"
              className="inline-flex items-center gap-2 rounded-full bg-apple-btnBg px-6 py-3.5 text-sm font-semibold text-apple-btnText transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#como-funciona"
              className="liquid-glass-pill inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-apple-ink hover:opacity-90"
            >
              <span>{t.hero.secondaryCta}</span>
              <ArrowDownRight
                className="h-4 w-4 text-apple-secondary"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Asymmetric Apple Bento Showcase */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Bento Module 1: 7 Columns — Operational Architecture */}
          <SurfaceCard
            variant="light"
            className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-apple-border pb-4">
                <span className="apple-eyebrow">{t.hero.bento1.eyebrow}</span>
                <span className="font-mono text-xs text-apple-emerald font-medium">
                  {t.hero.bento1.status}
                </span>
              </div>

              <h2 className="mt-6 text-xl sm:text-2xl font-semibold tracking-tight text-apple-ink">
                {t.hero.bento1.title}
              </h2>
              <p className="mt-2 text-sm text-apple-secondary leading-relaxed">
                {t.hero.bento1.subtitle}
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-apple-canvas p-4 border border-apple-border">
                  <span className="font-mono text-[11px] font-semibold text-apple-secondary">
                    {t.hero.bento1.step1Tag}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-apple-ink">
                    {t.hero.bento1.step1Title}
                  </p>
                  <p className="mt-1 text-xs text-apple-secondary leading-relaxed">
                    {t.hero.bento1.step1Desc}
                  </p>
                </div>

                <div className="rounded-2xl bg-apple-canvas p-4 border border-apple-border">
                  <span className="font-mono text-[11px] font-semibold text-apple-blue">
                    {t.hero.bento1.step2Tag}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-apple-ink">
                    {t.hero.bento1.step2Title}
                  </p>
                  <p className="mt-1 text-xs text-apple-secondary leading-relaxed">
                    {t.hero.bento1.step2Desc}
                  </p>
                </div>

                <div className="rounded-2xl bg-apple-canvas p-4 border border-apple-border">
                  <span className="font-mono text-[11px] font-semibold text-apple-emerald">
                    {t.hero.bento1.step3Tag}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-apple-ink">
                    {t.hero.bento1.step3Title}
                  </p>
                  <p className="mt-1 text-xs text-apple-secondary leading-relaxed">
                    {t.hero.bento1.step3Desc}
                  </p>
                </div>
              </div>

              {/* Visual Preview do Dashboard Sob Medida */}
              <div className="mt-6 overflow-hidden rounded-2xl border border-apple-border/70 bg-black/40 shadow-sm">
                <img
                  src="/mockups/dashboard_sistema.jpg"
                  alt="Prévia de Sistema e Dashboard Sob Medida JNexus"
                  width={900}
                  height={450}
                  loading="eager"
                  className="w-full object-cover max-h-56 sm:max-h-64 transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-apple-border pt-6">
              <div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-ink tabular-nums">
                  -78%
                </p>
                <p className="mt-0.5 text-xs text-apple-secondary">
                  {t.hero.bento1.metric1Label}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-ink tabular-nums">
                  24/7
                </p>
                <p className="mt-0.5 text-xs text-apple-secondary">
                  {t.hero.bento1.metric2Label}
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold tracking-tight text-apple-ink tabular-nums">
                  100%
                </p>
                <p className="mt-0.5 text-xs text-apple-secondary">
                  {t.hero.bento1.metric3Label}
                </p>
              </div>
            </div>
          </SurfaceCard>

          {/* Bento Module 2: 5 Columns — Obsidian Pro Value Proposition */}
          <SurfaceCard
            variant="obsidian"
            className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A1A1A6]">
                  {t.hero.bento2.eyebrow}
                </span>
                <span className="rounded-full bg-white/10 px-2.5 py-0.5 font-mono text-[11px] text-white">
                  {t.hero.bento2.badge}
                </span>
              </div>

              <h2 className="mt-6 text-xl font-semibold tracking-tight text-white">
                {t.hero.bento2.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#A1A1A6] leading-relaxed">
                {t.hero.bento2.subtitle}
              </p>

              <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs sm:text-sm text-[#E5E5EA]">
                {t.hero.bento2.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#30D158]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A1A1A6]">
              <span>{t.hero.bento2.footerLabel}</span>
              <a
                href="#solicitar"
                className="font-medium text-white underline underline-offset-4 hover:text-[#E5E5EA]"
              >
                {t.hero.bento2.footerCta}
              </a>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}

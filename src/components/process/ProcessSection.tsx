"use client";

import type React from "react";
import {
  MessageSquare,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ThumbsUp,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

const STEP_ICONS = [
  MessageSquare,
  Sparkles,
  Zap,
  CheckCircle2,
] as const;

export function ProcessSection(): React.JSX.Element {
  const { t } = useLanguage();

  return (
    <section
      id="como-funciona"
      aria-labelledby="process-heading"
      className="py-20 sm:py-28 border-t border-apple-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho Centralizado */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="apple-eyebrow mb-3">{t.process.eyebrow}</p>
          <h2 id="process-heading" className="apple-heading-section">
            {t.process.titleLine1}
            <br />
            <span className="text-apple-secondary">
              {t.process.titleLine2}
            </span>
          </h2>
          <p className="apple-body-large mt-4 mx-auto max-w-2xl">
            {t.process.subtitle}
          </p>
        </div>

        {/* Grade das 4 Etapas Centralizada e Harmoniosa */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto items-stretch">
          {t.process.steps.map((step, index) => {
            const Icon = STEP_ICONS[index] || CheckCircle2;
            const isHighlighted = index === 1; // Protótipo sem custo em destaque

            return (
              <SurfaceCard
                key={step.number}
                variant={isHighlighted ? "obsidian" : "light"}
                className={`p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:translate-y-[-2px] ${
                  isHighlighted ? "ring-2 ring-apple-blue/50 shadow-md" : ""
                }`}
              >
                <div>
                  {/* Topo do Card: Número da Etapa + Badge */}
                  <div
                    className={`flex items-center justify-between border-b pb-4 ${
                      isHighlighted ? "border-white/10" : "border-apple-border/50"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs font-bold tracking-wider ${
                        isHighlighted ? "text-apple-blue" : "text-apple-secondary"
                      }`}
                    >
                      ETAPA {step.number}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-medium ${
                        isHighlighted
                          ? "bg-white/10 text-white"
                          : "bg-apple-canvas text-apple-secondary border border-apple-border"
                      }`}
                    >
                      {step.badge}
                    </span>
                  </div>

                  {/* Ícone */}
                  <div
                    className={`mt-6 flex h-11 w-11 items-center justify-center rounded-2xl border ${
                      isHighlighted
                        ? "bg-white/10 border-white/10 text-white"
                        : "bg-apple-canvas border-apple-border/60 text-apple-blue"
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  {/* Título e Descrição */}
                  <h3
                    className={`mt-4 text-lg font-bold tracking-tight ${
                      isHighlighted ? "text-white" : "text-apple-ink"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                      isHighlighted ? "text-[#A1A1A6]" : "text-apple-secondary"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Destaque Prático na Base do Card */}
                <div
                  className={`mt-6 pt-4 border-t text-[11px] font-medium flex items-center gap-1.5 ${
                    isHighlighted
                      ? "border-white/10 text-emerald-400"
                      : "border-apple-border/50 text-apple-ink"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{step.highlight}</span>
                </div>
              </SurfaceCard>
            );
          })}
        </div>

        {/* Card de Garantia & Alívio de Risco 100% Centralizado */}
        <SurfaceCard
          variant="light"
          className="mt-12 max-w-3xl mx-auto p-8 sm:p-10 border border-apple-border bg-gradient-to-br from-apple-surface to-apple-canvas text-center flex flex-col items-center shadow-sm"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-apple-canvas px-4 py-1.5 border border-apple-border">
            <ShieldCheck
              className="h-4 w-4 text-emerald-500 shrink-0"
              aria-hidden="true"
            />
            <span className="font-mono text-xs font-semibold text-apple-ink">
              {t.process.guarantee.badge}
            </span>
          </div>

          <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-apple-ink max-w-lg">
            {t.process.guarantee.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-apple-secondary leading-relaxed max-w-xl mx-auto">
            {t.process.guarantee.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-apple-ink">
            {t.process.guarantee.points.map((point) => (
              <div key={point} className="flex items-center gap-1.5">
                <ThumbsUp
                  className="h-3.5 w-3.5 text-apple-blue shrink-0"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Botão de Ação Centralizado */}
          <div className="mt-8 flex justify-center w-full">
            <a
              href="#solicitar"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-apple-btnBg px-8 py-4 text-sm font-semibold text-apple-btnText shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t.process.guarantee.cta}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </SurfaceCard>
      </div>
    </section>
  );
}

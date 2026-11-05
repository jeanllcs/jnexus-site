"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import type { ServiceCategory } from "@/types/serviceRequest";
import { useLanguage } from "@/i18n/LanguageContext";
import { SurfaceCard } from "@/components/ui/SurfaceCard";

export const SELECT_SERVICE_EVENT = "jnexus:select-service";

const SERVICE_MOCKUP_MAP: Record<string, string> = {
  "software-web": "/mockups/dashboard_sistema.jpg",
  "automacao-ia": "/mockups/whatsapp_automacao.jpg",
  "engenharia-dados": "/mockups/planilhas_para_dashboard.jpg",
  "integracao-rpa": "/mockups/integracao_sistemas.jpg",
};

const SERVICE_DOMAINS: Record<string, string> = {
  "software-web": "portal.jnexus.app",
  "automacao-ia": "whatsapp.jnexus.app",
  "engenharia-dados": "dashboard.jnexus.app",
  "integracao-rpa": "api.jnexus.tech/sync",
};

export function ServicesSection(): React.JSX.Element {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(
    "Desenvolvimento de Software & Web Apps"
  );

  const handleSelectService = (categoria: ServiceCategory): void => {
    setSelectedCategory(categoria);
    window.dispatchEvent(
      new CustomEvent<ServiceCategory>(SELECT_SERVICE_EVENT, {
        detail: categoria,
      })
    );
  };

  const handleProceedToForm = (): void => {
    window.dispatchEvent(
      new CustomEvent<ServiceCategory>(SELECT_SERVICE_EVENT, {
        detail: selectedCategory,
      })
    );

    const formSection = document.getElementById("solicitar");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="servicos"
      aria-labelledby="services-heading"
      className="py-20 sm:py-28 border-t border-apple-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Cabeçalho Centralizado com Copywriting Humano */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="apple-eyebrow mb-3">{t.services.eyebrow}</p>
          <h2 id="services-heading" className="apple-heading-section">
            {t.services.titleLine1}
            <br />
            <span className="text-apple-secondary">
              {t.services.titleLine2}
            </span>
          </h2>
          <p className="apple-body-large mt-4 mx-auto max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* Grade 2x2 Centralizada e Harmoniosa */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
          {t.services.items.map((service) => {
            const isSelected = selectedCategory === service.canonicalCategory;
            const mockupDomain =
              SERVICE_DOMAINS[service.id] || "app.jnexus.tech";

            return (
              <SurfaceCard
                key={service.id}
                as="article"
                variant={isSelected ? "obsidian" : "light"}
                className={`p-7 sm:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:translate-y-[-2px] ${
                  isSelected
                    ? "ring-2 ring-apple-blue shadow-lg"
                    : "hover:border-apple-ink/20"
                }`}
                onClick={() => handleSelectService(service.canonicalCategory)}
              >
                <div>
                  {/* Topo do Card: Número + Badge de Prazo/Resultado */}
                  <div
                    className={`flex items-center justify-between border-b pb-4 ${
                      isSelected ? "border-white/10" : "border-apple-border/60"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-xs font-bold ${
                          isSelected ? "text-apple-blue" : "text-apple-secondary"
                        }`}
                      >
                        {t.services.solutionPrefix} {service.indice}
                      </span>
                      {isSelected && (
                        <span className="flex items-center gap-1 rounded-full bg-apple-blue/20 px-2 py-0.5 font-mono text-[10px] font-semibold text-apple-blue">
                          <Check className="h-3 w-3" />
                          <span>Selecionada</span>
                        </span>
                      )}
                    </div>

                    <span
                      className={`rounded-full px-3 py-0.5 font-mono text-[11px] font-medium ${
                        isSelected
                          ? "bg-white/10 text-white"
                          : "bg-apple-canvas text-apple-secondary border border-apple-border"
                      }`}
                    >
                      {service.metricaReferencia}
                    </span>
                  </div>

                  {/* Moldura de Design para o Mockup (Janela de App / Navegador) */}
                  {SERVICE_MOCKUP_MAP[service.id] && (
                    <div
                      className={`mt-5 overflow-hidden rounded-2xl border shadow-sm transition-transform duration-300 ${
                        isSelected
                          ? "border-white/15 bg-black/60"
                          : "border-apple-border/70 bg-apple-canvas"
                      }`}
                    >
                      {/* Barra de título estilo Mac / Liquid Glass */}
                      <div
                        className={`flex items-center justify-between border-b px-3.5 py-2 ${
                          isSelected
                            ? "border-white/10 bg-white/5"
                            : "border-apple-border/50 bg-apple-subtle/80"
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[#FF5F56]/80" />
                          <span className="h-2 w-2 rounded-full bg-[#FFBD2E]/80" />
                          <span className="h-2 w-2 rounded-full bg-[#27C93F]/80" />
                        </div>
                        <span
                          className={`font-mono text-[10px] tracking-tight ${
                            isSelected ? "text-[#A1A1A6]" : "text-apple-secondary"
                          }`}
                        >
                          {mockupDomain}
                        </span>
                        <div className="w-8" />
                      </div>

                      <img
                        src={SERVICE_MOCKUP_MAP[service.id]}
                        alt={service.titulo}
                        width={720}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="w-full object-cover max-h-48 sm:max-h-52 transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  {/* Subtítulo & Título Principal */}
                  <p
                    className={`mt-5 text-xs font-semibold uppercase tracking-wider ${
                      isSelected ? "text-apple-blue" : "text-apple-blue"
                    }`}
                  >
                    {service.subtitulo}
                  </p>

                  <h3
                    className={`mt-1.5 text-xl font-bold tracking-tight ${
                      isSelected ? "text-white" : "text-apple-ink"
                    }`}
                  >
                    {service.titulo}
                  </h3>

                  {/* Descrição em Linguagem Simples e Humana */}
                  <p
                    className={`mt-2.5 text-xs sm:text-sm leading-relaxed ${
                      isSelected ? "text-[#A1A1A6]" : "text-apple-secondary"
                    }`}
                  >
                    {service.descricao}
                  </p>

                  {/* Lista de Entregas Práticas */}
                  <ul className="mt-5 space-y-2">
                    {service.entregaveis.map((entregavel) => (
                      <li
                        key={entregavel}
                        className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                          isSelected ? "text-[#E5E5EA]" : "text-apple-ink"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            isSelected ? "bg-apple-blue" : "bg-apple-blue"
                          }`}
                        />
                        <span>{entregavel}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Rodapé Interno do Card: Indicação de Seleção */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-medium ${
                    isSelected ? "border-white/10" : "border-apple-border/60"
                  }`}
                >
                  <span
                    className={
                      isSelected ? "text-emerald-400" : "text-apple-secondary"
                    }
                  >
                    {isSelected
                      ? "✓ Solução marcada para o seu projeto"
                      : "Clique para selecionar esta opção"}
                  </span>
                  <span
                    className={`font-semibold ${
                      isSelected ? "text-white" : "text-apple-ink"
                    }`}
                  >
                    {isSelected ? "Selecionada" : "Escolher"}
                  </span>
                </div>
              </SurfaceCard>
            );
          })}
        </div>

        {/* Botão de Ação Centralizado no Fim da Seção */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <div className="w-full max-w-2xl rounded-3xl border border-apple-border bg-gradient-to-b from-apple-surface to-apple-canvas p-6 sm:p-8 shadow-sm flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-apple-blue/10 px-3 py-1 text-xs font-medium text-apple-blue">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Solução Pronta Sem Burocracia</span>
            </div>

            <h3 className="mt-3 text-lg sm:text-xl font-bold tracking-tight text-apple-ink">
              Quer ver como essa solução vai rodar na sua empresa?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-apple-secondary max-w-md">
              Montamos o protótipo visual sem custo para você ver funcionando antes de fechar qualquer contrato.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleProceedToForm}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-apple-btnBg px-8 py-4 text-sm font-semibold text-apple-btnText shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.services.ctaButton}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  MailCheck,
  AlertCircle,
  Clock,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { JNEXUS_INFO } from "@/data/portfolioData";
import type {
  ApiResponse,
  ProjectType,
  ServiceCategory,
  ServiceRequestPayload,
  ServiceRequestResultData,
} from "@/types/serviceRequest";
import { useLanguage } from "@/i18n/LanguageContext";
import { SurfaceCard } from "@/components/ui/SurfaceCard";
import { SELECT_SERVICE_EVENT } from "@/components/services/ServicesSection";

export function ServiceRequestForm(): React.JSX.Element {
  const { t } = useLanguage();

  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [empresa, setEmpresa] = useState<string>("");
  const [categoriaServico, setCategoriaServico] = useState<ServiceCategory>(
    "Automação com IA & Agentes Inteligentes"
  );
  const [tipoProjeto, setTipoProjeto] = useState<ProjectType>(
    "Novo Projeto do Zero"
  );
  const [mensagem, setMensagem] = useState<string>("");
  const [websiteUrl, setWebsiteUrl] = useState<string>(""); // Honeypot

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [submissionState, setSubmissionState] = useState<{
    readonly isSuccess: boolean;
    readonly message: string;
    readonly payload?: ServiceRequestPayload;
  } | null>(null);

  useEffect(() => {
    const handleExternalServiceSelection = (event: Event): void => {
      const customEvent = event as CustomEvent<ServiceCategory>;
      if (customEvent.detail) {
        setCategoriaServico(customEvent.detail);
      }
    };

    window.addEventListener(
      SELECT_SERVICE_EVENT,
      handleExternalServiceSelection
    );
    return () => {
      window.removeEventListener(
        SELECT_SERVICE_EVENT,
        handleExternalServiceSelection
      );
    };
  }, []);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionState(null);

    try {
      const response = await fetch("/api/solicitar-servico", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          email,
          whatsapp,
          empresa,
          categoriaServico,
          tipoProjeto,
          mensagem,
          websiteUrl,
        }),
      });

      const result =
        (await response.json()) as ApiResponse<ServiceRequestResultData>;

      if (!response.ok || !result.success || !result.data) {
        setSubmissionState({
          isSuccess: false,
          message: result.error || t.form.errorTitle,
        });
      } else {
        setSubmissionState({
          isSuccess: true,
          message: t.form.successMessage,
          payload: result.data.payload,
        });
        setNome("");
        setEmail("");
        setWhatsapp("");
        setEmpresa("");
        setMensagem("");
      }
    } catch {
      setSubmissionState({
        isSuccess: false,
        message: t.form.connectionError,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="solicitar"
      aria-labelledby="request-heading"
      className="py-20 sm:py-28 border-t border-apple-border"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="apple-eyebrow mb-3">{t.form.eyebrow}</p>
          <h2 id="request-heading" className="apple-heading-section">
            {t.form.titleLine1}
            <br />
            <span className="text-apple-secondary">{t.form.titleLine2}</span>
          </h2>
          <p className="apple-body-large mt-4">{t.form.subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Coluna Esquerda: Formulário Principal */}
          <SurfaceCard
            variant="light"
            className="lg:col-span-7 p-7 sm:p-10"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Honeypot Invisível (web-security.md) */}
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="field-website-url">
                  Do not fill this field
                </label>
                <input
                  id="field-website-url"
                  name="websiteUrl"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="input-nome"
                    className="block text-xs font-semibold text-apple-ink mb-2"
                  >
                    {t.form.nameLabel}
                  </label>
                  <input
                    id="input-nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder={t.form.namePlaceholder}
                    className="w-full rounded-control border border-apple-border bg-apple-inputBg px-4 py-3 text-sm text-apple-ink placeholder-apple-tertiary transition-colors focus:border-apple-blue focus:bg-apple-inputFocusBg focus-visible:outline-2 focus-visible:outline-apple-blue focus-visible:outline-offset-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="input-empresa"
                    className="block text-xs font-semibold text-apple-ink mb-2"
                  >
                    {t.form.companyLabel}
                  </label>
                  <input
                    id="input-empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    placeholder={t.form.companyPlaceholder}
                    className="w-full rounded-control border border-apple-border bg-apple-inputBg px-4 py-3 text-sm text-apple-ink placeholder-apple-tertiary transition-colors focus:border-apple-blue focus:bg-apple-inputFocusBg focus-visible:outline-2 focus-visible:outline-apple-blue focus-visible:outline-offset-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="input-email"
                    className="block text-xs font-semibold text-apple-ink mb-2"
                  >
                    {t.form.emailLabel}
                  </label>
                  <input
                    id="input-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.form.emailPlaceholder}
                    className="w-full rounded-control border border-apple-border bg-apple-inputBg px-4 py-3 text-sm text-apple-ink placeholder-apple-tertiary transition-colors focus:border-apple-blue focus:bg-apple-inputFocusBg focus-visible:outline-2 focus-visible:outline-apple-blue focus-visible:outline-offset-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="input-whatsapp"
                    className="block text-xs font-semibold text-apple-ink mb-2"
                  >
                    {t.form.phoneLabel}
                  </label>
                  <input
                    id="input-whatsapp"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder={t.form.phonePlaceholder}
                    className="w-full rounded-control border border-apple-border bg-apple-inputBg px-4 py-3 text-sm text-apple-ink placeholder-apple-tertiary transition-colors focus:border-apple-blue focus:bg-apple-inputFocusBg focus-visible:outline-2 focus-visible:outline-apple-blue focus-visible:outline-offset-1 tabular-nums"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="select-servico"
                    className="block text-xs font-semibold text-apple-ink mb-2"
                  >
                    {t.form.serviceLabel}
                  </label>
                  <select
                    id="select-servico"
                    name="categoriaServico"
                    value={categoriaServico}
                    onChange={(e) =>
                      setCategoriaServico(e.target.value as ServiceCategory)
                    }
                    className="w-full rounded-control border border-apple-border bg-apple-inputBg px-4 py-3 text-sm text-apple-ink transition-colors focus:border-apple-blue focus:bg-apple-inputFocusBg focus-visible:outline-2 focus-visible:outline-apple-blue focus-visible:outline-offset-1"
                  >
                    {t.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="select-tipo"
                    className="block text-xs font-semibold text-apple-ink mb-2"
                  >
                    {t.form.projectTypeLabel}
                  </label>
                  <select
                    id="select-tipo"
                    name="tipoProjeto"
                    value={tipoProjeto}
                    onChange={(e) =>
                      setTipoProjeto(e.target.value as ProjectType)
                    }
                    className="w-full rounded-control border border-apple-border bg-apple-inputBg px-4 py-3 text-sm text-apple-ink transition-colors focus:border-apple-blue focus:bg-apple-inputFocusBg focus-visible:outline-2 focus-visible:outline-apple-blue focus-visible:outline-offset-1"
                  >
                    {t.form.projectTypeOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="textarea-mensagem"
                  className="block text-xs font-semibold text-apple-ink mb-2"
                >
                  {t.form.messageLabel}
                </label>
                <textarea
                  id="textarea-mensagem"
                  name="mensagem"
                  rows={4}
                  required
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder={t.form.messagePlaceholder}
                  className="w-full rounded-control border border-apple-border bg-apple-inputBg px-4 py-3 text-sm text-apple-ink placeholder-apple-tertiary transition-colors focus:border-apple-blue focus:bg-apple-inputFocusBg focus-visible:outline-2 focus-visible:outline-apple-blue focus-visible:outline-offset-1"
                />
              </div>

              {/* ARIA Live Status Region */}
              <div aria-live="polite" role="status">
                {submissionState && (
                  <div
                    className={`rounded-2xl border p-4 text-sm ${
                      submissionState.isSuccess
                        ? "border-apple-emerald/30 bg-apple-emerald/[0.08] text-apple-ink"
                        : "border-[#C81E1E]/30 bg-[#C81E1E]/[0.08] text-[#C81E1E]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submissionState.isSuccess ? (
                        <MailCheck
                          className="h-5 w-5 text-apple-emerald shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      ) : (
                        <AlertCircle
                          className="h-5 w-5 text-[#C81E1E] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                      )}
                      <div>
                        <p className="font-semibold">
                          {submissionState.isSuccess
                            ? `${t.form.successTitlePrefix} ${submissionState.payload?.protocolo}`
                            : t.form.errorTitle}
                        </p>
                        <p className="mt-1 text-xs sm:text-sm text-apple-secondary">
                          {submissionState.message}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-apple-btnBg px-6 py-4 text-sm font-semibold text-apple-btnText transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50"
                >
                  <span>
                    {isSubmitting
                      ? t.form.submittingButton
                      : t.form.submitButton}
                  </span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </SurfaceCard>

          {/* Coluna Direita: Etapas do Atendimento ao Cliente */}
          <SurfaceCard
            variant="light"
            className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="border-b border-apple-border pb-4">
                <span className="apple-eyebrow">{t.form.steps.eyebrow}</span>
                <h3 className="apple-heading-card mt-2 text-apple-ink">
                  {t.form.steps.title}
                </h3>
              </div>

              <div className="mt-7 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-apple-subtle text-apple-ink">
                    <Clock className="h-5 w-5 text-apple-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-apple-ink">
                      {t.form.steps.step1Title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-apple-secondary leading-relaxed">
                      {t.form.steps.step1Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-apple-subtle text-apple-ink">
                    <Layers className="h-5 w-5 text-apple-blue" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-apple-ink">
                      {t.form.steps.step2Title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-apple-secondary leading-relaxed">
                      {t.form.steps.step2Desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-apple-subtle text-apple-ink">
                    <ShieldCheck
                      className="h-5 w-5 text-apple-emerald"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-apple-ink">
                      {t.form.steps.step3Title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-apple-secondary leading-relaxed">
                      {t.form.steps.step3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-apple-canvas border border-apple-border p-5 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-apple-secondary">
                {t.form.steps.directContactLabel}
              </p>
              <p className="text-sm font-medium text-apple-ink">
                {JNEXUS_INFO.emailContato}
              </p>
              <p className="text-xs text-apple-secondary">
                {t.form.steps.location}
              </p>
            </div>
          </SurfaceCard>
        </div>
      </div>
    </section>
  );
}

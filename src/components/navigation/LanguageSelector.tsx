"use client";

import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LOCALE_OPTIONS, type Locale } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageSelector(): React.JSX.Element {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activeOption =
    LOCALE_OPTIONS.find((item) => item.code === locale) || LOCALE_OPTIONS[0];

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent): void => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSelectLocale = (nextLocale: Locale): void => {
    setLocale(nextLocale);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t.navbar.languageAriaLabel}
        className="inline-flex h-10 items-center gap-1.5 rounded-full border border-apple-border bg-apple-subtle px-3.5 text-xs font-medium text-apple-ink transition-all hover:opacity-90 active:scale-[0.97]"
      >
        <Globe className="h-3.5 w-3.5 text-apple-secondary" aria-hidden="true" />
        <span className="font-mono text-[11px] font-semibold tracking-tight">
          {activeOption.shortLabel}
        </span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-apple-secondary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label={t.navbar.languageAriaLabel}
          className="liquid-glass-bar absolute right-0 mt-2.5 w-56 rounded-2xl p-1.5 shadow-xl z-50"
        >
          {LOCALE_OPTIONS.map((option) => {
            const isSelected = option.code === locale;
            return (
              <li key={option.code} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => handleSelectLocale(option.code)}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-colors ${
                    isSelected
                      ? "bg-apple-surface text-apple-ink font-semibold shadow-sm"
                      : "text-apple-secondary hover:bg-apple-subtle hover:text-apple-ink"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-apple-ink">
                      {option.nativeName}
                    </span>
                    <span className="text-[11px] text-apple-secondary">
                      {option.regionLabel}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-[10px] uppercase text-apple-secondary">
                      {option.shortLabel}
                    </span>
                    {isSelected && (
                      <Check
                        className="h-3.5 w-3.5 text-apple-blue"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

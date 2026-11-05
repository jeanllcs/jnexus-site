"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  LOCALE_OPTIONS,
  TRANSLATIONS,
  type Locale,
  type SiteDictionary,
} from "@/i18n/translations";

interface LanguageContextValue {
  readonly locale: Locale;
  readonly setLocale: (nextLocale: Locale) => void;
  readonly t: SiteDictionary;
}

const STORAGE_KEY = "jnexus-locale-preference";

const LanguageContext = createContext<LanguageContextValue>({
  locale: "pt-BR",
  setLocale: () => undefined,
  t: TRANSLATIONS["pt-BR"],
});

function isSupportedLocale(value: string | null): value is Locale {
  if (!value) {
    return false;
  }
  return LOCALE_OPTIONS.some((option) => option.code === value);
}

export interface LanguageProviderProps {
  readonly children: React.ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps): React.JSX.Element {
  const [locale, setLocaleState] = useState<Locale>("pt-BR");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (isSupportedLocale(saved)) {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // Ignore storage access errors in restricted modes
    }
  }, []);

  const handleSetLocale = (nextLocale: Locale): void => {
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    } catch {
      // Ignore storage write errors
    }
  };

  const contextValue: LanguageContextValue = {
    locale,
    setLocale: handleSetLocale,
    t: TRANSLATIONS[locale],
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  return useContext(LanguageContext);
}

"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

type ThemeMode = "light" | "dark";

const STORAGE_KEY = "jnexus-theme-preference";

export function ThemeToggle(): React.JSX.Element {
  const { t } = useLanguage();
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: ThemeMode = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const handleToggleTheme = (): void => {
    const nextTheme: ThemeMode = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage write errors in restricted browsing modes
    }
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      aria-label={isDark ? t.navbar.themeAriaLight : t.navbar.themeAriaDark}
      title={isDark ? t.navbar.themeAriaLight : t.navbar.themeAriaDark}
      className="inline-flex h-10 items-center gap-2 rounded-full border border-apple-border bg-apple-subtle px-3.5 text-xs font-medium text-apple-ink transition-all hover:opacity-90 active:scale-[0.97]"
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
          <span className="hidden sm:inline">{t.navbar.themeLight}</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4 text-apple-secondary" aria-hidden="true" />
          <span className="hidden sm:inline">{t.navbar.themeDark}</span>
        </>
      )}
    </button>
  );
}

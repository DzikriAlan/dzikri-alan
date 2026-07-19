"use client";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LOCALES = [
  { code: "en", key: "en" as const },
  { code: "idn", key: "id" as const },
];

export default function LanguageToggle() {
  const router = useRouter();
  const { t } = useTranslation("common");

  const handleSelect = (locale: string) => {
    if (locale === router.locale) return;
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale,
    });
  };

  return (
    <div
      role="group"
      aria-label={t("languageToggle.label")}
      className="fixed right-4 top-4 z-50 flex items-center gap-0.5 rounded-full border border-surface-border bg-neutral-900/80 p-1 backdrop-blur sm:right-6 sm:top-6"
    >
      {LOCALES.map(({ code, key }) => (
        <button
          key={code}
          type="button"
          onClick={() => handleSelect(code)}
          aria-pressed={router.locale === code}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            router.locale === code
              ? "bg-brand text-neutral-950"
              : "text-neutral-300 hover:text-foreground"
          }`}
        >
          {t(`languageToggle.${key}`)}
        </button>
      ))}
    </div>
  );
}

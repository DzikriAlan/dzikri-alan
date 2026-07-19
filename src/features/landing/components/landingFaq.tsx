"use client";

// 1. Import External Library
import { useState } from "react";
import { useTranslation } from "next-i18next";

// 5. Import Reusable Component
import ParticleFieldLazy from "@/shared/components/ParticleFieldLazy";
import { PARTICLE_THEME } from "@/shared/components/ParticleField";

interface FaqItem {
  question: string;
  answer: string;
}

export default function LandingFaq() {
  // 8. State
  const { t } = useTranslation("common");
  const landingFaqs = t("faq.items", { returnObjects: true }) as FaqItem[];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 11. Methods / Handlers
  const handleToggle = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="relative scroll-mt-28 overflow-hidden py-20">
      <ParticleFieldLazy
        {...PARTICLE_THEME}
        density={700}
        speed={0.4}
        particleSize={0.022}
        withCube
        cubeSeed={3}
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <p className="mb-6 font-mono text-sm uppercase tracking-widest text-neutral-200 [text-shadow:0_0_12px_rgba(229,229,229,0.6)]">
          {t("faq.eyebrow")}
        </p>

        <div onMouseLeave={() => setHoveredIndex(null)}>
          {landingFaqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <div
                key={faq.question}
                onMouseEnter={() => setHoveredIndex(index)}
                className="border-t border-surface-border/60 transition-opacity duration-300 first:border-t-0"
                style={{ opacity: isDimmed ? 0.35 : 1 }}
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                  className="flex w-full items-baseline gap-4 py-3 text-left"
                >
                  <span className="font-mono text-sm text-neutral-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p
                    className={`text-xl sm:text-2xl ${
                      isActive ? "text-foreground" : "text-neutral-200"
                    }`}
                  >
                    {faq.question}
                  </p>
                </button>

                {isActive && (
                  <p className="max-w-2xl pb-4 pl-10 text-sm text-neutral-300 sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

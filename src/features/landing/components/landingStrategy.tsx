"use client";

// 1. Import External Library
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useTranslation } from "next-i18next";

// 5. Import Reusable Component
import ParticleFieldLazy from "@/shared/components/ParticleFieldLazy";
import { PARTICLE_THEME } from "@/shared/components/ParticleField";

interface WordProps {
  readonly children: string;
  readonly progress: MotionValue<number>;
  readonly index: number;
  readonly totalWords: number;
}

function Word({ children, progress, index, totalWords }: WordProps) {
  const start = index / totalWords;
  const end = start + 1 / totalWords;
  const color = useTransform(progress, [start, end], ["#5E5E5E", "#FAFAFA"]);

  return (
    <motion.span style={{ color }} className="mr-[0.3em] inline-block">
      {children}
    </motion.span>
  );
}

export default function LandingStrategy() {
  // 8. State
  const { t } = useTranslation("common");
  const paragraphs = t("strategy.paragraphs", { returnObjects: true }) as string[];
  const containerRef = useRef<HTMLDivElement>(null);

  // 9. Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  let wordCursor = 0;
  const wordParagraphs = paragraphs.map((paragraph) =>
    paragraph.split(" ").map((word) => ({ word, index: wordCursor++ })),
  );
  const totalWords = wordCursor;

  return (
    <section id="strategy" className="relative scroll-mt-28 overflow-hidden py-20 sm:py-28">
      <ParticleFieldLazy
        {...PARTICLE_THEME}
        density={700}
        speed={0.4}
        particleSize={0.022}
        withCube
        cubeSeed={2}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <p className="mb-10 font-mono text-sm font-medium uppercase tracking-widest text-neutral-200 [text-shadow:0_0_12px_rgba(229,229,229,0.6)]">
          {t("strategy.eyebrow")}
        </p>

        <div ref={containerRef} className="space-y-8">
          {wordParagraphs.map((words) => (
            <p
              key={words[0].word + words[0].index}
              className="flex flex-wrap text-2xl font-light leading-relaxed sm:text-3xl lg:text-4xl"
            >
              {words.map(({ word, index }) => (
                <Word
                  key={index}
                  progress={scrollYProgress}
                  index={index}
                  totalWords={totalWords}
                >
                  {word}
                </Word>
              ))}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

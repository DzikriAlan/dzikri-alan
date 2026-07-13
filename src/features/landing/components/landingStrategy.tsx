"use client";

// 1. Import External Library
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const paragraphs = [
  "I build frontend experiences that are fast, scalable, and made to last. Using Vue, Next.js, React, and AI tooling, I ensure they perform reliably across real-time data streams and complex integrations.",
  "Whether it's an AI chat interface, a data visualization dashboard, or a full-stack product, I design and develop with a focus on performance, maintainability, and developer experience.",
];

let wordCursor = 0;
const wordParagraphs = paragraphs.map((paragraph) =>
  paragraph.split(" ").map((word) => ({ word, index: wordCursor++ })),
);
const totalWords = wordCursor;

interface WordProps {
  readonly children: string;
  readonly progress: MotionValue<number>;
  readonly index: number;
}

function Word({ children, progress, index }: WordProps) {
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
  const containerRef = useRef<HTMLDivElement>(null);

  // 9. Effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <section id="strategy" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <p className="mb-10 font-mono text-sm font-medium uppercase tracking-widest text-neutral-500">
          Strategy
        </p>

        <div ref={containerRef} className="space-y-8">
          {wordParagraphs.map((words) => (
            <p
              key={words[0].word + words[0].index}
              className="flex flex-wrap text-2xl font-light leading-relaxed sm:text-3xl lg:text-4xl"
            >
              {words.map(({ word, index }) => (
                <Word key={index} progress={scrollYProgress} index={index}>
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

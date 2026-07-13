"use client";

// 1. Import External Library
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles } from "lucide-react";

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";

// 7. Static Data
import { landingSkills, landingTestimonials } from "../static/landingData";

const frontendSkills = landingSkills.filter((skill) =>
  ["Vue.js", "Next.js", "React", "TypeScript", "Tailwind CSS"].includes(
    skill.label,
  ),
);

export default function LandingOverview() {
  // 8. State
  const [now, setNow] = useState<Date | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // 9. Effects
  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // 11. Methods / Handlers
  const handlePrevTestimonial = () => {
    setActiveTestimonial(
      (index) => (index - 1 + landingTestimonials.length) % landingTestimonials.length,
    );
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((index) => (index + 1) % landingTestimonials.length);
  };

  const testimonial = landingTestimonials[activeTestimonial];

  const dateLabel = now?.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Jakarta",
  });

  const timeLabel = now?.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <section id="overview" className="scroll-mt-28 pb-20 pt-8 sm:pt-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Intro card */}
          <div className="flex flex-col justify-between rounded-2xl border border-surface-border bg-black p-6 lg:col-span-1">
            <div>
              <p className="text-xl font-semibold leading-snug text-brand">
                Frontend Developer experienced in taking products from
                concept to launch.
              </p>
              <p className="mt-4 text-sm text-neutral-300">
                If you&apos;re looking to build a scalable, AI-driven web
                product, get in touch to discuss your requirements with me
                in more detail.
              </p>
              <Button asChild className="mt-6 rounded-full">
                <a
                  href="https://wa.me/6282123339099"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Say hello
                </a>
              </Button>
            </div>

            <div className="mt-10">
              <p className="text-sm text-neutral-300">{dateLabel ?? " "}</p>
              <p className="font-mono text-2xl font-semibold text-foreground">
                {timeLabel ?? "--:--:--"}
              </p>
            </div>
          </div>

          {/* Testimonial carousel */}
          <div className="flex flex-col justify-between rounded-2xl border border-surface-border bg-black p-6 lg:col-span-2">
            <div>
              <span className="mb-4 block text-3xl font-serif text-brand">
                &ldquo;
              </span>
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">
                {testimonial.quote}
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-neutral-300">{testimonial.role}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {landingTestimonials.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Show testimonial from ${item.name}`}
                      onClick={() => setActiveTestimonial(index)}
                      className={`size-1.5 rounded-full transition-colors ${
                        index === activeTestimonial
                          ? "bg-brand"
                          : "bg-neutral-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="hidden gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={handlePrevTestimonial}
                    aria-label="Previous testimonial"
                    className="flex size-8 items-center justify-center rounded-full border border-surface-border text-foreground hover:bg-surface-hover"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTestimonial}
                    aria-label="Next testimonial"
                    className="flex size-8 items-center justify-center rounded-full border border-surface-border text-foreground hover:bg-surface-hover"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Skill highlight cards */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="rounded-2xl border border-surface-border bg-black p-6">
              <h3 className="font-semibold text-foreground">
                Frontend Engineering
              </h3>
              <p className="mt-2 text-sm text-neutral-300">
                Building scalable, maintainable interfaces with Vue, Nuxt,
                Next.js, and React.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="flex size-9 items-center justify-center rounded-lg border border-surface-border bg-neutral-900"
                    title={skill.label}
                  >
                    <div className="relative size-4">
                      <Image
                        src={skill.icon}
                        alt={skill.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden rounded-2xl border border-surface-border bg-black p-6">
              <h3 className="font-semibold text-foreground">
                AI Engineering
              </h3>
              <p className="mt-2 text-sm text-neutral-300">
                Engineering AI chat interfaces with real-time streaming and
                LLM integration.
              </p>
              <div className="relative mt-6 flex h-20 items-center gap-2 rounded-xl border border-brand/30 bg-neutral-900 px-4">
                <Sparkles className="size-4 shrink-0 text-brand" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-neutral-700" />
                  <div className="h-1.5 w-2/3 rounded-full bg-neutral-700" />
                </div>
                <span className="absolute -bottom-2 right-3 rounded-full bg-brand px-2 py-0.5 text-[10px] font-semibold text-neutral-950 shadow-soft">
                  Claude Code
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

// 1. Import External Library
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";

// 5. Import Reusable Component
import { cn } from "@/shared/lib/utils";

// 7. Static Data
import { landingExperience, landingProjects } from "../static/landingData";

type Tab = "experience" | "projects";

interface Row {
  key: string;
  badge: string;
  logo?: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  highlighted?: boolean;
}

export default function LandingWork() {
  // 8. State
  const [tab, setTab] = useState<Tab>("experience");
  const scrollRef = useRef<HTMLDivElement>(null);

  // 10. Effects
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [tab]);

  // 9. Derived Data
  const rows: Row[] =
    tab === "experience"
      ? landingExperience.map((exp) => ({
          key: exp.company,
          badge: exp.period,
          logo: exp.logo,
          title: exp.company,
          subtitle: exp.role,
          description: exp.description,
          image: exp.image,
          highlighted: exp.current,
        }))
      : landingProjects.map((project) => ({
          key: project.title,
          badge: project.category,
          title: project.title,
          subtitle: project.tags.join(" · "),
          description: project.description,
          image: project.image,
        }));

  return (
    <section id="work" className="scroll-mt-28 px-6 py-20 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand">
              EXPERIENCE
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Experience <span className="text-brand">&amp; Projects</span>
            </h2>
          </div>

          <div className="inline-flex w-fit rounded-full border border-surface-border p-1">
            <button
              type="button"
              onClick={() => setTab("experience")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                tab === "experience"
                  ? "bg-brand text-neutral-950"
                  : "text-neutral-300 hover:text-foreground",
              )}
            >
              Experience
            </button>
            <button
              type="button"
              onClick={() => setTab("projects")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                tab === "projects"
                  ? "bg-brand text-neutral-950"
                  : "text-neutral-300 hover:text-foreground",
              )}
            >
              Projects
            </button>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-neutral-950 to-transparent lg:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-neutral-950 to-transparent lg:hidden" />

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:max-h-[488px] lg:snap-none lg:grid-cols-[160px_1fr] lg:gap-x-10 lg:gap-y-10 lg:overflow-x-visible lg:overflow-y-auto lg:pb-0 lg:pr-2 [&::-webkit-scrollbar]:hidden"
          >
            {rows.map((row, index) => (
              <Fragment key={row.key}>
                <div className="relative hidden pl-6 lg:block">
                  {index !== rows.length - 1 && (
                    <span className="absolute -bottom-10 left-[3px] top-3 w-px bg-surface-border" />
                  )}
                  <span
                    className={cn(
                      "absolute left-0 top-1.5 size-2 rounded-full",
                      row.highlighted ? "bg-brand" : "bg-neutral-600",
                    )}
                  />
                  <p className="text-sm font-medium text-foreground">{row.badge}</p>
                </div>

                <div
                  className={cn(
                    "w-[85vw] shrink-0 snap-start rounded-2xl border p-6 lg:grid lg:w-auto lg:shrink lg:grid-cols-[1fr_260px] lg:gap-6 sm:h-56",
                    row.highlighted ? "border-brand/50" : "border-surface-border",
                  )}
                >
                  <div className="flex flex-col justify-center overflow-hidden">
                    <p className="mb-2 font-mono text-xs text-neutral-500 lg:hidden">
                      {row.badge}
                    </p>
                    <div className="mb-3 flex items-center gap-3">
                      {row.logo && (
                        <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-surface-border bg-white">
                          <Image
                            src={row.logo}
                            alt=""
                            fill
                            className="object-contain p-1.5"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-foreground">{row.title}</p>
                        {row.subtitle && (
                          <p className="text-sm text-brand">{row.subtitle}</p>
                        )}
                      </div>
                    </div>
                    <p className="line-clamp-3 text-sm text-neutral-400">
                      {row.description}
                    </p>
                  </div>

                  <div className="relative aspect-video sm:aspect-auto sm:h-full">
                    {/* Stacked photo effect: two tilted decoy frames peeking out behind the real image */}
                    <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-6 overflow-hidden rounded-xl border border-surface-border bg-neutral-900 opacity-50 grayscale">
                      <Image src={row.image} alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 -translate-x-2 translate-y-2 -rotate-3 overflow-hidden rounded-xl border border-surface-border bg-neutral-900 opacity-75 grayscale">
                      <Image src={row.image} alt="" fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 overflow-hidden rounded-xl border border-surface-border shadow-card">
                      <Image
                        src={row.image}
                        alt={row.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

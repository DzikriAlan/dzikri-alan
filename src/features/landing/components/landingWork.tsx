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

        <div
          ref={scrollRef}
          className="mt-10 max-h-[488px] overflow-y-auto pr-2 [-ms-overflow-style:none] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-surface-border [&::-webkit-scrollbar-track]:bg-transparent"
        >
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-[160px_1fr]">
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
                    "grid gap-6 rounded-2xl border p-6 sm:h-56 sm:grid-cols-[1fr_260px]",
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

                  <div className="relative aspect-video overflow-hidden rounded-xl border border-surface-border sm:aspect-auto sm:h-full">
                    <Image
                      src={row.image}
                      alt={row.title}
                      fill
                      className="object-cover"
                    />
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

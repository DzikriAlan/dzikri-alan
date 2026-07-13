// 1. Import External Library
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";

// 7. Static Data
import { landingHighlights } from "../static/landingData";
import heroArt from "@/shared/assets/hero.png";
import heroPhoto from "@/shared/assets/guey.png";

const dotGridIds = [
  "a1", "a2", "a3", "a4",
  "b1", "b2", "b3", "b4",
  "c1", "c2", "c3", "c4",
  "d1", "d2", "d3", "d4",
];

export default function LandingHero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-28 overflow-hidden px-6 pb-32 pt-20 lg:px-12 xl:px-20"
    >
      {/* Decorative grid backdrop, only a soft band near the Services boundary. bg-fixed keeps the
          48px grid locked to viewport coordinates so it lines up with Services' identical grid. */}
      <div
        className="pointer-events-none absolute inset-0 bg-fixed [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_60%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,transparent_60%,black_100%)]"
      />

      {/* Corner dot accents marking the seam with Services, right side */}
      <div className="pointer-events-none absolute bottom-24 right-8 hidden grid-cols-4 gap-2 lg:grid">
        {dotGridIds.map((id) => (
          <span key={id} className="size-1 rounded-full bg-foreground/15" />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:px-12 xl:px-20">
        <div className="order-2 md:order-1">
          <p className="mb-4 font-mono text-sm text-brand">
            {"< FRONTEND DEVELOPER />"}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-6xl">
            Hi, I&apos;m
            <br />
            <span className="text-brand">Dzikri Alan</span>
          </h1>
          <p className="mt-6 max-w-md text-neutral-300">
            Frontend Developer with 3 years of experience building scalable,
            performant, and maintainable interfaces for various end-to-end
            digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button>
              Hire Me
              <ArrowUpRight />
            </Button>
            <Button variant="outline">
              View Work
              <ArrowUpRight />
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {landingHighlights.map((highlight) => (
              <div key={highlight.title} className="flex items-center gap-2">
                <highlight.icon className="size-5 text-brand" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {highlight.title}
                  </p>
                  <p className="text-xs text-neutral-400">
                    {highlight.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative order-1 mx-auto aspect-square w-full max-w-xl md:order-2">
          {/* Backdrop art, fitted exactly to the frame */}
          <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <Image src={heroArt} alt="" fill className="object-cover" />
          </div>

          {/* Subject cutout, floating above the backdrop art */}
          <div className="absolute -inset-y-10 inset-x-0">
            <Image
              src={heroPhoto}
              alt="Dzikri Alan"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>

          {/* Floating badge: availability */}
          <div className="absolute -left-6 bottom-6 flex animate-float items-center gap-2 rounded-full border border-surface-border bg-neutral-950/90 px-4 py-2 shadow-soft backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="text-xs font-medium text-foreground">
              Available for work
            </span>
          </div>

          {/* Floating badge: role chip */}
          <div
            className="absolute -right-4 top-6 flex animate-float items-center gap-1.5 rounded-2xl border border-brand/30 bg-neutral-950/90 px-3 py-2 shadow-soft backdrop-blur"
            style={{ animationDelay: "1.5s" }}
          >
            <Sparkles className="size-4 text-brand" />
            <span className="text-xs font-medium text-foreground">
              DzikriAlan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

// 1. Import External Library
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// 5. Import Reusable / Feature Component
import LandingTestimonialCard from "./landingTestimonialCard";

// 7. Static Data
import { landingTestimonials } from "../static/landingData";

export default function LandingTestimonials() {
  // 8. State
  const scrollRef = useRef<HTMLDivElement>(null);

  // 11. Methods / Handlers
  const handleScrollPrev = () => {
    scrollRef.current?.scrollBy({
      left: -scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleScrollNext = () => {
    scrollRef.current?.scrollBy({
      left: scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="testimonials" className="scroll-mt-28 px-6 py-20 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand">
              TESTIMONIALS
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              What clients <span className="text-brand">say</span>
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={handleScrollPrev}
              className="flex size-9 items-center justify-center rounded-full border border-surface-border text-foreground hover:bg-surface-hover"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={handleScrollNext}
              className="flex size-9 items-center justify-center rounded-full border border-brand text-brand hover:bg-surface-hover"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="relative -mx-6 mt-10 px-6 sm:mx-0 sm:px-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-neutral-950 to-transparent sm:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-neutral-950 to-transparent sm:hidden" />

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {landingTestimonials.map((testimonial) => (
              <LandingTestimonialCard
                key={testimonial.name}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

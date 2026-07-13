// 1. Import External Library
import { ArrowUpRight } from "lucide-react";

// 5. Import Reusable / Feature Component
import LandingServiceCard from "./landingServiceCard";

// 7. Static Data
import { landingServices } from "../static/landingData";

const dotGridIds = [
  "e1", "e2", "e3", "e4",
  "f1", "f2", "f3", "f4",
  "g1", "g2", "g3", "g4",
  "h1", "h2", "h3", "h4",
];

export default function LandingServices() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden py-20"
    >
      {/* Decorative grid backdrop, only a soft band carried down from the Hero boundary. bg-fixed
          keeps the 48px grid locked to viewport coordinates so it lines up with Hero's identical grid. */}
      <div className="pointer-events-none absolute inset-0 bg-fixed [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black_0%,transparent_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_40%,transparent_100%)]" />
      {/* Glowing seam line where Hero meets Services */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent blur-[2px]" />

      {/* Corner dot accents marking the seam with Hero, right side */}
      <div className="pointer-events-none absolute right-8 top-8 hidden grid-cols-4 gap-2 lg:grid">
        {dotGridIds.map((id) => (
          <span key={id} className="size-1 rounded-full bg-foreground/15" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand">
              MY SERVICES
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              How I can <span className="text-brand">help you</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-neutral-300">
            I help businesses and startups build digital products that are
            scalable, maintainable, and user-friendly.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {landingServices.map((service) => (
            <LandingServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#work"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand"
          >
            View all services
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

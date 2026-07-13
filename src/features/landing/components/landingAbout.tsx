// 1. Import External Library
import Image from "next/image";
import { Download } from "lucide-react";

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";

// 7. Static Data
import { landingStats } from "../static/landingData";
import aboutArt from "@/shared/assets/about.png";

export default function LandingAbout() {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-20 lg:px-12 xl:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:px-12 xl:px-20">
        <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-surface-border bg-black">
          <Image
            src={aboutArt}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand">ABOUT ME</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Get to know me <span className="text-brand">better</span>.
          </h2>
          <p className="mt-4 text-neutral-300">
            Experienced Frontend Developer with 3 years in tech solutions and
            digital products. Proven success in optimizing developer
            workflows and engineering advanced AI-driven web applications,
            including interactive AI chat interfaces, data visualization for
            statistics, and fact-checking platforms.
          </p>
          <p className="mt-4 text-neutral-300">
            Deeply skilled in Next.js, Nuxt, Vue, and React (TypeScript),
            with a strong focus on UI architecture, real-time data streaming
            (SSE/WebSockets), and high-performance API integration.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {landingStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-brand">{stat.value}</p>
                <p className="text-xs text-neutral-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button variant="outline">
              Download CV
              <Download />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

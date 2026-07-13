// 1. Import External Library
import Image from "next/image";

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";

// 7. Static Data
import heroPhoto from "@/shared/styles/guehi.png";

export default function LandingHero() {
  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text panel */}
        <div className="flex min-h-screen flex-col justify-between bg-neutral-950 px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-24">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-surface-border bg-neutral-900/80 px-4 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="text-xs font-medium text-foreground">
              Available for work
            </span>
          </span>

          <div>
            <h1 className="max-w-xl text-3xl font-thin leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
              Creating fast experiences, built to scale
            </h1>

            <p className="mt-6 max-w-md text-base text-neutral-300 sm:text-lg">
              Frontend Developer with 3 years of experience building
              scalable, performant, and maintainable interfaces for various
              end-to-end digital products.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <a href="#overview">Find out more</a>
              </Button>
            </div>
          </div>

          <p className="text-sm text-neutral-300">
            Find me at{" "}
            <a
              href="https://github.com/DzikriAlan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://www.linkedin.com/in/dzikri-alan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              LinkedIn
            </a>
            .
            <br />
            Download my{" "}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              resume
            </a>{" "}
            (PDF 248kb)
          </p>
        </div>

        {/* Photo panel */}
        <div className="relative min-h-screen bg-neutral-900">
          <Image
            src={heroPhoto}
            alt="Dzikri Alan"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

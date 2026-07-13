// 1. Import External Library
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";

// 6. Import Assets
import blayerLogo from "@/shared/assets/blayer-logo.webp";

export default function LandingCta() {
  return (
    <section id="contact" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[2.5rem] border border-surface-border bg-black p-6 sm:p-12 md:flex-row md:items-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(163,255,18,.35),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <Image
              src={blayerLogo}
              alt=""
              aria-hidden
              className="absolute -bottom-10 -right-10 h-auto w-[34rem] rotate-12 select-none object-contain opacity-[0.06] brightness-0 invert"
            />
          </div>

          <div className="relative">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand">
              LET&apos;S WORK TOGETHER
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              Have a <span className="text-brand">project</span> in mind?
            </h2>
            <p className="mt-4 max-w-md text-sm text-neutral-400 sm:text-base">
              If you&apos;re building a product, scaling a frontend platform,
              or navigating complex technical decisions, I&apos;m open to
              conversations around collaboration, consulting, or technical
              leadership.
            </p>
          </div>

          <div className="relative flex w-full flex-wrap gap-4 md:w-auto">
            <Button asChild>
              <a
                href="https://wa.me/6282123339099"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me Now
                <ArrowUpRight />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

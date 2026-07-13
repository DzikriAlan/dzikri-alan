// 1. Import External Library
import { ArrowUpRight, Send } from "lucide-react";

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";

export default function LandingCta() {
  return (
    <section id="contact" className="scroll-mt-28 px-6 py-20 lg:px-12 xl:px-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
        <div className="relative flex flex-col items-start justify-between gap-8 overflow-hidden rounded-[2.5rem] border border-surface-border bg-black p-8 sm:p-12 md:flex-row md:items-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(163,255,18,.35),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]">
            <span
              className="absolute -bottom-24 -right-10 rotate-12 select-none font-display text-[28rem] font-bold leading-none text-white opacity-[0.06]"
              aria-hidden
            >
              D
            </span>
          </div>

          <div className="relative">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand">
              LET&apos;S WORK TOGETHER
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Have a <span className="text-brand">project</span> in mind?
            </h2>
            <p className="mt-4 max-w-md text-neutral-400">
              If you&apos;re building a product, scaling a frontend platform,
              or navigating complex technical decisions, I&apos;m open to
              conversations around collaboration, consulting, or technical
              leadership.
            </p>
          </div>

          <div className="relative flex w-full flex-wrap gap-4 md:w-auto">
            <Button>
              Hire Me Now
              <ArrowUpRight />
            </Button>
            <Button
              variant="outline"
              className="border-white/25 bg-black/40 font-semibold text-white backdrop-blur-sm hover:bg-black/60"
            >
              Send Message
              <Send />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// 1. Import External Library
import { Github, Linkedin, Mail, Globe } from "lucide-react";

// 7. Static Data
import {
  landingFooterNav,
  landingFooterWork,
  landingFooterServices,
} from "../static/landingData";

export default function LandingFooter() {
  return (
    <footer className="border-t border-surface-border/60 px-6 py-16 lg:px-12 xl:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-12 xl:px-20">
        <div>
          <p className="text-lg font-bold text-foreground">
            <span className="text-brand">D</span> DzikriAlan
          </p>
          <p className="mt-3 max-w-xs text-sm text-neutral-400">
            Building digital products with clean code and great user
            experience.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">
            Navigation
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            {landingFooterNav.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">Work</p>
          <ul className="space-y-2 text-sm text-neutral-400">
            {landingFooterWork.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-foreground">
            Services
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            {landingFooterServices.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-surface-border/60 px-6 pt-6 sm:flex-row lg:px-12 xl:px-20">
        <p className="text-xs text-neutral-500">
          © 2026 Dzikri Alan. All rights reserved.
        </p>
        <div className="flex gap-4 text-neutral-400">
          <a href="#contact" aria-label="Github">
            <Github className="size-4" />
          </a>
          <a href="#contact" aria-label="LinkedIn">
            <Linkedin className="size-4" />
          </a>
          <a href="#contact" aria-label="Email">
            <Mail className="size-4" />
          </a>
          <a href="#contact" aria-label="Website">
            <Globe className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

// 1. Import External Library
import { useState } from "react";
import { Menu, X } from "lucide-react";

// 2. Import Types
// (tidak ada tipe khusus untuk komponen statis ini)

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";

// 7. Static Data
import { landingNavLinks } from "../static/landingData";

export default function LandingNavbar() {
  // 8. State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 11. Methods / Handlers
  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-4 z-50 px-6 lg:px-12 xl:px-20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 xl:px-20">
        <nav className="flex items-center justify-between rounded-lg border border-surface-border bg-neutral-950/90 px-6 py-4 shadow-soft backdrop-blur">
          <a href="#home" className="text-lg font-bold text-foreground">
            <span className="text-brand">D</span> DzikriAlan
          </a>

          <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-300 md:flex">
            {landingNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button size="sm">Hire Me</Button>
          </div>

          <button
            type="button"
            className="text-foreground md:hidden"
            onClick={handleToggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {isMenuOpen && (
          <ul className="absolute inset-x-6 top-full z-50 mt-2 flex flex-col gap-4 rounded-lg border border-surface-border bg-neutral-950/95 px-6 py-4 text-sm font-medium text-neutral-300 shadow-soft backdrop-blur md:hidden">
            {landingNavLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleCloseMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

// 1. Import External Library
import Image from "next/image";
import { useTranslation } from "next-i18next";

// 5. Import Reusable Component
import { Button } from "@/components/ui/button";
import ParticleFieldLazy from "@/shared/components/ParticleFieldLazy";
import { PARTICLE_THEME } from "@/shared/components/ParticleField";

// 7. Static Data
import heroPhoto from "@/shared/styles/guehi.webp";

export default function LandingHero() {
  const { t } = useTranslation("common");

  return (
    <section id="home" className="relative scroll-mt-28 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text panel */}
        <div className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-neutral-950 px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-24">
          <ParticleFieldLazy
            {...PARTICLE_THEME}
            density={700}
            speed={0.4}
            particleSize={0.022}
            withCube
            cubeSeed={0}
          />

          <span className="relative z-10 inline-flex items-center gap-2 self-start rounded-full border border-surface-border bg-neutral-900/80 px-4 py-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-brand" />
            </span>
            <span className="text-xs font-medium text-foreground">
              {t("hero.badge")}
            </span>
          </span>

          <div className="relative z-10">
            <h1 className="max-w-xl text-3xl font-thin leading-[1.1] text-foreground sm:text-4xl lg:text-5xl">
              {t("hero.title")}
            </h1>

            <p className="mt-6 max-w-md text-base text-neutral-300 sm:text-lg">
              {t("hero.subtitle")}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <a href="#overview">{t("hero.cta")}</a>
              </Button>
            </div>
          </div>

          <p className="relative z-10 text-sm text-neutral-300">
            {t("hero.findMe")}{" "}
            <a
              href="https://github.com/DzikriAlan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              GitHub
            </a>{" "}
            {t("hero.and")}{" "}
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
            {t("hero.download")}{" "}
            <a
              href="/resume.pdf"
              download="Dzikri Alan - Frontend Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline underline-offset-4"
            >
              {t("hero.resume")}
            </a>{" "}
            {t("hero.resumeSize")}
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

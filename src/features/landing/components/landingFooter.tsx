// 1. Import External Library
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useTranslation } from "next-i18next";

// 5. Import Reusable Component
import ParticleFieldLazy from "@/shared/components/ParticleFieldLazy";
import { PARTICLE_THEME } from "@/shared/components/ParticleField";

// 7. Static Data
const socialLinks = [
  { href: "https://github.com/DzikriAlan", label: "Github", icon: Github },
  { href: "https://www.linkedin.com/in/dzikri-alan/", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.instagram.com/_dzikrialan/", label: "Instagram", icon: Instagram },
  { href: "mailto:dzikrialan0@gmail.com", label: "Email", icon: Mail },
];

export default function LandingFooter() {
  const { t } = useTranslation("common");

  return (
    <footer className="relative overflow-hidden py-24 sm:py-32">
      <ParticleFieldLazy
        {...PARTICLE_THEME}
        density={700}
        speed={0.4}
        particleSize={0.022}
        withCube
        cubeSeed={4}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <h2 className="max-w-2xl text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
          {t("footer.heading")}
        </h2>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <a
            href="mailto:dzikrialan0@gmail.com"
            className="inline-block text-2xl font-medium text-brand underline-offset-4 hover:underline sm:text-3xl"
          >
            dzikrialan0@gmail.com
          </a>

          <div className="flex gap-4 text-neutral-400">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-foreground"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

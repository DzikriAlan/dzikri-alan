// 1. Import External Library
import Image, { type StaticImageData } from "next/image";
import { useTranslation } from "next-i18next";

// 7. Static Data
import { landingExperience, landingProjects } from "../static/landingData";

interface Row {
  key: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string | StaticImageData;
}

interface ExperienceText {
  role: string;
  description: string;
}

interface ProjectText {
  category: string;
  description: string;
}

export default function LandingWork() {
  const { t } = useTranslation("common");
  const experienceText = t("work.experience", {
    returnObjects: true,
  }) as ExperienceText[];
  const projectText = t("work.projects", { returnObjects: true }) as ProjectText[];

  const rows: Row[] = [
    ...landingExperience.map((exp, index) => ({
      key: exp.company,
      category: exp.period,
      title: exp.company,
      description: experienceText[index].description,
      tags: [experienceText[index].role],
      image: exp.image,
    })),
    ...landingProjects.map((project, index) => ({
      key: project.title,
      category: projectText[index].category,
      title: project.title,
      description: projectText[index].description,
      tags: project.tags,
      image: project.image,
    })),
  ];

  return (
    <section id="work" className="scroll-mt-28 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-20">
        <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-brand">
          {t("work.eyebrow")}
        </p>
        <h2 className="text-4xl font-normal text-foreground sm:text-5xl">
          {t("work.title")}
        </h2>
        <p className="mt-6 max-w-md text-neutral-300">{t("work.description")}</p>

        <div className="relative mt-16">
          {rows.map((row, index) => (
            <div
              key={row.key}
              style={{ zIndex: index + 1, top: "96px" }}
              className="sticky mb-6 grid overflow-hidden rounded-2xl border border-surface-border bg-black shadow-card md:grid-cols-2"
            >
              <div className="flex flex-col justify-between gap-6 p-8 sm:p-10 lg:p-12">
                <p className="font-mono text-sm uppercase tracking-widest text-brand">
                  {row.category}
                </p>

                <div>
                  <p className="text-xl font-semibold text-foreground sm:text-2xl">
                    {row.title}
                  </p>
                  <p className="mt-3 max-w-md text-neutral-300">
                    {row.description}
                  </p>
                  <p className="mt-4 text-sm text-brand">
                    {row.tags.join(" · ")}
                  </p>
                </div>
              </div>

              <div className="relative flex min-h-[280px] items-center justify-center bg-neutral-950 p-10 md:min-h-[360px]">
                <div className="relative aspect-video w-full max-w-md">
                  {/* Stacked photo effect: two tilted decoy frames peeking out behind the real image. */}
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-6 overflow-hidden rounded-xl border border-surface-border bg-neutral-900 opacity-80">
                    <Image src={row.image} alt="" fill className="object-cover" />
                  </div>
                  <div className="absolute inset-0 -translate-x-2 translate-y-2 -rotate-3 overflow-hidden rounded-xl border border-surface-border bg-neutral-900 opacity-90">
                    <Image src={row.image} alt="" fill className="object-cover" />
                  </div>
                  <div className="absolute inset-0 overflow-hidden rounded-xl border border-surface-border shadow-card">
                    <Image src={row.image} alt={row.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 1. Import External Library
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// 5. Import Feature Components
import LandingHero from "@/features/landing/components/landingHero";
import LandingOverview from "@/features/landing/components/landingOverview";
import LandingStrategy from "@/features/landing/components/landingStrategy";
import LandingFaq from "@/features/landing/components/landingFaq";
import LandingWork from "@/features/landing/components/landingWork";
import LandingFooter from "@/features/landing/components/landingFooter";
import LanguageToggle from "@/shared/components/LanguageToggle";
import { useScrollSpy } from "@/features/landing/hooks/useScrollSpy";

const SECTION_IDS = ["home", "work"];

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  useScrollSpy(SECTION_IDS);

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Head>
      <main className="min-h-screen bg-neutral-950">
        <LanguageToggle />
        <LandingHero />
        <LandingOverview />
        <LandingWork />
        <LandingStrategy />
        <LandingFaq />
        <LandingFooter />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Home;

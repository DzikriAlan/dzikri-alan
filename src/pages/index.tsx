// 1. Import External Library
import type { NextPage } from "next";
import Head from "next/head";

// 5. Import Feature Components
import LandingHero from "@/features/landing/components/landingHero";
import LandingOverview from "@/features/landing/components/landingOverview";
import LandingStrategy from "@/features/landing/components/landingStrategy";
import LandingServices from "@/features/landing/components/landingServices";
import LandingWork from "@/features/landing/components/landingWork";
import LandingFooter from "@/features/landing/components/landingFooter";
import { useScrollSpy } from "@/features/landing/hooks/useScrollSpy";

const SECTION_IDS = ["home", "services", "work"];

const Home: NextPage = () => {
  useScrollSpy(SECTION_IDS);

  return (
    <>
      <Head>
        <title>DzikriAlan | Frontend Developer</title>
        <meta
          name="description"
          content="Dzikri Alan is a Frontend Developer who builds modern, fast and scalable web applications."
        />
      </Head>
      <main className="min-h-screen bg-neutral-950">
        <LandingHero />
        <LandingOverview />
        <LandingWork />
        <LandingStrategy />
        <LandingServices />
        <LandingFooter />
      </main>
    </>
  );
};

export default Home;

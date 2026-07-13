// 1. Import External Library
import type { NextPage } from "next";
import Head from "next/head";

// 5. Import Feature Components
import LandingNavbar from "@/features/landing/components/landingNavbar";
import LandingHero from "@/features/landing/components/landingHero";
import LandingServices from "@/features/landing/components/landingServices";
import LandingAbout from "@/features/landing/components/landingAbout";
import LandingWork from "@/features/landing/components/landingWork";
import LandingTestimonials from "@/features/landing/components/landingTestimonials";
import LandingCta from "@/features/landing/components/landingCta";
import LandingFooter from "@/features/landing/components/landingFooter";
import { useScrollSpy } from "@/features/landing/hooks/useScrollSpy";

const SECTION_IDS = ["home", "services", "about", "work", "testimonials", "contact"];

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
        <LandingNavbar />
        <LandingHero />
        <LandingServices />
        <LandingAbout />
        <LandingWork />
        <LandingTestimonials />
        <LandingCta />
        <LandingFooter />
      </main>
    </>
  );
};

export default Home;

import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

import CTABand from "@/components/sections/CTABand";
import ContactTeaser from "@/components/sections/ContactTeaser";
import HeroSection from "@/components/sections/HeroSection";
import ImpactPreview from "@/components/sections/ImpactPreview";
import MissionPreview from "@/components/sections/MissionPreview";
import Partners from "@/components/sections/Partners";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import TestimonialPreview from "@/components/sections/TestimonialPreview";
import { siteConfig } from "@/data/site";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { injectJsonLd, usePageMeta } from "@/lib/seo";

type OutletContext = { openVideo: () => void };

const Home = () => {
  const { openVideo } = useOutletContext<OutletContext>();

  usePageMeta(
    "Translational Futures Foundation | Advancing Trauma Recovery Through Science",
    siteConfig.description
  );

  useEffect(() => {
    injectJsonLd({
      "@context": "https://schema.org",
      "@type": "NGO",
      name: siteConfig.name,
      description: siteConfig.description,
      url: window.location.origin,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.zip,
        addressCountry: "US",
      },
      nonprofitStatus: "Nonprofit501c3",
    });
  }, []);

  useFadeInOnScroll("mission-preview");
  useFadeInOnScroll("programs-preview");
  useFadeInOnScroll("impact-preview");

  return (
    <>
      <HeroSection onOpenVideo={openVideo} />
      <MissionPreview />
      <ProgramsPreview />
      <ImpactPreview />
      <TestimonialPreview />
      <Partners />
      <CTABand />
      <ContactTeaser />
    </>
  );
};

export default Home;

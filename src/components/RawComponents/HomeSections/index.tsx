import React, { useEffect } from "react";
import {
  ContactUs,
  FeedSection,
  ReadOurReviews,
  HeroBanner,
  ServicesSection,
  PracticeAreasSection,
  LegalAdvocacySection,
} from "../Sections";

export const HomePageContent = () => {
  return (
    <main id="MainZone">
      <HeroBanner />

      <ServicesSection />
      <PracticeAreasSection />
      <LegalAdvocacySection />

      <ReadOurReviews />

      <FeedSection />
      <ContactUs />
    </main>
  );
};

import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  HeroBanner,
  ServicesSection,
  PracticeAreasSection,
  LegalAdvocacySection,
  ReadOurReviews,
  FeedSection,
  ContactUs,
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";

export const HomePageV2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <HeroBanner />
        <PracticeAreasSection />
        <ServicesSection />
        <ReadOurReviews />
        <LegalAdvocacySection />

        <FeedSection />
        <ContactUs />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

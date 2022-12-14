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

export const HomePageV2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box>
        <HeroBanner />

        <ServicesSection />
        <PracticeAreasSection />
        <LegalAdvocacySection />

        <ReadOurReviews />

        <FeedSection />
        <ContactUs />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

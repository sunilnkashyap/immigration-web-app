import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  ServicesGridSection,
  ImmigrationServicesSection,
  PracticeAreasBannerSection,
  OurServiceAreasSection,
  ReadOurReviews,
  ContactUsDetailed,
  ContactMap,
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <PracticeAreasBannerSection title="Contact" />

        <ContactUsDetailed />

        <ContactMap />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

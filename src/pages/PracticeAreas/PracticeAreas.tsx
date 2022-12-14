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
} from "../../components/RawComponents";

export const PracticeAreas = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box>
        <PracticeAreasBannerSection />

        <ServicesGridSection />

        <ImmigrationServicesSection />

        <OurServiceAreasSection />

        <ReadOurReviews bg="light" />

        <ContactUsDetailed />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

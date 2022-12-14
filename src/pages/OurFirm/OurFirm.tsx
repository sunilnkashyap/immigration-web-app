import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  OurFirmSection,
  ReadOurReviews,
  ContactUs,
} from "../../components/RawComponents";

export const OurFirm = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box>
        <OurFirmSection />
        <ReadOurReviews />
        <ContactUs />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

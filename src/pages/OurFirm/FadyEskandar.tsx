import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  FadyEskandarSection,
  ReadOurReviews,
  ContactUs,
} from "../../components/RawComponents";

export const FadyEskandar = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box>
        <FadyEskandarSection />
        <ContactUs />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

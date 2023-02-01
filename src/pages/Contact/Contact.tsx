import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  ContactUsDetailed,
  ContactMap,
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";
import { ContactBannerSection } from "../../components/RawComponents/Sections/ContactBannerSection";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <ContactBannerSection title="Contact" />

        <ContactUsDetailed />

        <ContactMap />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

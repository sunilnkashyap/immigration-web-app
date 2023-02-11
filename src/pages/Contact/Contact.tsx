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
import { Helmet } from "react-helmet";

export const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LAW OFFICES OF FADY ESKANDAR | Contact</title>
        <meta
          name="description"
          content="Fady Eskandar is passionate about immigration. As an immigrant himself, Fady understands the American immigration system and interacts with each one of his clients knowing what it means to start a life from scratch in the United States of America."
        />
      </Helmet>
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

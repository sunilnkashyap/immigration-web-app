import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  AsylumHeader,
  AsylumContent,
  FeedSection,
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";

export const Asylum = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <AsylumHeader image="/assets/images/asylum-header.jpg" title="Asylum" />

        <AsylumContent />

        <FeedSection bg={true} />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

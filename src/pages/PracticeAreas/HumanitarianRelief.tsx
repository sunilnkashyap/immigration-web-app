import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  AsylumHeader,
  HumanitarianReliefContent,
  FeedSection,
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";

export const HumanitarianRelief = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <AsylumHeader
          image="/assets/images/humanitarian.jpg"
          title="Humanitarian Relief"
        />

        <HumanitarianReliefContent />

        <FeedSection bg={true} />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

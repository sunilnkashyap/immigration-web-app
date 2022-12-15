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

export const InvestmentImmigration = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <AsylumHeader
          image="/assets/images/investment.jpg"
          title="Investment Immigration"
        />

        <AsylumContent />

        <FeedSection bg={true} />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

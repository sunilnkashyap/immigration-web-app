import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  AsylumHeader,
  FamilyBasedImmigrationContent,
  FeedSection,
} from "../../components/RawComponents";
import { ScrollToTop } from "../../components/ScrollToTop";

export const FamilyBasedImmigration = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <AsylumHeader
          image="/assets/images/family-header.jpg"
          title="Family Based Immigration"
        />

        <FamilyBasedImmigrationContent />

        <FeedSection bg />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

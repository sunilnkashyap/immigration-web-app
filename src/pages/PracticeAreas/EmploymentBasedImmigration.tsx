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

export const EmploymentBasedImmigration = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <ScrollToTop />
      <Box>
        <Header />
      </Box>

      <Box>
        <AsylumHeader
          image="/assets/images/employee.jpg"
          title="Employment Based Immigration"
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

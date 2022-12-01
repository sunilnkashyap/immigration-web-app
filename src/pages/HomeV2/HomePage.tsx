import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  Header,
  Footer,
  HomePageContent,
} from "../../components/RawComponents";

export const HomePageV2 = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <Header />
      </Box>

      <Box>
        <HomePageContent />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

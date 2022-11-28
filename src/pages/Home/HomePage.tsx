import React from "react";
import { Box, Container } from "@mui/material";
import { HeroRail, ImmigrationAttorney, TopBar } from "../../components";
import Grid from "@mui/material/Unstable_Grid2";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Box>
        <TopBar />
      </Box>

      <HeroRail />

      <Container maxWidth="xl">
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          sx={{
            paddingTop:
              "calc((50 * 1px) + (100 - 50) * ((100vw - 320px) / (1920 - 320)))",
            paddingBottom:
              "calc((50 * 1px) + (100 - 50) * ((100vw - 320px) / (1920 - 320)))",
          }}
        >
          <Grid xs={5}>
            <ImmigrationAttorney />
          </Grid>
          <Grid xs={5} xsOffset={2}>
            <h1>{t("Welcome to React")}</h1>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

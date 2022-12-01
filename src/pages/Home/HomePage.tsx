import React from "react";
import { Box, Container } from "@mui/material";
import {
  DedicatedLegalAdvocacy,
  HeroRail,
  ImmigrationAttorney,
  PracticeAreas,
  ServiceSlider,
  TopBar,
} from "../../components";
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
          alignItems="center"
          sx={{
            paddingTop:
              "calc((50 * 1px) + (100 - 50) * ((100vw - 320px) / (1920 - 320)))",
            paddingBottom:
              "calc((50 * 1px) + (100 - 50) * ((100vw - 320px) / (1920 - 320)))",
          }}
        >
          <Grid xs={12} md={6}>
            <ImmigrationAttorney />
          </Grid>
          <Grid xs={12} md={6}>
            <ServiceSlider />
          </Grid>
        </Grid>

        <Grid container rowSpacing={1}>
          <Grid xs={12} md={12}>
            <PracticeAreas />
          </Grid>
        </Grid>

        <Grid container rowSpacing={1}>
          <Grid xs={12} md={6} sx={{ mt: 20, mb: 5 }}>
            <DedicatedLegalAdvocacy />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

import React from "react";
import { Box } from "@mui/material";
import { HeroRail, TopBar } from "../../components";

export const HomePage = () => {
  return (
    <>
      <Box>
        <TopBar />
      </Box>

      <HeroRail />

      <h1>Home Page</h1>
    </>
  );
};

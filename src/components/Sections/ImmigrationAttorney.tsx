import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ClearIcon from "@mui/icons-material/Clear";
import styled from "@emotion/styled";

export const HeadingText = styled(Typography)({
  fontFamily: "Georama, sans-serif",
  fontSize: "2.84rem",
  letterSpacing: "0.069em",
  lineHeight: 1.2,
  fontWeight: 400,
  textTransform: "none",
  wordBreak: "break-word",
});

export const SubHeadingText = styled(Typography)({
  fontFamily: "Georama, sans-serif",
  fontSize: "1.33rem",
  letterSpacing: "0.2em",
  lineHeight: 1.42,
  fontWeight: 400,
  textTransform: "none",
  wordBreak: "break-word",
});

export const ImmigrationAttorney = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={
        {
          // paddingTop: 'calc((50 * 1px) + (100 - 50) * ((100vw - 320px) / (1920 - 320)))',
          // paddingBottom: 'calc((50 * 1px) + (100 - 50) * ((100vw - 320px) / (1920 - 320)))'
        }
      }
    >
      <Box
        sx={{
          marginBottom:
            "calc((30 * 1px) + (45 - 30) * ((100vw - 320px) / (1920 - 320)))",
        }}
      >
        <HeadingText>Anaheim Immigration Attorney</HeadingText>
      </Box>

      <SubHeadingText>
        Accessible and Personalized Immigration Representation
      </SubHeadingText>
    </Box>
  );
};

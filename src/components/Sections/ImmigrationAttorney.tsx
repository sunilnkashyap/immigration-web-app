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

export const Paragraph = styled(Typography)({
  fontFamily: "Georama, sans-serif",
  fontSize: "1rem",
  letterSpacing: "0.05em",
  lineHeight: 2.23,
  fontWeight: 400,
  textTransform: "none",
  wordBreak: "break-word",
  color: "#000000",
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
      <br />
      <Paragraph>
        If you are experiencing any type of immigration problem, you deserve a
        compassionate legal advocate who understands what you are going through.
        At the Law Offices of Fady Eskandar we can help you navigate the United
        States immigration system with confidence. Our founder is an immigrant
        himself and can provide the honest, communicative representation you
        need to succeed.
      </Paragraph>
      <br />
      <Paragraph>
        <b>
          Our Anaheim immigration lawyer strives to offer an exceptional level
          of service to people from all walks of life.
        </b>{" "}
        We know how to effectively approach a wide variety of immigration
        scenarios and will work tirelessly to help you achieve your short- and
        long-term objectives. Your satisfaction is our top priority, and we will
        utilize the full extent of our firm’s resources as we work to favorably
        resolve your case.
      </Paragraph>
      <br />
      <hr />

      <Paragraph sx={{ textAlign: "center" }}>
        <b>
          Call (714) 909-2127 or contact us online to request an initial
          consultation. Flexible payment options are available.
        </b>
      </Paragraph>

      <hr />
      <br />
    </Box>
  );
};

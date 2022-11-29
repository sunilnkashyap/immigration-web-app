import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HeadingText, SubHeadingText, Paragraph } from "../Typography";

export const ImmigrationAttorney = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ pl: 1, pr: 3 }}>
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

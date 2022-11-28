import React from "react";
import { Box } from "@mui/material";
import { colors } from "../../theme";
import { MenuBar } from "../MenuBar/MenuBar";
import { Anchor, Paragraph, Wrapper } from "./TopBar.style";

export const TopBar = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: colors.grey,
          paddingTop: "calc(1rem * .6)",
          paddingBottom: "calc(1rem * .6)",
          display: { xs: "none", sm: "block" },
        }}
      >
        <Wrapper maxWidth="xl">
          <Paragraph>Call Us Today to Take Control of Your Journey</Paragraph>
          <Anchor href="#" underline="none">
            714-909-2127
          </Anchor>
        </Wrapper>
      </Box>
      <Box>
        <MenuBar />
      </Box>
    </Box>
  );
};

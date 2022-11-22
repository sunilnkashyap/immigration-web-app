import { Container, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Paragraph = styled(Typography)({
  fontFamily: "Georama, sans-serif",
  fontSize: "0.76rem",
  letterSpacing: "0.15em",
  lineHeight: "2.18",
  fontWeight: "500",
  textTransform: "none",
  fontStyle: "italic",
  color: "#ffffff",
  marginRight: "calc(1rem * .8)",
});

export const Anchor = styled(Link)({
  fontFamily: "Georama, sans-serif",
  fontSize: "0.95rem",
  letterSpacing: "0.15em",
  lineHeight: "1.2",
  fontWeight: "700",
  textTransform: "none",
  color: "#A0A0A0",
});

export const Wrapper = styled(Container)({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

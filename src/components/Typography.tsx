import { Typography, Link } from "@mui/material";
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

export const ListLink = styled(Link)(({ theme }) => ({
  color: "black",
  fontFamily: "Georama, sans-serif",
  fontSize: "1rem",
  letterSpacing: " 0.1em",
  lineHeight: "1.69",
  fontWeight: 700,
  textTransform: "none",
}));

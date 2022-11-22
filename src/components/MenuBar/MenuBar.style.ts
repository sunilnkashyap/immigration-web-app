import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

export const MenuLinkWrapper = styled(Box)({
  justifyContent: "flex-end",
  paddingTop: "1rem",
  paddingBottom: "1rem",
});

export const MenuLink = styled(Button)({
  fontFamily: "Georama, sans-serif",
  color: "#A0A0A0",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  lineHeight: 1.2,
  fontSize: "calc(1rem * 0.81)",
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.15rem",
  marginLeft: "calc(1rem * 0.8)",
  marginRight: "calc(1rem * 0.8) + 1px",
  "&:hover": {
    backgroundColor: "transparent",
    marginRight: "calc(1rem * 0.8) - 1px",
    color: "#000000",
  },
});

export const linkButtonStyle = (selected: boolean) => ({
  fontFamily: "Georama, sans-serif",
  color: "#A0A0A0",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  lineHeight: 1.2,
  fontSize: "calc(1rem * 0.81)",
  fontWeight: selected ? 700 : 500,
  textTransform: "uppercase",
  letterSpacing: "0.15rem",
  marginLeft: "calc(1rem * 0.8)",
  marginRight: "calc(1rem * 0.8) + 1px",
  "&:hover": {
    color: "#000000",
    border: "none",
    background: "transparent",
  },
  border: "none",
});

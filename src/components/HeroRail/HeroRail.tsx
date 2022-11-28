import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "react-i18next";

export const HeroRail = () => {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        backgroundImage: `url('${
          isDesktop
            ? "/assets/images/hero-bg.jpg"
            : isMobile
            ? "/assets/images/hero-bg-mobile.jpg"
            : "assets/images/hero-bg-tablet.jpg"
        }')`,
        marginTop: "11px",
      }}
    >
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid xs={10} sm={10} md={6} mdOffset={1} smOffset={1} xsOffset={1}>
          <Box
            sx={{
              marginTop: {
                lg: "10rem",
                md: "8rem",
                sm: "22rem",
                xs: "12rem",
              },
              marginBottom: {
                lg: "6rem",
                md: "6rem",
                sm: "4rem",
                xs: "2rem",
              },
              backgroundColor: "#99A8B5",
              paddingLeft:
                "calc(calc((20 * 1px) + (140 - 20) * ((100vw - 320px) / (1920 - 320))) * .6)",
              paddingRight:
                "calc(calc((20 * 1px) + (140 - 20) * ((100vw - 320px) / (1920 - 320))) * .6)",
              paddingTop:
                "calc(calc((20 * 1px) + (140 - 20) * ((100vw - 320px) / (1920 - 320))) * .8)",
              paddingBottom:
                "calc(calc((20 * 1px) + (140 - 20) * ((100vw - 320px) / (1920 - 320))) * .8)",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Georama, sans-serif",
                fontSize: {
                  lg: "5rem",
                  md: "5rem",
                  sm: "3.5rem",
                  xs: "3rem",
                },
                letterSpacing: ".075em",
                lineHeight: "1.21",
                fontWeight: "400",
                textTransform: "none",
                wordBreak: "break-word",
                textAlign: "right",
                color: "#ffffff",
              }}
            >
              {t("home.hero.title")}
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georama, sans-serif",
                marginTop:
                  "calc((30 * 1px) + (30 - 30) * ((100vw - 320px) / (1920 - 320)))",
                marginBottom:
                  "calc((30 * 1px) + (30 - 30) * ((100vw - 320px) / (1920 - 320)))",
                fontSize: "2rem",
                letterSpacing: ".075em",
                lineHeight: "1.21",
                fontWeight: "400",
                textTransform: "none",
                wordBreak: "break-word",
                textAlign: "right",
                color: "#ffffff",
              }}
            >
              Practicing Immigration Law
            </Typography>

            <Typography
              sx={{
                fontFamily: "Georama, sans-serif",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",

                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                lineHeight: "1.2",
                fontWeight: "500",
                textTransform: "none",
                wordBreak: "break-word",
                textAlign: "right",
                color: "#ffffff",
                cursor: "pointer",
                "&:hover": {
                  color: "#191919",
                  ".hero-icon": {
                    transform: "rotate(0deg)",
                  },
                },
              }}
            >
              REQUEST A CONSULTATION{" "}
              <ClearIcon
                className="hero-icon"
                sx={{
                  marginLeft: "15px",
                  transform: "rotate(45deg)",
                  transition: "transform 0.3s ease 0s",
                }}
              />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

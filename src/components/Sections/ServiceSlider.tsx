import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { styled } from "@mui/material/styles";

// Import Swiper styles
import "swiper/css";

const Item = styled(Box)(({ theme }) => ({
  padding: "3rem 1rem",
  backgroundColor: "#99A8B5",
  color: "white",
  textAlign: "center",
  height: "100%",
  minHeight: "160px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    a: {
      color: "black",
    },
    cursor: "pointer",
  },
}));

const ItemLink = styled(Link)(({ theme }) => ({
  color: "white",
  fontFamily: "Georama, sans-serif",
  fontSize: "1.2rem",
  letterSpacing: " 0.1em",
  lineHeight: "1.69",
  fontWeight: 500,
  textTransform: "none",
}));

export const ServiceSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Box>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Item>
                  <ItemLink href="#" underline="none">
                    Humanitarian Relief
                  </ItemLink>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <ItemLink href="#" underline="none">
                    Asylum
                  </ItemLink>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <ItemLink href="#" underline="none">
                    Deportation Defense
                  </ItemLink>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <ItemLink href="#" underline="none">
                    Family Based Immigration
                  </ItemLink>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Item>
                  <ItemLink href="#" underline="none">
                    Citizenship & Naturalization
                  </ItemLink>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <ItemLink href="#" underline="none">
                    Employment Based Immigration
                  </ItemLink>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <ItemLink href="#" underline="none">
                    Investment Immigration
                  </ItemLink>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

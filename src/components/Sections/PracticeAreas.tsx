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
import {
  HeadingText,
  SubHeadingText,
  Paragraph,
  ListLink,
} from "../Typography";

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

export const PracticeAreas = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <HeadingText sx={{ textAlign: "center" }}>Our Practice Areas</HeadingText>
      <Paragraph sx={{ textAlign: "center", mt: 1, mb: 1 }}>
        Our team represents individuals currently in the United States who need
        help adjusting their immigration status. Whether you are looking to
        request asylum or want a legal professional present at your
        naturalization interview, we can tailor our services to meet your unique
        needs.
      </Paragraph>

      <Paragraph sx={{ textAlign: "center", mt: 2, mb: 2 }}>
        <b>
          Our Anaheim immigration attorney can assist you with cases involving:
        </b>
      </Paragraph>

      <br />
      <Grid container spacing={2} columns={16}>
        <Grid xs={8} sx={{ borderRight: "1px solid rgba(0,0,0,0.2)" }}>
          <ul>
            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Asylum -
                </ListLink>
                If you have been persecuted or fear future persecution in your
                home country on certain protected grounds, you may be able to
                obtain protection in the United States.
              </Paragraph>
            </li>

            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Family-Based Immigration -
                </ListLink>
                United States citizens and lawful permanent residents can
                sponsor qualifying relatives for green cards.
              </Paragraph>
            </li>
            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Humanitarian Relief -
                </ListLink>
                Several humanitarian programs are potentially available to
                immigrants who were victims of abuse or violent crimes, facing
                natural disasters, serious medical issues, and other
                emergencies.
              </Paragraph>
            </li>
            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Citizenship -
                </ListLink>
                Lawful permanent residents can naturalize and become citizens
                after passing a two-part exam and meeting several other
                requirements.
              </Paragraph>
            </li>
            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Investment Immigration -
                </ListLink>
                Green cards are available to immigrants who make a large
                investment in a U.S.-based business that generates at least ten
                jobs. There is also a non-immigrant visa option for foreign
                nationals from certain countries to obtain an E2 visa and allow
                them to temporarily stay in the US to manage their businesses.
              </Paragraph>
            </li>
          </ul>
        </Grid>
        <Grid xs={8}>
          <ul>
            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Employment-Based Immigration -
                </ListLink>
                U.S.-based employers can sponsor immigrants for green cards
                after obtaining a labor certification.
              </Paragraph>
            </li>

            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Deportation Defense -
                </ListLink>
                Several relief options may be available to immigrants who have
                been placed in removal proceedings.
              </Paragraph>
            </li>
            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Writs of Mandamus -
                </ListLink>
                If United States Citizenship and Immigration Services (USCIS)
                refuses to make a timely decision on your case, a Writ of
                Mandamus can force them to act.
              </Paragraph>
            </li>
            <li className="li-square">
              <Paragraph>
                <ListLink href="#" underline="none">
                  Hardship Waivers -
                </ListLink>
                Extreme hardship waivers can help you overcome inadmissibility
                obstacles and access immigration benefits.
              </Paragraph>
            </li>
          </ul>

          <Typography sx={{ ml: 3 }}>
            <b>
              Every practice area we handle involves many complex steps. Having
              reliable representation is the key to making it through these
              steps.
            </b>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HeadingText, SubHeadingText, Paragraph } from "../Typography";

export const DedicatedLegalAdvocacy = () => {
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
        <HeadingText>Get the Dedicated Legal Advocacy You Deserve</HeadingText>
      </Box>

      <Paragraph>
        When you are considering applying for an immigration benefit or have
        encountered an unexpected complication, it is in your best interest to
        discuss your case with a qualified legal professional. When you come to
        the Law Offices of Fady Eskandar we will take the time to thoroughly
        assess every element of your situation before reviewing your legal
        options and beginning to develop a case strategy.
      </Paragraph>
      <br />
      <Paragraph>
        <b>
          We recognize what is at stake in any immigration matter and are ready
          to help you achieve your American Dream.
        </b>{" "}
        Our team is committed to protecting your interests and will fervently
        represent you from beginning to end. No matter the complexity of your
        case, our knowledgeable lawyer will provide direct, sophisticated
        guidance throughout each stage of your immigration journey.
      </Paragraph>
      <br />
      <hr />

      <Paragraph sx={{ textAlign: "center" }}>
        <b>
          Discuss your immigration goals with us today. Call (714) 909-2127 or
          contact us online to get started.
        </b>
      </Paragraph>

      <hr />
      <br />

      <SubHeadingText>About Anaheim</SubHeadingText>
      <br />
      <Paragraph>
        Well known as the proud home of Disneyland, Anaheim is not only a great
        destination for visitors, it is also a wonderful place to live. We’re a
        quick drive from more than 42 miles of Orange County coastline and beach
        cities for those who love the outdoors, and boast a wealth of indoor
        attractions, dining experiences, and shopping opportunities. In addition
        to the Disneyland Resort, the Anaheim Packing District, and the
        GardenWalk offer world-class restaurants, bars, and unique experiences
        tailored to people of all ages. We are also home to Angels Stadium for
        baseball fans, and the Honda Center, home of the Ducks hockey team.
        Founded in 1857 by German farmers and vintners, Anaheim has become a
        thriving destination city for people from around the world.
      </Paragraph>
    </Box>
  );
};

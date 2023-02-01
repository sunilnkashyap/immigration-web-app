import React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  PracticeAreas,
  Asylum,
  FamilyBasedImmigration,
  HumanitarianRelief,
  CitizenshipNaturalization,
  InvestmentImmigration,
  EmploymentBasedImmigration,
  DeportationDefense,
} from "../pages";
import { ComingSoon } from "../pages/ComingSoon";
import { Contact } from "../pages/Contact";
import { HomePageV2 } from "../pages/HomeV2";
import { FadyEskandar, OurFirm } from "../pages/OurFirm";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Reviews } from "../pages/Reviews";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePageV2 />,
  },
  {
    path: "home",
    element: <HomePageV2 />,
  },
  {
    path: "our-firm",
    element: <OurFirm />,
  },
  {
    path: "our-firm/fady-eskandar",
    element: <FadyEskandar />,
  },
  {
    path: "practice-areas",
    element: <PracticeAreas />,
  },

  {
    path: "practice-areas/asylum",
    element: <Asylum />,
  },

  {
    path: "practice-areas/family-based-immigration",
    element: <FamilyBasedImmigration />,
  },

  {
    path: "practice-areas/humanitarian-relief",
    element: <HumanitarianRelief />,
  },
  {
    path: "practice-areas/citizenship-naturalization",
    element: <CitizenshipNaturalization />,
  },
  {
    path: "practice-areas/investment-immigration",
    element: <InvestmentImmigration />,
  },
  {
    path: "practice-areas/employment-based-immigration",
    element: <EmploymentBasedImmigration />,
  },
  {
    path: "practice-areas/deportation-defense",
    element: <DeportationDefense />,
  },

  {
    path: "reviews",
    element: <Reviews />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
]);

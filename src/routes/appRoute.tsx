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
import { Contact } from "../pages/Contact";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";
import { Reviews } from "../pages/Reviews";

const HomePageV2 = React.lazy(() => import("../pages/HomeV2"));
const OurFirm = React.lazy(() => import("../pages/OurFirm/OurFirm"));
const FadyEskandar = React.lazy(() => import("../pages/OurFirm/FadyEskandar"));

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

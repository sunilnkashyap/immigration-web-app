import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PracticeAreas } from "../pages";
import { HomePageV2 } from "../pages/HomeV2";
import { FadyEskandar, OurFirm } from "../pages/OurFirm";

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
    element: <PracticeAreas />,
  },

  {
    path: "practice-areas/family-based-immigration",
    element: <PracticeAreas />,
  },

  {
    path: "practice-areas/humanitarian-relief",
    element: <PracticeAreas />,
  },
  {
    path: "practice-areas/citizenship-naturalization",
    element: <PracticeAreas />,
  },
  {
    path: "practice-areas/investment-immigration",
    element: <PracticeAreas />,
  },
  {
    path: "practice-areas/employment-based-immigration",
    element: <PracticeAreas />,
  },
  {
    path: "practice-areas/deportation-defense",
    element: <PracticeAreas />,
  },

  {
    path: "reviews",
    element: <PracticeAreas />,
  },
  {
    path: "contact",
    element: <PracticeAreas />,
  },
]);

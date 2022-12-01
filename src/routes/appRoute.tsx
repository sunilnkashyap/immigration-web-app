import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePageV2 } from "../pages/HomeV2";
import { OurFirm } from "../pages/OurFirm";

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
]);

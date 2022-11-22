import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
]);

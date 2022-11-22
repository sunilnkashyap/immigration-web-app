import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;

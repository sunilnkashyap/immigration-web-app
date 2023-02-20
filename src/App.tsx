import React, { StrictMode, Suspense, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <div className={`${i18n.language == "en" ? "" : "ta_r"}`}>
      <Suspense fallback={<div>Loading...</div>}>
        <StrictMode>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <RouterProvider router={appRouter} />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </ThemeProvider>
        </StrictMode>
      </Suspense>
    </div>
  );
}

export default App;

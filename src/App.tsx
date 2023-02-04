import React, { StrictMode, useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
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
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import GlobalStyles from "@mui/joy/GlobalStyles";
import "@fontsource/public-sans";
import App from "./App";

const inputGlobalStyes = (
  <GlobalStyles
    styles={(theme) => {
      return {
        body: {
          backgroundColor: theme.palette.neutral[100],
        },
      };
    }}
  />
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider>
        <CssBaseline />
        {inputGlobalStyes}
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

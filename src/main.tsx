import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "@/context/AppContext";
import App from "./App";
import { SelectionContextProvider } from "./context/SelectionContext";
import { SheetContextProvider } from "./context/SheetContext";
import { StorageContextProvider } from "./context/StorageContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./css/global.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <StorageContextProvider>
          <SheetContextProvider>
            <SelectionContextProvider>
              <ThemeProvider theme={theme}>
                <App />
              </ThemeProvider>
            </SelectionContextProvider>
          </SheetContextProvider>
        </StorageContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

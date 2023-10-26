import "@emotion/react";
import { Theme as BaseTheme } from "@mui/material/styles/createTheme";

declare module "@emotion/react" {
  export interface Theme extends BaseTheme {}
}

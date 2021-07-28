// theme.ts
// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// 3. extend the theme
const theme = extendTheme({
  fonts: {
    heading: "Proza Libre, Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  colors: {
    blue: {
      "50": "#E9EFFC",
      "100": "#C1D2F5",
      "200": "#9AB4EF",
      "300": "#7297E9",
      "400": "#4B7AE2",
      "500": "#235DDC",
      "600": "#1C4AB0",
      "700": "#153884",
      "800": "#0E2558",
      "900": "#07132C",
    },
    teal: {
      "50": "#E9FAFB",
      "100": "#C2F1F4",
      "200": "#9BE8EE",
      "300": "#74DFE7",
      "400": "#4DD6E0",
      "500": "#26CDD9",
      "600": "#1EA4AE",
      "700": "#177B82",
      "800": "#0F5257",
      "900": "#08292B",
    },
  },
  ...config,
});
export default theme;

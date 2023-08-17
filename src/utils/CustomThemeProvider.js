import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { ColorScheme } from "../utils/theme";

const theme = createTheme({
  palette: {
    primary: {
      main: ColorScheme.PRIMARY,
    },
    secondary: {
      main: ColorScheme.ORANGE,
    },
    info: {
      main: ColorScheme.MAROON,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const CustomThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;

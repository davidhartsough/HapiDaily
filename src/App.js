import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import DataProvider from "./store";
import Main from "./Main";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1997ff",
      light: "#55bbff",
      dark: "#006acb"
    },
    secondary: {
      main: "#fff"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default () => (
  <DataProvider>
    <MuiThemeProvider theme={theme}>
      <Main />
    </MuiThemeProvider>
  </DataProvider>
);

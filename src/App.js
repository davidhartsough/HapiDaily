import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import StoreProvider from "./store";
import Authenticator from "./components/Authenticator";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1997ff",
      light: "#55bbff",
      dark: "#006acb"
    },
    secondary: {
      main: "#ffa319"
    }
  },
  typography: {
    useNextVariants: true
  }
});

export default () => (
  <StoreProvider>
    <MuiThemeProvider theme={theme}>
      <Authenticator />
    </MuiThemeProvider>
  </StoreProvider>
);

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SignIn from "./SignIn";
import Goals from "./Goals";
import Completed from "./Completed";
import People from "./People";
import Settings from "./Settings";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

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

const RedirectToGoals = () => <Redirect to="/goals" />;

const Routes = ({ auth }) => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <Route path="/sign-in" component={SignIn} />
      {isLoaded(auth) ? (
        isEmpty(auth) ? (
          <Redirect to="/sign-in" />
        ) : (
          <Layout>
            <Route path="/" exact component={RedirectToGoals} />
            <Route path="/goals" component={Goals} />
            <Route path="/completed" component={Completed} />
            <Route path="/people" component={People} />
            <Route path="/settings" component={Settings} />
          </Layout>
        )
      ) : (
        <Loading />
      )}
    </MuiThemeProvider>
  </Router>
);

export default connect(({ firebase: { auth } }) => ({ auth }))(Routes);

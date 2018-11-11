import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Goals from "./Goals";
import Completed from "./Completed";
import People from "./People";
import Settings from "./Settings";
import Layout from "../components/Layout";

const RedirectToGoals = () => <Redirect to="/goals" />;

const Routes = ({ uid }) => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/goals" render={() => <Goals uid={uid} />} />
        <Route path="/completed" render={() => <Completed uid={uid} />} />
        <Route path="/people" render={() => <People uid={uid} />} />
        <Route path="/settings" render={() => <Settings uid={uid} />} />
        <Route component={RedirectToGoals} />
      </Switch>
    </Layout>
  </Router>
);

export default Routes;

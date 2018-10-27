import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Home from "./Home";

export default () => (
  <Router>
    <div className="layout">
      <Route path="/" exact component={Home} />
      <Route path="/sign-in" component={SignIn} />
    </div>
  </Router>
);

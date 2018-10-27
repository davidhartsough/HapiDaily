import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";

const Home = ({ auth }) => (
  <div>
    {isLoaded(auth) ? (
      isEmpty(auth) ? (
        <Redirect to="/sign-in" />
      ) : (
        <h1>hello {auth.email}</h1>
      )
    ) : (
      <div style={{ padding: "2rem 0" }}>
        <h1 style={{ textAlign: "center" }}>__TITLE__</h1>
        <p style={{ textAlign: "center" }}>Loading...</p>
      </div>
    )}
  </div>
);

export default connect(({ firebase: { auth } }) => ({ auth }))(Home);

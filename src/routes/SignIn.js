import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const SignIn = ({ auth }) => (
  <div style={{ padding: "2rem 0" }}>
    <h1 style={{ textAlign: "center" }}>__TITLE__</h1>
    {isLoaded(auth) ? (
      isEmpty(auth) ? (
        <StyledFirebaseAuth
          uiConfig={{
            signInSuccessUrl: "/",
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
          }}
          firebaseAuth={firebase.auth()}
        />
      ) : (
        <Redirect to="/" />
      )
    ) : (
      <p style={{ textAlign: "center" }}>Loading...</p>
    )}
  </div>
);

export default connect(({ firebase: { auth } }) => ({ auth }))(SignIn);

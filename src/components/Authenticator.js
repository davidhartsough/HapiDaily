import React from "react";
import { isLoaded, isEmpty } from "react-redux-firebase";
import Loading from "./Loading";
import SignIn from "./SignIn";
import Routes from "../routes";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

const Authenticator = ({ auth, profile, firestore, children }) => {
  if (isLoaded(auth)) {
    if (isEmpty(auth)) {
      return <SignIn />;
    } else {
      if (isLoaded(profile)) {
        if (isEmpty(profile)) {
          firestore
            .collection("users")
            .doc(auth.uid)
            .set({
              name: auth.displayName
            });
          return <Loading />;
        } else {
          return <Routes uid={auth.uid} />;
        }
      } else {
        return <Loading />;
      }
    }
  } else {
    return <Loading />;
  }
};

export default connect(({ firebase: { auth, profile } }) => ({
  auth,
  profile
}))(withFirestore(Authenticator));

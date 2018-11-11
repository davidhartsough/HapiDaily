import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const styles = {
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  container: {
    minHeight: 166
  },
  title: {
    textAlign: "center"
  },
  smallcaps: {
    fontVariant: "small-caps"
  }
};

const SignIn = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom className={classes.title}>
        H<span className={classes.smallcaps}>api</span>
        Daily
      </Typography>
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
    </div>
  </div>
);

export default withStyles(styles)(SignIn);

import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    textAlign: "center",
    padding: "4rem"
  },
  text: {
    fontSize: 18
  }
};

const EmptyState = ({ text, classes }) => (
  <div className={classes.root}>
    <div id="background">
      <div id="sky" />
      <div id="sun">
        <div id="sunrise" />
        <div id="reflection" />
      </div>
      <div id="ocean" />
    </div>
    <Typography variant="h5" className={classes.text} gutterBottom>
      {text}
    </Typography>
  </div>
);

export default withStyles(styles)(EmptyState);

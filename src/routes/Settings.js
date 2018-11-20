import React from 'react';
import { withFirebase } from 'react-redux-firebase';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = {
  root: {
    padding: 24,
  },
  center: {
    textAlign: 'center',
  },
  logout: {
    marginTop: 16,
  },
};

const Settings = ({ name, firebase, classes }) => {
  const logout = () => firebase.logout();
  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom>
        Account
      </Typography>
      <Typography variant="body1" gutterBottom>
        Currently logged in as:
        {` ${name}`}
      </Typography>
      <div className={classes.center}>
        <Button className={classes.logout} variant="outlined" onClick={logout}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default connect(({ firebase }) => ({
  name: firebase.auth.displayName,
}))(withFirebase(withStyles(styles)(Settings)));

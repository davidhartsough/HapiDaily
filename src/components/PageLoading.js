import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    textAlign: 'center',
    padding: '3rem',
  },
};

const PageLoading = ({ classes }) => (
  <div className={classes.root}>
    <CircularProgress />
  </div>
);

export default withStyles(styles)(PageLoading);

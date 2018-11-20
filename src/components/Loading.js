import React from 'react';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  container: {
    minHeight: 166,
  },
  smallcaps: {
    fontVariant: 'small-caps',
  },
};

const Loading = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        H
        <span className={classes.smallcaps}>api</span>
        Daily
      </Typography>
      <CircularProgress />
    </div>
  </div>
);

export default withStyles(styles)(Loading);

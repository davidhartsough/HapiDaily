import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    textAlign: 'center',
    padding: '3rem',
  },
};

const EmptyState = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="body1" gutterBottom>
      Add people to include them in your goals, and use this list to see how many times you&apos;ve
      had a positive impact on them.
    </Typography>
  </div>
);

export default withStyles(styles)(EmptyState);

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
      Here you&apos;ll see a list of your completed goals, but it looks like you haven&apos;t
      completed any just yet. (That&apos;s okay. I know you will soon!)
    </Typography>
  </div>
);

export default withStyles(styles)(EmptyState);

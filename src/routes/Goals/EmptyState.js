import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  card: {
    margin: 8,
  },
  emptyState: {
    paddingTop: 24,
    textAlign: 'center',
  },
  emptyStateBtn: {
    marginLeft: 8,
    marginRight: 8,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 24,
      marginRight: 24,
    },
  },
});

const EmptyState = ({ classes, onCreate, onGenerate }) => (
  <Card className={classes.card}>
    <CardContent className={classes.emptyState}>
      <Button color="primary" onClick={onCreate} className={classes.emptyStateBtn}>
        Create
      </Button>
      <Button onClick={onGenerate} className={classes.emptyStateBtn}>
        Generate
      </Button>
    </CardContent>
  </Card>
);

export default withStyles(styles, { withTheme: true })(EmptyState);

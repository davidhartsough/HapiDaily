import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  card: {
    margin: 8,
  },
};

const GoalCard = ({
  classes, endGoal, onComplete, onEdit,
}) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography variant="body1" component="p">
        {endGoal}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary" onClick={onComplete}>
        Mark as done
      </Button>
      <Button size="small" onClick={onEdit}>
        Edit
      </Button>
    </CardActions>
  </Card>
);

export default withStyles(styles)(GoalCard);

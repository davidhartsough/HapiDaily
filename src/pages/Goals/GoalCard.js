import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    marginBottom: 24
  }
};

class GoalCard extends React.PureComponent {
  complete = () => {
    const { index, complete } = this.props;
    complete(index);
  };

  edit = () => {
    const { index, edit } = this.props;
    edit(index);
  };

  render() {
    const { endGoal, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="body1">{endGoal}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.complete}>
            Mark as done
          </Button>
          <Button size="small" onClick={this.edit}>
            Edit
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(GoalCard);

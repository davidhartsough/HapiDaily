import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EmptyState from "../../components/EmptyState";
import GoalList from "../../constants/goals";
import GoalCard from "./GoalCard";
import GoalDialog from "./GoalDialog";

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const getEndGoal = item => item.goal.replace("someone", item.person);

const styles = theme => ({
  cards: {
    padding: 24,
    maxWidth: 688,
    margin: "auto",
    marginBottom: 48
  },
  card: {
    marginBottom: 24
  },
  prompt: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      position: "fixed",
      fontSize: 18,
      right: 130,
      bottom: 72
    }
  },
  fab: {
    position: "fixed",
    bottom: 96,
    right: 40,
    [theme.breakpoints.up("sm")]: {
      right: 56,
      bottom: 56
    }
  }
});

class GoalsPage extends React.Component {
  state = {
    isCool: JSON.parse(window.localStorage.getItem("isCool")) || false,
    open: false,
    index: 0
  };

  complete = index => {
    const { goals, createImpact, deleteGoal } = this.props;
    createImpact(getEndGoal(goals[index]));
    deleteGoal(index);
  };

  edit = index => {
    this.setState({ index, open: true });
  };

  saveEdit = (index, goal, person) => {
    this.props.updateGoal(index, goal, person);
    this.close();
  };

  close = () => {
    this.setState({ open: false });
  };

  createNewGoal = () => {
    if (!this.state.isCool) {
      window.localStorage.setItem("isCool", JSON.stringify(true));
      this.setState({ isCool: true });
    }
    const { people, createGoal } = this.props;
    const person = people.length ? getRandomItem(people) : "someone";
    createGoal(getRandomItem(GoalList), person);
  };

  createNewPerson = name => {
    this.props.createPerson(name);
  };

  render() {
    const { goals, people, createPerson, classes } = this.props;
    const { open, index } = this.state;
    return (
      <div>
        {!!goals.length &&
          !!goals[index] && (
            <GoalDialog
              open={open}
              close={this.close}
              index={index}
              goal={goals[index].goal}
              person={goals[index].person}
              goalList={GoalList}
              people={people}
              save={this.saveEdit}
              createPerson={createPerson}
            />
          )}
        {goals.length ? (
          <div className={classes.cards}>
            {goals.map((goal, index) => (
              <GoalCard
                key={`${goal.goal}-${goal.person}-${index}`}
                index={index}
                endGoal={getEndGoal(goal)}
                complete={this.complete}
                edit={this.edit}
              />
            ))}
          </div>
        ) : this.state.isCool ? (
          <EmptyState text="Nice! How about another goal?" />
        ) : (
          <>
            <EmptyState text="Welcome. When you create goals, you'll see them here." />
            <div className={classes.prompt}>Create your first goal:</div>
          </>
        )}
        {goals.length < 3 && (
          <Fab
            color="primary"
            aria-label="Add"
            className={classes.fab}
            onClick={this.createNewGoal}
          >
            <AddIcon />
          </Fab>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(GoalsPage);

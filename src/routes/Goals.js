import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FormHelperText from "@material-ui/core/FormHelperText";
import CreatableSelect from "react-select/lib/Creatable";
import Select from "react-select";
import dailies from "../store/dailies";

const people = [
  "someone",
  "Steven Stevens",
  "Owen Owens",
  "Benjamin Franklin",
  "George Washington"
];

const createOption = option => ({
  label: option,
  value: option
});

const createOptions = optionArray => {
  return optionArray.map(option => createOption(option));
};

const selectStyles = {
  menu: styles => ({
    ...styles,
    margin: 0
  })
};

const goalStyles = theme => ({
  card: {
    margin: 8,
    overflow: "visible"
  },
  title: {
    fontSize: 14
  },
  select: {
    marginTop: 8,
    marginBottom: 16
  },
  creatableSelect: {
    marginTop: 16
  },
  formItem: {
    marginTop: 8,
    marginBottom: 8,
    width: "100%"
  },
  emptyState: {
    paddingTop: 24,
    textAlign: "center"
  },
  emptyStateBtn: {
    marginLeft: 8,
    marginRight: 8,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 24,
      marginRight: 24
    }
  }
});

const someoneOption = createOption("someone");

const emptyGoal = {
  goal: createOption(dailies[Math.floor(Math.random() * dailies.length)]),
  person: someoneOption
};

class Goal extends React.Component {
  state = {
    mode: "empty",
    goal: emptyGoal,
    goalOptions: createOptions(dailies),
    peopleOptions: createOptions(people),
    isLoading: false
  };

  generateRandomGoal = () => {
    const { goalOptions, peopleOptions } = this.state;
    return {
      goal: goalOptions[Math.floor(Math.random() * goalOptions.length)],
      person: peopleOptions[Math.floor(Math.random() * peopleOptions.length)]
    };
  };

  switchToCreate = () => {
    this.setState({ mode: "create" });
  };

  generateNewGoal = () => {
    this.setState({ mode: "goal", goal: this.generateRandomGoal() });
  };

  save = () => {
    this.setState({ mode: "goal" });
  };

  complete = () => {
    this.setState({ mode: "empty", goal: emptyGoal });
  };

  edit = () => {
    this.setState({ mode: "create" });
  };

  handleChangeGoal = newValue => {
    this.setState({
      goal: {
        goal: newValue,
        person: this.state.goal.person
      }
    });
  };

  handleChangePerson = newValue => {
    this.setState({
      goal: {
        goal: this.state.goal.goal,
        person: newValue
      }
    });
  };

  handleGoalChange = ({ target }) => {
    this.setState({
      goal: {
        goal: target.value,
        person: this.state.goal.person
      }
    });
  };

  handleGoalCreate = newGoal => {
    this.setState({
      goalOptions: [...this.state.goalOptions, createOption(newGoal)]
    });
  };

  handlePersonChange = ({ target }) => {
    this.setState({
      goal: {
        goal: this.state.goal.goal,
        person: target.value
      }
    });
  };

  handlePersonCreate = newPerson => {
    //this.setState({ isLoading: true });
    const newPersonOption = createOption(newPerson);
    this.setState({
      peopleOptions: [...this.state.peopleOptions, newPersonOption],
      goal: {
        goal: this.state.goal.goal,
        person: newPersonOption
      }
    });
  };

  validateNewPerson = newPerson => {
    return newPerson.length > 2;
  };

  randomize = () => {
    this.setState({ goal: this.generateRandomGoal() });
  };

  render() {
    const { classes } = this.props;
    const { mode, goal, goalOptions, peopleOptions, isLoading } = this.state;
    switch (mode) {
      case "empty":
        return (
          <Card className={classes.card}>
            <CardContent className={classes.emptyState}>
              <Button
                color="primary"
                onClick={this.switchToCreate}
                className={classes.emptyStateBtn}
              >
                Create
              </Button>
              <Button
                onClick={this.generateNewGoal}
                className={classes.emptyStateBtn}
              >
                Generate
              </Button>
            </CardContent>
          </Card>
        );
      case "create":
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className={classes.title}
                gutterBottom
              >
                Choose a goal:
              </Typography>
              <div className={classes.select}>
                <Select
                  styles={selectStyles}
                  isSearchable
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  onChange={this.handleChangeGoal}
                  onCreateOption={this.handleGoalCreate}
                  options={goalOptions}
                  value={goal.goal}
                  name="goal"
                  label="Choose a goal"
                  maxMenuHeight={160}
                  placeholder="Select a goal..."
                />
                <FormHelperText>Search for ideas and keywords</FormHelperText>
              </div>
              <div className={classes.creatableSelect}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  component="p"
                  className={classes.title}
                  gutterBottom
                >
                  Choose a person:
                </Typography>
                <CreatableSelect
                  styles={selectStyles}
                  isDisabled={isLoading}
                  isLoading={isLoading}
                  onChange={this.handleChangePerson}
                  onCreateOption={this.handlePersonCreate}
                  options={peopleOptions}
                  value={goal.person}
                  name="person"
                  label="Select a person"
                  maxMenuHeight={160}
                  placeholder="Select a person..."
                  isValidNewOption={this.validateNewPerson}
                />
                <FormHelperText>
                  Leave as "someone" if you don't want to pick a person just yet
                </FormHelperText>
              </div>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={this.save}
                disabled={isLoading}
              >
                Save
              </Button>
              <Button size="small" onClick={this.randomize}>
                Randomize
              </Button>
            </CardActions>
          </Card>
        );
      default:
        return (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="body1" component="p">
                {goal.goal.label.replace("someone", goal.person.label)}
              </Typography>
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
}

const GoalWithStyles = withStyles(goalStyles, { withTheme: true })(Goal);

export default () => (
  <div>
    <GoalWithStyles />
    <GoalWithStyles />
    <GoalWithStyles />
  </div>
);

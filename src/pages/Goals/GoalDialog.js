import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import CreatableSelect from "react-select/lib/Creatable";
import Select from "react-select";
import Modal from "../../components/Modal";

const createOption = option => ({
  label: option,
  value: option
});

const createOptions = optionArray =>
  optionArray.map(option => createOption(option));

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const shuffleArray = array => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const selectStyles = {
  menu: styles => ({
    ...styles,
    margin: 0
  })
};

const styles = {
  selection: {
    position: "relative",
    marginBottom: 32,
    minHeight: 48
  },
  select: {
    position: "absolute",
    width: "100%"
  }
};

class GoalDialog extends React.Component {
  state = {
    goal: "",
    person: "",
    goals: []
  };

  updateState = () => {
    const { goal, person, goalList } = this.props;
    this.setState({
      goal,
      person,
      goals: shuffleArray(goalList)
    });
  };

  selectGoal = ({ value }) => {
    this.setState({ goal: value });
  };

  selectPerson = ({ value }) => {
    this.setState({ person: value });
  };

  save = () => {
    const { save, index } = this.props;
    const { goal, person } = this.state;
    save(index, goal, person);
  };

  handlePersonCreate = name => {
    this.props.createPerson(name);
    this.setState({ person: name });
  };

  validateNewPerson = name => name.length > 2;

  formatCreateLabel = name => `Add "${name}"`;

  randomize = () => {
    const { goalList, people } = this.props;
    this.setState({
      goal: getRandomItem(goalList),
      person: getRandomItem(people)
    });
  };

  render() {
    const { open, close, people, classes } = this.props;
    const { goal, person, goals } = this.state;
    return (
      <Modal
        open={open}
        close={close}
        onEnter={this.updateState}
        title="Edit"
        maxWidth="sm"
        content={
          <div>
            <div className={classes.selection}>
              <Typography variant="body1" component="p" gutterBottom>
                Choose a goal:
              </Typography>
              <Select
                className={classes.select}
                styles={selectStyles}
                isSearchable
                onChange={this.selectGoal}
                options={createOptions(goals)}
                value={createOption(goal)}
                name="goal"
                label="Select a goal"
                maxMenuHeight={240}
                placeholder="Select a goal..."
                backspaceRemovesValue={false}
              />
            </div>
            <div className={classes.selection}>
              <Typography variant="body1" component="p" gutterBottom>
                Choose a person:
              </Typography>
              <CreatableSelect
                className={classes.select}
                styles={selectStyles}
                isSearchable
                onChange={this.selectPerson}
                options={createOptions(people)}
                value={createOption(person)}
                name="person"
                label="Select a person"
                maxMenuHeight={240}
                placeholder="Select a person..."
                backspaceRemovesValue={false}
                onCreateOption={this.handlePersonCreate}
                isValidNewOption={this.validateNewPerson}
                formatCreateLabel={this.formatCreateLabel}
              />
            </div>
          </div>
        }
        actions={
          <DialogActions>
            <Button onClick={close}>Cancel</Button>
            <Button onClick={this.randomize}>Randomize</Button>
            <Button onClick={this.save} color="primary">
              Save
            </Button>
          </DialogActions>
        }
      />
    );
  }
}

export default withStyles(styles)(GoalDialog);

import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import FormHelperText from '@material-ui/core/FormHelperText';
import CreatableSelect from 'react-select/lib/Creatable';
import Select from 'react-select';
import dailies from '../../store/dailies';

const createOption = option => ({
  label: option,
  value: option,
});

const createOptions = optionArray => optionArray.map(option => createOption(option));

const goalOptions = createOptions(dailies);

const createPersonOption = person => ({
  label: person.name,
  value: person.id,
});

const getPeopleOptions = people => people.map(person => createPersonOption(person));

const getRandomItem = array => array[Math.floor(Math.random() * array.length)];

const getRandomGoal = () => getRandomItem(goalOptions);

const selectStyles = {
  menu: styles => ({
    ...styles,
    margin: 0,
  }),
};

const styles = {
  card: {
    margin: 8,
    overflow: 'visible',
  },
  title: {
    fontSize: 14,
  },
  select: {
    marginTop: 8,
    marginBottom: 16,
  },
  creatableSelect: {
    marginTop: 16,
  },
  formItem: {
    marginTop: 8,
    marginBottom: 8,
    width: '100%',
  },
};

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGoal: createOption(props.currentGoal.goal),
      selectedPerson: createPersonOption({
        id: props.currentGoal.personId,
        name: props.currentGoal.personName,
      }),
      isLoading: false,
    };
  }

  save = () => {
    const { onSave } = this.props;
    const { selectedGoal, selectedPerson } = this.state;
    onSave({
      goal: selectedGoal.value,
      personName: selectedPerson.label,
      personId: selectedPerson.value,
    });
  };

  handleGoalChange = (selectedGoal) => {
    this.setState({ selectedGoal });
  };

  handlePersonChange = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  handlePersonCreate = (newPersonName) => {
    const { createNewPerson } = this.props;
    this.setState({ isLoading: true });
    createNewPerson(newPersonName).then((id) => {
      this.setState({
        isLoading: false,
        selectedPerson: {
          label: newPersonName,
          value: id,
        },
      });
    });
  };

  validateNewPerson = newPerson => newPerson.length > 2;

  randomize = () => {
    const { people } = this.props;
    this.setState({
      selectedGoal: getRandomGoal(),
      selectedPerson: createPersonOption(getRandomItem(people)),
    });
  };

  render() {
    const { classes, people } = this.props;
    const { selectedGoal, selectedPerson, isLoading } = this.state;
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
              onChange={this.handleGoalChange}
              options={goalOptions}
              value={selectedGoal}
              name="goal"
              label="Select a goal"
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
              onChange={this.handlePersonChange}
              onCreateOption={this.handlePersonCreate}
              options={getPeopleOptions(people)}
              value={selectedPerson}
              name="person"
              label="Select a person"
              maxMenuHeight={160}
              placeholder="Select a person..."
              isValidNewOption={this.validateNewPerson}
            />
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.save} disabled={isLoading}>
            Save
          </Button>
          <Button size="small" onClick={this.randomize}>
            Randomize
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Edit);

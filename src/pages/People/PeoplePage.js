import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EmptyState from "../../components/EmptyState";
import PeopleList from "./PeopleList";
import AddPersonDialog from "./AddPersonDialog";

const styles = theme => ({
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

class PeoplePage extends React.Component {
  state = {
    open: false
  };

  handleFabClick = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  save = name => {
    this.props.createPerson(name);
    this.setState({ open: false });
  };

  render() {
    const { people, classes, updatePerson, deletePerson } = this.props;
    const { open } = this.state;
    return (
      <div>
        {people.length ? (
          <PeopleList
            people={people}
            updatePerson={updatePerson}
            deletePerson={deletePerson}
          />
        ) : (
          <EmptyState text="When you add people to include in your goals, you'll see them here." />
        )}
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={this.handleFabClick}
        >
          <AddIcon />
        </Fab>
        <AddPersonDialog open={open} close={this.close} save={this.save} />
      </div>
    );
  }
}

export default withStyles(styles)(PeoplePage);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import PersonListItem from "./PersonListItem";
import EditPersonDialog from "./EditPersonDialog";

const peopleSort = (a, b) => a.localeCompare(b, { sensitivity: "base" });

const styles = theme => ({
  list: {
    maxWidth: 640,
    minWidth: 300,
    margin: "auto",
    marginBottom: 64,
    backgroundColor: "rgba(255,255,255,0.9)",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "rgba(255,255,255,0.8)"
    }
  },
  fab: {
    position: "fixed",
    bottom: 96,
    right: 56,
    [theme.breakpoints.up("sm")]: {
      bottom: 56
    }
  }
});

class PeopleList extends React.Component {
  state = {
    index: 0,
    name: "",
    open: false
  };

  close = () => {
    this.setState({ open: false });
  };

  save = name => {
    this.props.updatePerson(this.state.index, name);
    this.setState({ index: 0, open: false });
  };

  handleDelete = () => {
    this.props.deletePerson(this.state.index);
    this.setState({ index: 0, open: false });
  };

  handlePersonClick = (index, name) => {
    this.setState({ index, name, open: true });
  };

  render() {
    const { people, classes } = this.props;
    const { open, name } = this.state;
    return (
      <div>
        <List className={classes.list}>
          {people.sort(peopleSort).map((person, index) => (
            <PersonListItem
              key={`${person}-${index}`}
              index={index}
              item={person}
              onClick={this.handlePersonClick}
            />
          ))}
        </List>
        <EditPersonDialog
          name={name}
          open={open}
          close={this.close}
          handleDelete={this.handleDelete}
          save={this.save}
        />
      </div>
    );
  }
}

export default withStyles(styles)(PeopleList);

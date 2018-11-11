import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const styles = theme => ({
  root: {
    minHeight: "calc(100vh - 56px)",
    [theme.breakpoints.up("sm")]: {
      minHeight: "calc(100vh - 100px)"
    }
  },
  cellHead: {
    fontSize: "0.8rem"
  },
  cell: {
    fontSize: "1rem"
  },
  fab: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
});

class People extends React.Component {
  state = {
    order: "desc",
    orderBy: "impacts",
    open: false,
    name: ""
  };

  sortByName = () => {
    const order =
      this.state.orderBy === "name" && this.state.order === "desc"
        ? "asc"
        : "desc";
    this.setState({ order, orderBy: "name" });
  };
  sortByNumber = () => {
    const order =
      this.state.orderBy === "impacts" && this.state.order === "desc"
        ? "asc"
        : "desc";
    this.setState({ order, orderBy: "impacts" });
  };

  add = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleNameChange = ({ target }) => {
    this.setState({
      name: target.value
    });
  };

  handleSave = () => {
    if (this.state.name.length > 2) {
      this.props.firestore
        .collection("users")
        .doc(this.props.uid)
        .collection("people")
        .add({
          name: this.state.name,
          impacts: 0
        });
      this.setState({
        open: false,
        name: ""
      });
    }
  };

  handleKeyDown = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleSave();
    }
  };

  render() {
    const { people, classes } = this.props;
    const { order, orderBy } = this.state;
    return (
      <div className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sortDirection={orderBy === "name" ? order : false}
                className={classes.cellHead}
              >
                <Tooltip title="Sort" placement="bottom-start">
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={order}
                    onClick={this.sortByName}
                  >
                    Name
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell
                sortDirection={orderBy === "impacts" ? order : false}
                numeric
                className={classes.cellHead}
              >
                <Tooltip title="Sort" placement="bottom-end">
                  <TableSortLabel
                    active={orderBy === "impacts"}
                    direction={order}
                    onClick={this.sortByNumber}
                  >
                    Impacts
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(Object.values(people), getSorting(order, orderBy)).map(
              (person, index) => (
                <TableRow key={person.name + person.impacts + index}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.cell}
                  >
                    {person.name}
                  </TableCell>
                  <TableCell numeric className={classes.cell}>
                    {person.impacts}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
        <Button
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={this.add}
        >
          <AddIcon />
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Add a person</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              label="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
              onKeyDown={this.handleKeyDown}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={this.handleSave}
              color="primary"
              disabled={this.state.name.length < 3}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default compose(
  firestoreConnect(props => [`users/${props.uid}/people`]),
  connect((state, props) => ({
    people: state.firestore.data.users
      ? state.firestore.data.users[props.uid].people
      : {}
  })),
  withStyles(styles, { withTheme: true })
)(People);

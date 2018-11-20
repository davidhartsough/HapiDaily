import React from 'react';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import EmptyState from './EmptyState';
import TableRows from './TableRows';
import AddPersonDialog from './AddPersonDialog';

const styles = theme => ({
  root: {
    minHeight: 'calc(100vh - 56px)',
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 100px)',
    },
  },
  cellHead: {
    fontSize: '0.8rem',
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
});

class PeopleTable extends React.Component {
  state = {
    order: 'desc',
    orderBy: 'impacts',
    open: false,
  };

  sortByName = () => {
    const { orderBy, order } = this.state;
    const newOrder = orderBy === 'name' && order === 'desc' ? 'asc' : 'desc';
    this.setState({ order: newOrder, orderBy: 'name' });
  };

  sortByNumber = () => {
    const { orderBy, order } = this.state;
    const newOrder = orderBy === 'impacts' && order === 'desc' ? 'asc' : 'desc';
    this.setState({ order: newOrder, orderBy: 'impacts' });
  };

  add = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  savePerson = (name) => {
    const { firestore, uid } = this.props;
    firestore
      .collection('users')
      .doc(uid)
      .collection('people')
      .add({
        name,
        impacts: 0,
      });
    this.setState({
      open: false,
    });
  };

  render() {
    const { people, classes } = this.props;
    const { order, orderBy, open } = this.state;
    const addPersonFab = (
      <Button
        variant="fab"
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={this.add}
      >
        <AddIcon />
      </Button>
    );
    const addPersonDialog = (
      <AddPersonDialog open={open} close={this.close} save={this.savePerson} />
    );
    if (people.length) {
      return (
        <div className={classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell
                  sortDirection={orderBy === 'name' ? order : false}
                  className={classes.cellHead}
                >
                  <Tooltip title="Sort" placement="bottom-start">
                    <TableSortLabel
                      active={orderBy === 'name'}
                      direction={order}
                      onClick={this.sortByName}
                    >
                      Name
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell
                  sortDirection={orderBy === 'impacts' ? order : false}
                  numeric
                  className={classes.cellHead}
                >
                  <Tooltip title="Sort" placement="bottom-end">
                    <TableSortLabel
                      active={orderBy === 'impacts'}
                      direction={order}
                      onClick={this.sortByNumber}
                    >
                      Impacts
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableRows people={people} order={order} orderBy={orderBy} />
          </Table>
          {addPersonFab}
          {addPersonDialog}
        </div>
      );
    }
    return (
      <div className={classes.root}>
        <EmptyState />
        {addPersonFab}
        {addPersonDialog}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PeopleTable);

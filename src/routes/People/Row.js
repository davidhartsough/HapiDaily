import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  cell: {
    fontSize: '1rem',
  },
};

const Row = ({ classes, name, impacts }) => (
  <TableRow>
    <TableCell component="th" scope="row" className={classes.cell}>
      {name}
    </TableCell>
    <TableCell numeric className={classes.cell}>
      {impacts}
    </TableCell>
  </TableRow>
);

export default withStyles(styles)(Row);

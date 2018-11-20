import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import Row from './Row';

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
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const TableRows = ({ people, order, orderBy }) => (
  <TableBody>
    {stableSort(people, getSorting(order, orderBy)).map(person => (
      <Row key={person.id} name={person.name} impacts={person.impacts} />
    ))}
  </TableBody>
);

export default TableRows;

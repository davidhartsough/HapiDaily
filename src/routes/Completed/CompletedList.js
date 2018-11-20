import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EmptyState from './EmptyState';

const convertSeconds = (seconds) => {
  const date = new Date(seconds * 1000);
  return date.toLocaleDateString();
};

const Completed = ({ impacts }) => {
  if (impacts.length) {
    return (
      <List>
        {impacts.map(item => (
          <div key={item.id}>
            <ListItem>
              <ListItemText primary={item.endGoal} secondary={convertSeconds(item.date.seconds)} />
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    );
  }
  return <EmptyState />;
};

export default Completed;

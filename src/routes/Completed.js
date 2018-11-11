import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
// import { compose } from "redux";
// import { connect } from "react-redux";
// import { firestoreConnect } from "react-redux-firebase";

const data = [
  {
    id: "987",
    goal: "do the tinhg",
    date: "May 23, 2018"
  },
  {
    id: "789",
    goal: "thangalangathonament wow really long thing so cool great job thanks",
    date: "March 31, 2018"
  }
];

const Completed = () => (
  <List>
    {data.map(item => (
      <div key={item.id}>
        <ListItem>
          <ListItemText primary={item.goal} secondary={item.date} />
        </ListItem>
        <Divider />
      </div>
    ))}
  </List>
);

/*
export default compose(
 firestoreConnect((props) => [
   { collection: 'users', doc: props.userId }
 ]),
 connect(({ firestore: { ordered } }, props) => ({
   todos: ordered.todos && ordered.todos[todoId]
 }))
)(Completed);
*/
export default Completed;

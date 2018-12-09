import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class PersonListItem extends React.PureComponent {
  handleClick = () => {
    const { index, item, onClick } = this.props;
    onClick(index, item);
  };

  render() {
    const { item } = this.props;
    return (
      <ListItem button onClick={this.handleClick}>
        <ListItemText primary={item} />
      </ListItem>
    );
  }
}

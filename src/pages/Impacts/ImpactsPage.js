import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import EmptyState from "../../components/EmptyState";

const impactsSort = (a, b) => b.date - a.date;

const getDate = milliseconds => new Date(milliseconds).toLocaleDateString();

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
  }
});

const ImpactsPage = ({ impacts, classes }) => {
  if (impacts.length) {
    return (
      <div>
        <List className={classes.list}>
          {impacts.sort(impactsSort).map(item => (
            <ListItem key={`${item.impact}-${item.date}`}>
              <ListItemText
                primary={item.impact}
                secondary={getDate(item.date)}
              />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
  return <EmptyState text="When you complete goals, you'll see them here." />;
};

export default withStyles(styles)(ImpactsPage);

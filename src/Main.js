import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PeopleIcon from "@material-ui/icons/People";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import Pages from "./pages";

const styles = theme => ({
  title: {
    flexGrow: 1
  },
  smallcaps: {
    fontVariant: "small-caps"
  },
  tabs: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  tab: {
    minWidth: 120
  },
  content: {
    paddingTop: 56,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 72
    }
  },
  bottom: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0
  }
});

class Main extends React.Component {
  state = {
    tabIndex: 0
  };

  handleTabIndexChange = (event, value) => {
    this.setState({ tabIndex: value });
  };

  render() {
    const { classes } = this.props;
    const { tabIndex } = this.state;
    return (
      <div>
        <div className={classes.bar}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography
                className={classes.title}
                variant="h6"
                color="inherit"
              >
                H<span className={classes.smallcaps}>api</span>
                Daily
              </Typography>
              <div className={classes.tabs}>
                <Tabs value={tabIndex} onChange={this.handleTabIndexChange}>
                  <Tab
                    className={classes.tab}
                    label="Goals"
                    icon={
                      tabIndex === 0 ? (
                        <AddCircleIcon />
                      ) : (
                        <AddCircleOutlineIcon />
                      )
                    }
                  />
                  <Tab
                    className={classes.tab}
                    label="Impacts"
                    icon={
                      tabIndex === 1 ? (
                        <CheckCircleIcon />
                      ) : (
                        <CheckCircleOutlineIcon />
                      )
                    }
                  />
                  <Tab
                    className={classes.tab}
                    label="People"
                    icon={
                      tabIndex === 2 ? <PeopleIcon /> : <PeopleOutlineIcon />
                    }
                  />
                </Tabs>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        <div className={classes.content}>
          <Pages tabIndex={tabIndex} />
        </div>
        <div className={classes.bottom}>
          <Paper>
            <BottomNavigation
              value={tabIndex}
              onChange={this.handleTabIndexChange}
              showLabels
            >
              <BottomNavigationAction
                label="Goals"
                icon={
                  tabIndex === 0 ? <AddCircleIcon /> : <AddCircleOutlineIcon />
                }
              />
              <BottomNavigationAction
                label="Impacts"
                icon={
                  tabIndex === 1 ? (
                    <CheckCircleIcon />
                  ) : (
                    <CheckCircleOutlineIcon />
                  )
                }
              />
              <BottomNavigationAction
                label="People"
                icon={tabIndex === 2 ? <PeopleIcon /> : <PeopleOutlineIcon />}
              />
            </BottomNavigation>
          </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Main);

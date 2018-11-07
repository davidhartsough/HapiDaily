import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TodayIcon from "@material-ui/icons/Today";
import SettingsIcon from "@material-ui/icons/Settings";
import PeopleIcon from "@material-ui/icons/People";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    minHeight: 56,
    paddingLeft: 16,
    paddingRight: 16,
    [theme.breakpoints.up("sm")]: {
      minHeight: 64,
      paddingLeft: 24,
      paddingRight: 24
    }
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    position: "relative"
  },
  smallcaps: {
    fontVariant: "small-caps"
  },
  link: {
    textDecoration: "none"
  },
  activeLink: {
    backgroundColor: "#eee"
  },
  page: {
    margin: "0 auto",
    maxWidth: 640,
    [theme.breakpoints.up("sm")]: {
      padding: "0.25rem 0 2rem 0"
    }
  }
});

class Layout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  closeDrawer = () => {
    this.setState(state => ({ mobileOpen: false }));
  };

  render() {
    const path = window.location.pathname.substring(1);
    const pathName = path.charAt(0).toUpperCase() + path.substr(1);
    const { classes, children } = this.props;

    const drawer = (
      <div>
        <div className={classes.drawerHeader}>
          <Typography variant="h6" color="inherit" noWrap>
            H<span className={classes.smallcaps}>api</span>
            Daily
          </Typography>
        </div>
        <Divider />
        <List>
          <div onClick={this.closeDrawer}>
            <Link to="/goals" className={classes.link}>
              <ListItem
                button
                className={path === "goals" ? classes.activeLink : null}
              >
                <ListItemIcon>
                  <TodayIcon />
                </ListItemIcon>
                <ListItemText primary="Goals" />
              </ListItem>
            </Link>
            <Link to="/completed" className={classes.link}>
              <ListItem
                button
                className={path === "completed" ? classes.activeLink : null}
              >
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Completed" />
              </ListItem>
            </Link>
            <Link to="/people" className={classes.link}>
              <ListItem
                button
                className={path === "people" ? classes.activeLink : null}
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItem>
            </Link>
          </div>
        </List>
        <Divider />
        <List>
          <div onClick={this.closeDrawer}>
            <Link to="/settings" className={classes.link}>
              <ListItem
                button
                className={path === "settings" ? classes.activeLink : null}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </Link>
          </div>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {pathName}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
              ModalProps={{
                keepMounted: true
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className={classes.page}>{children}</div>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);

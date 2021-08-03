import React, { useState, useContext } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import "./sidebar.css";
import Modal from "../Modal/Modal";

// user icon
// import IconButton from '@material-ui/core/IconButton';   already declared
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../RoundContext";
import apiClient from "../../services/apiClient";
import { Button, Tooltip } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#32344A",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#32344A",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    backgroundColor: "#32344A",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#32344A",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor: "#32344A",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#32344A",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // modal function
  // modal functionality
  // const [selected, setSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = (text) => {
    setOpenModal(true);
    setOpenModal(text);
  };

  // USER ICON
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openUserIcon = Boolean(anchorEl);

  const navigate = useNavigate();
  const handleMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);

    // var title = document.querySelector("title");
    // title.innerText = "Focus Time";
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setUser({});
    // clear the token
    apiClient.setToken();
    // new page view of landing page
    navigate("/login");
    console.log("the user logged in is:", user);
  };
  function notAllowed(text) {
    // if a user is not logged in they don't have access to
    // todo or statistics
    if (text === "To-Do" && !user.email) {
      return true;
    } else if (text === "Statistics" && !user.email) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> background paper */}
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Welcome Back,
          </Typography>

          {/* USER ICON */}
          <div className={classes.userIcon}>
            <IconButton
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu open={openUserIcon} onClose={handleClose} anchorEl={anchorEl}>
              <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        PaperProps={{ elevation: 0 }}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open, //try implementing hover button with this?
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["To-Do", "Statistics", "Work Flow", "Settings", "About"].map(
            (text, index) => (
              <Tooltip
                arrow
                placement="top-start"
                title={
                  notAllowed(text) ? "Log in for access to this feature" : ""
                }
              >
                <span>
                  <ListItem
                    className={classes.listItems}
                    button
                    disabled={notAllowed(text)}
                    key={text}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <div>
                      <ListItemText
                        button
                        onClick={() => handleModalOpen(text)}
                        primary={text}
                      />
                    </div>
                  </ListItem>
                </span>
              </Tooltip>
            )
          )}
          <Modal openModal={openModal} setOpenModal={setOpenModal} />
        </List>
      </Drawer>
      {/* {displayed && (
          <div style={handleDrawerOpen}>
            Text that will appear when you hover over the button.
          </div>
        )} */}
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
      </main> */}
    </div>
  );
}

import React, { useState, useContext, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./sidebar.css";
import Modal from "../Modal/Modal";
import Icon from "./icon";
import CloseIcon from "@material-ui/icons/Close";

// user icon
// import IconButton from '@material-ui/core/IconButton';   already declared
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../RoundContext";
import apiClient from "../../services/apiClient";
import { Hidden, Tooltip } from "@material-ui/core";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#32344A",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  hide: {
    display: "none",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      backgroundColor: "#32344A",
    },
  },
  drawerPaper: {
    [theme.breakpoints.down("md")]: {
      width: drawerWidth - 10,
    },
    [theme.breakpoints.up("md")]: {
      width: drawerWidth - 10,
    },
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth + 20,
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
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  listIcons: {
    marginLeft: 10,
  },
  menu:{
    marginTop: 40,
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const { firstRegister, setFirstRegister, user, setUser } =
    useContext(UserContext);
  // modal function
  // modal functionality
  const [selectedModal, setSelectedModal] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = (text) => {
    setOpenModal(true);
    setSelectedModal(text);
    // setOpenModal(text);
  };

  // USER ICON
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openUserIcon = Boolean(anchorEl);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const navigate = useNavigate();
  const handleMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const openAboutModal = () => {
      if (firstRegister === true) {
        handleModalOpen("About");
      }
    };
    openAboutModal();
  }, [firstRegister]);

  const handleLogOut = () => {
    setUser({});
    // clear the token
    apiClient.setToken();
    //take user to landing page but they are now logged out
    navigate("/");
    console.log("the user logged in is:", user);
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  }

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
  const drawer = (
    <List>
      {["To-Do", "Statistics", "Settings", "About"].map((text, index) => (
        <Tooltip
          arrow
          placement="top-start"
          title={notAllowed(text) ? "Log in for access to this feature" : ""}
        >
          <span>
            <ListItem
              button
              onClick={() => handleModalOpen(text)}
              disabled={notAllowed(text)}
              key={text}
            >
              <ListItemIcon className={classes.listIcons}>
                <Icon index={index} />
              </ListItemIcon>
              <div>
                <ListItemText button primary={text} />
              </div>
            </ListItem>
          </span>
        </Tooltip>
      ))}
      <Modal
        selectedModal={selectedModal}
        setSelectedModal={setSelectedModal}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </List>
  );

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> background paper */}
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {/* USER ICON AND WELCOME MESSAGE */}
          <div className="welcome-back">
            <Typography variant="h6" noWrap>
              {user.email ? "Welcome Back, " + user.first_name : ""}
              <IconButton
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                open={openUserIcon}
                onClose={handleClose}
                anchorEl={anchorEl}
                className={classes.menu}
              >
                {user.email ? (
                  <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                ) : (
                  <div>
                       <MenuItem onClick={handleLogIn}>Log In</MenuItem>
                    <MenuItem onClick={handleRegister}>Register</MenuItem>
                  </div>
          
                )}
              </Menu>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            PaperProps={{ elevation: 0 }}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div className={classes.toolbar}>
              <IconButton
                onClick={handleDrawerToggle}
                className={classes.closeMenuButton}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <Divider />
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

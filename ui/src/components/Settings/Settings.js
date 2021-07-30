import React, { createContext, useContext, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Slider from "@material-ui/core/Slider";
import "./Settings.css";
import {
  Grid,
  IconButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import { SettingContext } from "../../RoundContext";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

export const userSettings = createContext();

const useStyles = makeStyles({
  timer: {
    fontSize: "20px",
    marginBottom: "5px",
  },
});

function valuetext(value) {
  return `${value}`;
}
// possibly should use an array to map through silders

export default function Settings() {
  const [darkTheme, setDarkTheme] = useState(true);
  const { shortBreak, setShortBreak } = useContext(SettingContext);
  const { longBreak, setLongBreak } = useContext(SettingContext);
  const { working, setWorking } = useContext(SettingContext);
  const [volume, setVolume] = useState(true);

  const handleShortChange = (event, newValue) => {
    setShortBreak(newValue);
    console.log("the short break:", shortBreak);
  };
  const handleLongChange = (event, newValue) => {
    setLongBreak(newValue);
    console.log("the long break:", longBreak);
  };
  const handleWorkChange = (event, newValue) => {
    setWorking(newValue);
    console.log("the working period:", working);
  };
  const handleDarkModeChange = (event) => {
    setDarkTheme(event.target.checked);
  };

  const classes = useStyles();
  return (
    <div className="settings">
      <div className="settings title">
        <h2>Settings</h2>
      </div>
      <div className="settings content">
        <Grid container spacing={1} justifyContent="flex-start">
          <Grid item className="timer">
            <Typography className={classes.timer}>Timer</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item className="work session duration">
            <Typography id="discrete-slider" gutterBottom>
              Work Session Duration
            </Typography>
            <Slider
              defaultValue={25}
              onChange={handleWorkChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={5}
              marks
              min={15}
              max={40}
            />
          </Grid>
          <Grid item className="long break duration">
            <Typography id="discrete-slider" gutterBottom>
              Short Break Duration
            </Typography>
            <Slider
              defaultValue={5}
              onChange={handleShortChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={3}
              max={20}
            />
          </Grid>
          <Grid item className="short break duration">
            <Typography id="discrete-slider" gutterBottom>
              Long Break Duration
            </Typography>
            <Slider
              defaultValue={40}
              onChange={handleLongChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={4}
              marks
              min={20}
              max={80}
            />
          </Grid>
        </Grid>
        <div
          className="dividerLine"
          style={{
            borderTop: "2px solid #fff ",
            marginTop: 20,
          }}
        ></div>
        {/* beginning of list */}
        <List className="settingSelectionList">
          <ListItem className="muteSection">
            <ListItemText primary="Mute" />
            <ListItemIcon>
              <IconButton aria-label="volume">
                {volume ? (
                  <VolumeUpIcon onClick={() => setVolume((sound) => !sound)} />
                ) : (
                  <VolumeOffIcon onClick={() => setVolume((sound) => !sound)} />
                )}
              </IconButton>
            </ListItemIcon>
          </ListItem>
          <ListItem className="darkModeSection">
            <ListItemText primary="Dark mode" />
            <ListItemSecondaryAction>
              <Switch checked={darkTheme} onChange={handleDarkModeChange} />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem className="messageSection">
            <ListItemText primary="Message" />
          </ListItem>
          <ListItem className="addBackground">
            <ListItemText primary="Add Background" />
          </ListItem>
        </List>
        {/* end of list  */}
      </div>
    </div>
  );
}

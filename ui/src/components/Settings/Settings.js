import React, { createContext, useContext, useState } from "react";
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
import { DarkModeContext, SettingContext } from "../../RoundContext";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";

// export const userSettings = createContext();

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
const workingPeriodMarks = [
  {
    value: 15,
    label: "15",
  },
  {
    value: 25,
    label: "25",
  },
  {
    value: 40,
    label: "40",
  },
];

const shortBreakPeriodMarks = [
  {
    value: 3,
    label: "3",
  },
  {
    value: 5,
    label: "5",
  },
  {
    value: 20,
    label: "20",
  },
];

const longBreakPeriodMarks = [
  {
    value: 20,
    label: "20",
  },
  {
    value: 40,
    label: "40",
  },
  {
    value: 80,
    label: "80",
  },
];

export default function Settings() {
  const { darkTheme, setDarkTheme } = useContext(DarkModeContext);
  const { shortBreak, setShortBreak } = useContext(SettingContext);
  const { longBreak, setLongBreak } = useContext(SettingContext);
  const { working, setWorking } = useContext(SettingContext);
  const {volume, setVolume} = useContext(SettingContext);

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
              defaultValue={working}
              onChange={handleWorkChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={5}
              marks={workingPeriodMarks}
              min={15}
              max={40}
            />
          </Grid>
          <Grid item className="long break duration">
            <Typography id="discrete-slider" gutterBottom>
              Short Break Duration
            </Typography>
            <Slider
              defaultValue={shortBreak}
              onChange={handleShortChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks={shortBreakPeriodMarks}
              min={3}
              max={20}
            />
          </Grid>
          <Grid item className="short break duration">
            <Typography id="discrete-slider" gutterBottom>
              Long Break Duration
            </Typography>
            <Slider
              defaultValue={longBreak}
              onChange={handleLongChange}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={4}
              marks={longBreakPeriodMarks}
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
        </List>
        {/* end of list  */}
      </div>
    </div>
  );
}

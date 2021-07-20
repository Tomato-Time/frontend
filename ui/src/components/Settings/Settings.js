import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Slider from "@material-ui/core/Slider";
import "./Settings.css";
import {
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import VolumeOffOutlinedIcon from "@material-ui/icons/VolumeOffOutlined";
import Switch from "@material-ui/core/Switch";

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
// });

function valuetext(value) {
  return `${value}`;
}
// possibly should use an array to map through silders

export default function Settings() {
  //   const classes = useStyles();
  return (
    <div className="settings">
      <div className="settings title">
        <h1>Settings</h1>
      </div>
      <div className="settings content">
        <div className="settings subheader">
          <h3>Timer</h3>
          <div className="work session duration">
            <Typography id="discrete-slider" gutterBottom>
              Work Session Duration
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </div>
          <div className="long break duration">
            <Typography id="discrete-slider" gutterBottom>
              Long Break Duration
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </div>
          <div className="short break duration">
            <Typography id="discrete-slider" gutterBottom>
              Short Break Duration
            </Typography>
            <Slider
              defaultValue={30}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={110}
            />
          </div>
          <div
            className="dividerLine"
            style={{
              borderTop: "2px solid #fff ",
              marginTop: 20,
            }}
          ></div>
          {/* beginning of list */}
          <List>
            <ListItem className="muteSection">
              <ListItemText primary="Mute" />
              <ListItemIcon>
                <VolumeOffOutlinedIcon></VolumeOffOutlinedIcon>
              </ListItemIcon>
            </ListItem>
            <ListItem className="darkModeSection">
              <ListItemText primary="Dark mode" />
              <ListItemSecondaryAction>
                <Switch></Switch>
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
    </div>
  );
}

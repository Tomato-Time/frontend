import React from "react";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { Typography } from "@material-ui/core";
import "./aboutUs.css";

export default function DraggableDialog() {
  return (
    <div>
      <Typography>
        <div className="about-us-info">

            The Pomodoro Technique is a time management method that focuses on
            periods of focus with frequent short breaks in between.
            <br />
            <br />
            1. Get a to-do list and a timer.
            <br />
            2. Set your timer for 25 minutes, and focus on a single task until
            the timer rings.
            <br />
            3. When your round ends, you'll see the timer change color! 
            <br />
            4. Then enjoy a five-minute break.
            <br />
            5. After four rounds, take a longer, more restorative 15-30
            minute break.
            <br />
            <br />
            The technique works best when you: find small distractions derail
            the workday, have lots of open ended work that can take unlimited
            amounts of time, or enjoy a gamified goal-setting.
            <br />
            <br />

            <div className="bold">
            It's biggest strength is in it's simplicity! 🍅
            </div>
            
        </div>    
      </Typography>
    </div>
  );
}

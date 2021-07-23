import { CountdownCircleTimer } from "react-countdown-circle-timer";
import MiniDrawer from "../SideBar/sidebar";
import TimerIcons from "../TimerIcons/timerIcons";
import React, { useEffect, useState } from "react";
import "./timer.css";

export default function Timer() {
  // variables
  let duration = 5;
  let focusColors = [
    ["#33D2FF", 0.2],
    ["#3D68DE", 0.4],
    ["#9845E8", 0.4],
  ];
  let breakColors = [
    ["#FFD233", 0.2],
    ["#DEBB3D", 0.4],
    ["#E84F45", 0.4],
  ];
  const colorOptions = [focusColors, breakColors];
  let total_round = 4;
  // end of variables

  // start of state
  const [isPlaying, setIsPlaying] = useState(false);
  const [colorClock, setColorClock] = useState(colorOptions[0]);
  const [round, setRound] = useState(0);
  const [key, setKey] = useState(0);
  // end of useState

  // function to handle clicking play button
  const handleClick = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };
  // works as the effect of our event listener
  function timerUp() {
    console.log("the timer is up");
    setRound((prevRound) => prevRound + 1);
    console.log("round count is", round);
    setIsPlaying(false);
    setKey((prevKey) => prevKey + 1);
  }

  // function to properly format time
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60); //mm:ss format
    const seconds = remainingTime % 60;
    if (seconds < 10) {
      return (
        <div style={{ color: "white" }}>
          {minutes}:0{seconds}
        </div>
      );
    } else {
      return (
        <div style={{ color: "white" }}>
          {minutes}:{seconds}
        </div>
      );
    }
  };

  return (
    <div className="timerAndDrawer">
      <div className="App">
        <h1>{round % 2 === 0 ? "Focus" : "Break"}</h1>
        <h2>{Math.floor(round / 2)}/4 rounds complete </h2>
        <div className="timer-wrapper">
          {round % 2 === 0 ? (
            <CountdownCircleTimer
              isPlaying={isPlaying}
              key={key}
              duration={10}
              colors={focusColors}
              onComplete={() => {
                // do stuff here
                timerUp();
                return [false, 1000];
              }}
              isLinearGradient
              size={430}
              strokeWidth={30}
            >
              {/* this prop is for the time format */}
              {children}
            </CountdownCircleTimer>
          ) : (
            <CountdownCircleTimer
              isPlaying={isPlaying}
              key={key}
              duration={5}
              colors={breakColors}
              onComplete={() => {
                // do stuff here
                timerUp();
                return [false, 1000];
              }}
              isLinearGradient
              size={430}
              strokeWidth={30}
            >
              {/* this prop is for the time format */}
              {children}
            </CountdownCircleTimer>
          )}
        </div>
        <MiniDrawer />
      </div>
      <TimerIcons
        setKey={setKey}
        handleClick={handleClick}
        isPlaying={isPlaying}
        timerUp={timerUp}
      />
    </div>
  );
}

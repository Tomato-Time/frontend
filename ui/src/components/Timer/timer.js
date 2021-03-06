import { CountdownCircleTimer } from "react-countdown-circle-timer";
import TimerIcons from "../TimerIcons/timerIcons";
import React, { useContext, useEffect, useState } from "react";
import "./timer.css";
// import { duration } from "@material-ui/core";
import { RoundContext, SettingContext, UserContext } from "../../RoundContext";
import apiClient from "../../services/apiClient";
import useSound from "use-sound";
import sounds from "../../audio/sounds.mp3";
import Quotes from "../Quote/quote";

export default function Timer() {
  const { round, setRound } = useContext(RoundContext);
  const { user, setUser } = useContext(UserContext);
  const { shortBreak } = useContext(SettingContext);
  const { longBreak, setLongBreak } = useContext(SettingContext);
  const { working } = useContext(SettingContext);
  const [breakTime, setBreakTime] = useState(shortBreak);
  const { volume, setVolume } = useContext(SettingContext);

  //sound for timer
  const [play] = useSound(sounds);

  // useEffect(() => {
  //   silent()
  //   console.log("silence")
  // },[])

  // variables
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
  // end of variables

  // start of state
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  // end of useState

  // function to handle clicking play button
  const handleClick = () => {
    setIsPlaying((isPlaying) => !isPlaying);
  };
  // make an api call to add time to a user's account
  async function addToUserTime(working) {
    const { data } = await apiClient.addToUserTimeLog({
      minutes_logged: working,
      date_logged: new Date().toISOString().slice(0, 10),
      round_count: 1,
      user_id: "",
    });
    if (data) console.log(data);
  }
  // works as the effect of our event listener
  function timerUp() {
    setRound((prevRound) => prevRound + 1);
    // console.log("round count is", round);
    setIsPlaying(false);
    setKey((prevKey) => prevKey + 1);
    if (round % 2 === 0 && user.email) {
      addToUserTime(working);
      console.log("time was added");
    }

    if (volume === true) {
      play(); //plays audio at the end of every round
    }
  }

  // user skips to next round
  function nextRound() {
    setRound((prevRound) => prevRound + 1);
    // console.log("round count is", round);
    setIsPlaying(false);
    setKey((prevKey) => prevKey + 1);
  }

  // to set the correct break time
  useEffect(() => {
    if (round % 7 === 0) {
      setKey((prevKey) => prevKey + 1);
      setBreakTime(longBreak);
    } else {
      setKey((prevKey) => prevKey + 1);
      setBreakTime(shortBreak);
    }
  }, [longBreak, round, shortBreak]);

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

  // logging a user in to our app
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
    };
    const token = localStorage.getItem("web_app_token");
    console.log("the token:", token);
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, [setUser]);

  return (
    <div className="timerAndDrawer">
      <div className="App">
        <div className="quotes">
          <Quotes />
        </div>

        <div className="focus">{round % 2 === 0 ? "Focus" : "Break"}</div>

        {/* <h2>{Math.floor(round / 2) % 5}/4 rounds complete </h2> */}
        <div className="timer-wrapper">
          {round % 2 === 0 ? (
            <CountdownCircleTimer
              isPlaying={isPlaying}
              key={key}
              duration={working * 60}
              colors={focusColors}
              onComplete={() => {
                // do stuff here

                timerUp();
                return [false, 1000];
              }}
              isLinearGradient
              size={390}
              strokeWidth={30}
            >
              {/* this prop is for the time format */}
              {children}
            </CountdownCircleTimer>
          ) : (
            <CountdownCircleTimer
              isPlaying={isPlaying}
              key={key}
              duration={breakTime * 60}
              colors={breakColors}
              onComplete={() => {
                // do stuff here
                timerUp();
                return [false, 1000];
              }}
              isLinearGradient
              size={390}
              strokeWidth={30}
            >
              {/* this prop is for the time format */}
              {children}
            </CountdownCircleTimer>
          )}
        </div>
      </div>
      <TimerIcons
        setKey={setKey}
        handleClick={handleClick}
        isPlaying={isPlaying}
        timerUp={timerUp}
        nextRound={nextRound}
      />
    </div>
  );
}

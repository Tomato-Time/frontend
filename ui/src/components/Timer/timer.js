import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./timer.css";
import MiniDrawer from "../SideBar/sidebar";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too late...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

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
    // return `${minutes}:${seconds}`
    return (
      <div style={{ color: "white" }}>
        {minutes}:{seconds}
      </div>
    );
  }

  // const ariaLabel = ({color}) => {
  //     const co =
  // }
};

export default function Timer() {
  return (
    <div className="App">
      <h1>Make Today Count.</h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          //isPlaying
          duration={60}
          colors={[
            ["#33D2FF", 0.2],
            ["#3D68DE", 0.4],
            ["#9845E8", 0.4],
          ]}
          onComplete={() => [true, 1000]}
          isLinearGradient
          size={430}
          strokeWidth={30}
        >
          {/* this prop is for the time format */}
          {children}
          {/* {renderTime} */}
        </CountdownCircleTimer>
      </div>
      <MiniDrawer />
    </div>
  );
}

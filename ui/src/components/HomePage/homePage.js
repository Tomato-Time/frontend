import Timer from "../Timer/timer";
import MiniDrawer from "../SideBar/sidebar";
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";
import { RoundContext, SettingContext } from "../../RoundContext";
import { useState } from "react";

export default function HomePage() {
  const [round, setRound] = useState(0);
  //just to render the components for the home page

  // settings
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(40);
  const [working, setWorking] = useState(25);
  return (
    <div>
      <RoundContext.Provider value={{ round, setRound }}>
        <SettingContext.Provider
          value={{
            shortBreak,
            setShortBreak,
            longBreak,
            setLongBreak,
            working,
            setWorking,
          }}
        >
          <Timer />
          <MiniDrawer />
          <HorizontalLabelPositionBelowStepper />
        </SettingContext.Provider>
      </RoundContext.Provider>
    </div>
  );
}

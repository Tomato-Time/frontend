import Timer from "../Timer/timer";
import MiniDrawer from "../SideBar/sidebar";
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";
import { shortBreak } from "../Settings/SettingsContext";
export default function HomePage() {
  //just to render the components for the home page
  return (
    <div>
      <shortBreak.Provider value="hey girl">
        <Timer />
        <MiniDrawer />
        <HorizontalLabelPositionBelowStepper />
      </shortBreak.Provider>
    </div>
  );
}

import Timer from "../Timer/timer";
import MiniDrawer from "../SideBar/sidebar";
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";


export default function HomePage(){
    //just to render the components for the home page
    return(
        <div>
            <Timer/>
            <MiniDrawer/>
            <HorizontalLabelPositionBelowStepper/>
        </div>
    )
}
import Timer from "../Timer/timer";
import MiniDrawer from "../SideBar/sidebar";
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";
import { RoundContext } from "../../RoundContext";
import { useState } from "react";

export default function HomePage(){


    const [round, setRound] = useState(0);
    //just to render the components for the home page
    return(
        <div>

            <RoundContext.Provider value={{round, setRound}}>
                <Timer/>
                <MiniDrawer/>
                <HorizontalLabelPositionBelowStepper/>
            </RoundContext.Provider>
        </div>
    )
}
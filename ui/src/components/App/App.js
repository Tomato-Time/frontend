import SignInSide from "../LoginPage/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "../Timer/timer";
import MiniDrawer from '../SideBar/sidebar';
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";
import TimerIcons from "../TimerIcons/timerIcons";
import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Timer />} />
          <Route exact path="/register" element={<SignInSide />} />
          <Route exact path="/login" element={<h1>log in</h1>} />
        </Routes>
        {/* <MiniDrawer/> */}
        <HorizontalLabelPositionBelowStepper/>
      </BrowserRouter>

      
    </div>
  );
}

export default App;

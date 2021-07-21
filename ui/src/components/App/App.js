import SignInSide from "../LoginPage/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "../Timer/timer";
// import Settings from "../Settings/Settings";
import MiniDrawer from "../SideBar/sidebar";
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";
import "./App.css";
import Modal from "../Modal/Modal";
// import Todo from "../Todo/Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Timer />} />
          <Route exact path="/register" element={<SignInSide />} />
          <Route exact path="/login" element={<Modal />} />
          <Route exact path="/modalTest" element={<Modal />} />
        </Routes>
        {/* <MiniDrawer /> */}
        <HorizontalLabelPositionBelowStepper />
      </BrowserRouter>
    </div>
  );
}

export default App;

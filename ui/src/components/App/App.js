import SignInSide from "../LoginPage/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "../Timer/timer";
// import Settings from "../Settings/Settings";
import MiniDrawer from "../SideBar/sidebar";
import HorizontalLabelPositionBelowStepper from "../TimerProgress/timerProgress";
import "./App.css";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";
import { theme } from "../../index";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
// import Todo from "../Todo/Todo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Timer />} />
            <Route exact path="/register" element={<Registration />} />
            <Route exact path="/login" element={<SignInSide />} />
            <Route exact path="/modalTest" element={<Modal />} />
          </Routes>
          {/* <MiniDrawer/> */}
          <HorizontalLabelPositionBelowStepper />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

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
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
    };
    const token = localStorage.getItem("web_app_token");
    console.log("the token:", token);
    if (token) {
      apiClient.setToken(token);
      console.log("about to call fetchUser");
      fetchUser();
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Timer />} />
            <Route
              path="/register"
              element={<Registration user={user} setUser={setUser} />}
            />
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

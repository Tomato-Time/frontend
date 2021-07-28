import SignInSide from "../LoginPage/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Settings from "../Settings/Settings";
import "./App.css";
import Modal from "../Modal/Modal";
import Registration from "../Registration/Registration";
import HomePage from "../HomePage/homePage";
import { theme } from "../../index";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import Calendar from "../Calendar/calendar";

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
            <Route
              path="/register"
              element={<Registration user={user} setUser={setUser} />}
            />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<SignInSide />} />
            <Route exact path="/modalTest" element={<Modal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

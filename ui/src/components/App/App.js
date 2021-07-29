import SignInSide from "../LoginPage/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "../Registration/Registration";
import HomePage from "../HomePage/homePage";
import { theme } from "../../index";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
import { UserContext } from "../../RoundContext";

function App() {
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const { data } = await apiClient.fetchUserFromToken();
  //     if (data) setUser(data.user);
  //   };
  //   const token = localStorage.getItem("web_app_token");
  //   console.log("the token:", token);
  //   if (token) {
  //     apiClient.setToken(token);
  //     fetchUser();
  //   }
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <UserContext.Provider value={{ user, setUser }}>
            <Routes>
              <Route path="/register" element={<Registration />} />
              <Route exact path="/" element={<HomePage />} />
              <Route path="/login" element={<SignInSide />} />
            </Routes>
          </UserContext.Provider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

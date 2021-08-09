import SignInSide from "../LoginPage/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Registration from "../Registration/Registration";
import HomePage from "../HomePage/homePage";
import { theme } from "../../index";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { useState } from "react";
import { UserContext, DarkModeContext } from "../../RoundContext";
import ErrorPage from "../ErrorPage/errorPage";

function App() {
  const [user, setUser] = useState({});
  const [firstRegister, setFirstRegister] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);
  var title = document.querySelector("title");
  title.innerText = "Focus 4 You";
  

  
  return (
    <ThemeProvider darkTheme={darkTheme} theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <DarkModeContext.Provider value={{ darkTheme, setDarkTheme }}>
            <UserContext.Provider
              value={{ user, setUser, firstRegister, setFirstRegister }}
            >
              <Routes>
                <Route path="/register" element={<Registration />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<SignInSide />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </UserContext.Provider>
          </DarkModeContext.Provider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

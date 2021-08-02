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

function App() {
  const [user, setUser] = useState({});
  const [darkTheme, setDarkTheme] = useState(true);
  var title = document.querySelector("title");
  title.innerText = "Focus Time";
  return (
    <ThemeProvider darkTheme={darkTheme} theme={theme}>
      <CssBaseline />
      <div className="App">
        <BrowserRouter>
          <DarkModeContext.Provider value={{ darkTheme, setDarkTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
              <Routes>
                <Route path="/register" element={<Registration />} />
                <Route exact path="/" element={<HomePage />} />
                <Route path="/login" element={<SignInSide />} />
              </Routes>
            </UserContext.Provider>
          </DarkModeContext.Provider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

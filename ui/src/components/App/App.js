import SignInSide from "../LoginPage/loginForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timer from "../Timer/timer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* drawer goes here */}
        <Routes>
          <Route exact path="/" element={<Timer />} />
          <Route exact path="/register" element={<SignInSide />} />
          <Route exact path="/login" element={<h1>log in</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

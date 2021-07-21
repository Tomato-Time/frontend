// import LoginButton from './LoginPage/loginButton';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Header from './LoginPage/header';
// import LoginButton from './LoginPage/loginButton'
// import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import SignInSide from './LoginPage/loginForm';
import Registration from './Components/Registration';
import './App.css';
import { theme } from './index.js';
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'




function App() {


  // const theme = createMuiTheme({
  //     primary:{
  //       main: "#f00"
  //     }
  // })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
  <BrowserRouter>
  <Routes>
      <Route path="/login" element={<SignInSide />} />
    </Routes>
  <Routes>
    <Route path="/Registration" element={<Registration />} />
    </Routes>
  </BrowserRouter>
      
  
      
    </div>
    </ThemeProvider>
  );
}

export default App;

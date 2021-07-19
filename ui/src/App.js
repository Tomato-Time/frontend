import SignInSide from './LoginPage/loginForm';
import Timer from './Timer/timer';
import ResponsiveDrawer from './SideBar/sidebar';
import SideBar from './SideBar/sidebar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MiniDrawer from './SideBar/sidebar';
import './App.css';
// import { Switch } from '@material-ui/core';


function App() {

  return (
    <div className="App">      
      <Timer/>
      {/* <SignInSide/> */}
      {/* <ResponsiveDrawer/> */}

      
    <MiniDrawer/>
  
      
    </div>
  );
}

export default App;

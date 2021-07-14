// import LoginButton from './LoginPage/loginButton';
import Header from './LoginPage/header';
import LoginButton from './LoginPage/loginButton'
// import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import SignInSide from './LoginPage/loginForm';
import './App.css';


function App() {


  // const theme = createMuiTheme({
  //     primary:{
  //       main: "#f00"
  //     }
  // })


  return (
    <div className="App">
  
      
       {/* <Header></Header> */}
        {/* <LoginButton >

        </LoginButton> */}

      <SignInSide/>
    </div>
  );
}

export default App;

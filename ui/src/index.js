import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
     primary: {
        main: "#FFFFFF" // This is an orange looking color
               },
     secondary: {
        main: "#18A0FB" //Another orange-ish color
                }
           },
  root:{
    backgroundColor: '#fff'
  }         
});



ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>,
  document.getElementById('root')
);


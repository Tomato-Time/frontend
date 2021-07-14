import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'


const theme = createTheme({
  palette: {
     primary: {
        main: "#FFFFFF" 
               },
     secondary: {
        main: "#18A0FB"
                }
           },
     overrides: {
       MuiFilledInput: {
          root: {
            backgroundColor: 'white'   //filled inputs now are white at first
          
          } 

      }
    },   
     props: {
      MuiTextField: {      
        InputLabelProps: {
          shrink: true,         //removes the "Google" look aka when the words move to the top, it keeps the words at the top at all times
        }
      }
     },     
     shape: {
       borderRadius: 16        //changes border radius of everything 
     } 
    
     
});



ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>,
  document.getElementById('root')
);


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: "#FFFFFF",
  //   },
  //   secondary: {
  //     main: "#3D68DE",
  //   },
  // },

  //  backgroundColor:{
  //    main: "#292B3E"
  //  },

  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "white", //filled inputs now are white at first
      },
    },

    MuiCssBaseline: {
      "@global": {
        "@font-face": ['"Montserrat"'],
      },
    },
  },
  props: {
    MuiTextField: {
      InputLabelProps: {
        shrink: true, //removes the "Google" look aka when the words move to the top, it keeps the words at the top at all times
      },
    },
  },
  shape: {
    borderRadius: 8, //changes border radius of everything
  },

  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Montserrat"', //our font
    ].join(","),
  },

  palette: {
    background: {
      default: "#292B3E",
    },
    type: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);

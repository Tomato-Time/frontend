import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export const theme = createTheme({
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "white", //filled inputs now are white at first
      },
    },
  },

  shape: {
    borderRadius: 8, //changes border radius of everything
  },

  palette: {
    background: {
      // this changes the color of paper
      default: "#292B3E",
    },
    type: "dark",
  },
});

ReactDOM.render(
  // <ThemeProvider theme={theme}>
  <App />,
  // </ThemeProvider>
  document.getElementById("root")
);

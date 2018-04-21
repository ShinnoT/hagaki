import React, { Component } from "react";
import logo from "./logo.svg";
import "./style/main.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import BottomNavigationSimple from "./components/BottomNavigationSimple";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <Content />
          <BottomNavigationSimple />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

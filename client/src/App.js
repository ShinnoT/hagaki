import React, { Component } from "react";
import { Route } from "react-router-dom";
import logo from "./logo.svg";
import "./style/main.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import BottomNavigationSimple from "./components/BottomNavigationSimple";
import Letter from "./components/Letter";
import Messages from "./components/Messages";
import Tree from "./components/Tree";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <div className="Content">
            <Route exact path="/" component={Letter} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/tree" component={Tree} />
          </div>
          <BottomNavigationSimple />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

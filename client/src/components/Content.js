import React, { Component } from "react";
import Letter from "./Letter";
import Messages from "./Messages";
import { Route } from "react-router-dom";

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <Route exact path="/" component={Letter} />
        <Route exact path="/messages" component={Messages} />
      </div>
    );
  }
}

export default Content;

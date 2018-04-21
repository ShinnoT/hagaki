import React, { Component } from "react";
// import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";

const styles = {
  width: "100%",
  height: "100%"
};

class Letter extends Component {
  render() {
    return (
      <div className="Letter">
        <div className="hagaki">
          <textarea name="letter-text" id="letter-text" cols="30" rows="10" />
          <button className="send-button">
            <FontIcon className="material-icons" color="rgb(0, 191, 255)">
              send
            </FontIcon>
          </button>
        </div>
        {/* <div className="space" /> */}
      </div>
    );
  }
}

export default Letter;

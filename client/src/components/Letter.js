import React, { Component } from "react";
// import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import { Link } from "react-router-dom";

const styles = {
  width: "100%",
  height: "100%"
};

class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    this.loadingSet = this.loadingSet.bind(this);
  }

  loadingSet() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="Letter">
        <div className="hagaki">
          <textarea name="letter-text" id="letter-text" cols="30" rows="10" />
          <Link to="/messages" className="messages-link">
            <button className="send-button">
              <FontIcon className="material-icons" color="rgb(0, 191, 255)">
                send
              </FontIcon>
            </button>
          </Link>
        </div>
        {/* <div className="space" /> */}
      </div>
    );
  }
}

export default Letter;

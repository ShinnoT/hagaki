import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "material-ui-icons/School";
import BookmarkBorder from "material-ui-icons/BookmarkBorder";

class Tree extends Component {
  state = {
    timeline: []
  };
  componentDidMount() {
    const timeline = require("../db/timeline");
    this.setState({ timeline });
  }

  render() {
    return (
      <div style={{ height: "155vh", background: "rgba(200,200,200,0.1)" }}>
        <VerticalTimeline>
          {this.state.timeline.map(event => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={event.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<BookmarkBorder />}
            >
              <p>{event.content}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    );
  }
}

export default Tree;

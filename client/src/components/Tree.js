import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';

class Tree extends Component {
  state = {
    timeline: []
  }
  componentDidMount() {
    const timeline = require('../db/timeline')
    this.setState({ timeline })
  }

  render() {
    return <div style={{height: '100%'}}>
      <VerticalTimeline>
        {this.state.timeline.map((event) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={event.date}
            iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
            icon={<WorkIcon/>}
          >
            <p>
              {event.content}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>;
  }
}

export default Tree;

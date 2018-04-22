import React, { Component } from "react";

const messages = [
  {
    message: "I love you.",
    read: true,
    mine: true
  },
  {
    message: "I miss you.",
    read: true,
    mine: false
  },
  {
    message: "What happened?",
    read: true,
    mine: false
  },
  {
    message: "Somthing romantic here.",
    read: true,
    mine: true
  },
  {
    message: "Its not the same without you.",
    read: true,
    mine: false
  },
  {
    message: "Great, see you soon.",
    read: false,
    mine: true
  }
];

class Messages extends Component {
  constructor(props) {
    super(props);
    this.listMessages = this.listMessages.bind(this);
  }

  listMessages() {
    let counter = 999;
    return messages.map(msg => {
      counter += 1;
      if (msg.read && msg.mine) {
        return (
          <div className="msg mine-read" key={counter}>
            <h1 className="quote">
              <i className="fas fa-quote-left" /> {msg.message}
            </h1>
          </div>
        );
      } else if (msg.read && !msg.mine) {
        return (
          <div className="msg notmine-read" key={counter}>
            <h1 className="quote">
              <i className="fas fa-quote-left" /> {msg.message}
            </h1>
          </div>
        );
      } else if (!msg.read && msg.mine) {
        return (
          <div className="msg mine-unread" key={counter}>
            <h1 className="quote">
              <i className="fas fa-quote-left" /> {msg.message}
            </h1>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div className="Messages">
        <h2>Letters with John</h2>
        {this.listMessages()}
      </div>
    );
  }
}

export default Messages;

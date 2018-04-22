import React, { Component } from "react";

const kamoriver = require('./photos/kamoriver.jpg');
const kamosakura = require('./photos/kamosakura.jpg');
const torii = require ('./photos/torii.jpg');
const envelop = require ('./photos/envelop.png');
const mail = require ('./photos/mail.png');

class Memory extends Component {
  render() {
    return (
      <div className="Memory">
        <div className="Memory-pictures">
            <img src={kamoriver} alt="kamoriver"/>
            <img src={kamosakura} alt="kamosakura" className="big-pic"/>
            <img src={torii} alt="torii"/>
        </div>
        <div className="Email-list">
            <img src={envelop} alt="envelop"/>
            <img src={envelop} alt="envelop"/>
            <img src={envelop} alt="envelop"/>
            <img src={envelop} alt="envelop"/>
        </div>
      </div>
    );
  }
}

export default Memory;

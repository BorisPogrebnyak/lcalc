"use strict";

import React from "react";
import moment from "moment";

import "../styles.css";

class CurrentMoment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentMoment: moment() };
  }

  render() {
    return (
      <div>
        Сегодня: &nbsp;
        {this.state.currentMoment.format("DD.MM.YYYY HH:mm:ss")}
      </div>
    );
  }
}

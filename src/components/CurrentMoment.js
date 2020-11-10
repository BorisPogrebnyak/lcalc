"use strict";

import React from "react";
import moment from "moment";

import "../styles.css";

export class CurrentMoment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentMoment: moment() };
  }

  componentDidMount() {
    const self = this;

    this.interval = setInterval(() => {
      self.setState({ currentMoment: moment() });
    }, 1000);
  }

  render() {
    return (
      <div className="CurrentMoment">
        Сегодня: &nbsp;
        {this.state.currentMoment.format("DD.MM.YYYY HH:mm:ss")}
      </div>
    );
  }
}
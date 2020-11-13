// Спер и упростил отсюда:
// Как создать динамические часы на React?
// https://blog.myrusakov.ru/reactjs-comp.html

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
    setInterval(() => this.setState({ currentMoment: moment() }), 1000);
  }

  render() {
    return (
      <div className="CurrentMoment">
        Сегодня:&nbsp;
        {this.state.currentMoment.format("DD.MM.YYYY HH:mm:ss")}
      </div>
    );
  }
}
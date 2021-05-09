// Спер и упростил отсюда:
// Как создать динамические часы на React?
// https://blog.myrusakov.ru/reactjs-comp.html

import React from "react";
import dayjs from "dayjs";

export default class CurrentMoment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentMoment: dayjs() };
  }

  componentDidMount() {
    this.tick();
  }

  tick = () =>
    setInterval(() => this.setState({ currentMoment: dayjs() }), 1000);

  render() {
    return (
      <div className="CurrentMoment">
        Сегодня:&nbsp;
        {this.state.currentMoment.format("DD.MM.YYYY HH:mm:ss")}
      </div>
    );
  }
}

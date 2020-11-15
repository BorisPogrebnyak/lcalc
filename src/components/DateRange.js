'use strict';

import React, { Component } from 'react';

export default class DateRange extends Component {
  render() {
    const { from, to, changeDateRangeFrom, changeDateRangeTo } = this.props;
    return (
      <span>
        <label htmlFor='from'> за период: </label>
        <input
          type='date'
          id='from'
          value={from}
          max={to}
          onChange={event => changeDateRangeFrom(event.target.value)}
        />
        <label htmlFor='to'>&nbsp;÷&nbsp;</label>
        <input
          type='date'
          id='to'
          value={to}
          min={from}
          onChange={event => changeDateRangeTo(event.target.value)}
        />
      </span>
    );
  }
}
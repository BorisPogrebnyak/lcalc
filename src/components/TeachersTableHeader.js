'use strict';

import React, { Component } from 'react';

export default class TeachersTableHeader extends Component {
  // Прикрутить jQuery tablesorter.js - 3-и cсылки в index.html
  componentDidMount() {
    $("#contentTable").tablesorter();
  }

  render() {
    return (
      <thead>
        <tr>{this.props.teachersTableHeaders.map(title => <th key={title}>{title}</th>)}</tr>
      </thead>
    );
  }
}
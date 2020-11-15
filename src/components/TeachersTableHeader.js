'use strict';

import React, { Component } from 'react';

// import $ from "jquery";
import $ from "tablesorter";

export default class TeachersTableHeader extends Component {
  // Прикрутить jQuery tablesorter.js - 3-и cсылки в index.html

  componentDidMount() {
    console.log(typeof $("#contentTable").tablesorter);
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
import React, { Component } from 'react';

import $ from "jquery";
import tablesorter from "tablesorter";
import "../theme.blue.css";

export default class TeachersTableHeader extends Component {

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
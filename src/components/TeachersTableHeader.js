import React, { Component } from 'react';

import $ from 'jquery';
import 'tablesorter';

export default class TeachersTableHeader extends Component {

  componentDidMount() {
    $("#contentTable").tablesorter();
    // Обновление tablesorter в store/teachers/actions.js
  }

  render() {
    return (
      <thead>
        <tr>{this.props.teachersTableHeaders.map(title => <th key={title}>{title}</th>)}</tr>
      </thead>
    );
  }
}
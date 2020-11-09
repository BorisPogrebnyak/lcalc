'use strict';

import React, { Component } from 'react';

export default class Departments extends Component {
  render() {
    const { hasErrored, isLoading, departments, changeDepartmentID, defaultDepartment } = this.props;

    if (hasErrored) {
      return <p>Извините! При загрузке списка кафедр произошла ошибка</p>;
    }

    if (isLoading) {
      return <p>Загрузка списка кафедр …</p>;
    }

    return (
      <span>
        <label for='department'>Кафедра </label>
        <select
          id='department'
          onChange={event => changeDepartmentID(event.nativeEvent.path[0].value)}
        >
          {Array.from(departments, department =>
            department.attribs.value === defaultDepartment ?
              <option selected value={department.attribs.value}>{department.firstChild.data}</option> :
              <option value={department.attribs.value}>{department.firstChild.data}</option>)}
        </select>
      </span>
    );
  }
}
// Тырил отсюда:
// https://ru.reactjs.org/docs/forms.html
// https://question-it.com/questions/139777/kakovy-razlichija-mezhdu-defaultvalue-i-znacheniem-v-select

import React, { Component } from 'react';

export default class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.defaultDepartment
    }
  }

  // componentDidMount() {
  //   this.setState({ selected: this.props.defaultDepartment })
  // }

  render() {
    const { hasErrored, isLoading, departments, changeDepartmentID } = this.props;

    if (hasErrored) {
      return <p>Извините! При загрузке списка кафедр произошла ошибка</p>;
    }

    if (isLoading) {
      return <p>Загрузка списка кафедр …</p>;
    }

    return (
      <span>
        <label htmlFor='department'>Кафедра </label>
        <select
          id='department'
          value={this.state.selected}
          onChange={event => {
            changeDepartmentID(event.nativeEvent.path[0].value);
            this.setState({ selected: event.target.value });
          }}
        >
          {Array.from(departments, department =>
            <option
              key={department.firstChild.data}
              value={department.attribs.value}
            >
              {department.firstChild.data}
            </option>)}
        </select>
      </span>
    );
  }
}
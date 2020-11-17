import React, { Component } from 'react';

import TeachersTableHeader from './TeachersTableHeader';
import TeachersRowContainer from './TeachersRowContainer';

export default class TeachersTable extends Component {
  render() {
    const { URL, teachers, lessons } = this.props;
    const { hasErrored, isLoading, teachersForView, teachersTableHeaders } = teachers;

    if (hasErrored) {
      return <p>Извините! При загрузке списка преподавателей произошла ошибка</p>;
    }

    if (isLoading) {
      return <p>Загрузка списка преподавателей …</p>;
    } else {
      return (
        // <table id='contentTable' class='tablesorter-blue'>
        <table id='contentTable' className='tablesorter-blue'>
          <TeachersTableHeader teachersTableHeaders={teachersTableHeaders} />
          <tbody>
            {Array.from(teachersForView, teacher => <TeachersRowContainer URL={URL} teacher={teacher} key={teacher.name} lessons={lessons} />)}
          </tbody>
        </table>
      );
    }
  }
}
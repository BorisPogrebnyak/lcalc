import React from 'react';

import Spin from './Spin';

import TeachersTableHeader from './TeachersTableHeader';
import TeacherRow from './TeacherRow';

export default function TeachersTableOld({ teachers: { hasErrored, isLoading, teachersList, teachersTableHeaders }, lessons }) {
  return (
    <table id='contentTable' className='tablesorter-blue'>
      <TeachersTableHeader teachersTableHeaders={teachersTableHeaders} />
      <tbody>
        {/* <Spin isLoading={isLoading} /> */}
        {isLoading ?
          <tr><td colSpan='3' align='center' >
            Загрузка списка преподавателей …
          </td></tr> :
          hasErrored ?
            <tr><td colspan='3' align='center' >
              Извините! При загрузке списка преподавателей произошла ошибка.
            </td></tr> :
            teachersList.map(teacher => <TeacherRow key={teacher.id} teacher={teacher} lessons={lessons} />)
        }
      </tbody >
    </table >
  );
}
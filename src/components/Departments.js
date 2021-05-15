// Тырил отсюда:
// https://ru.reactjs.org/docs/forms.html
// https://question-it.com/questions/139777/kakovy-razlichija-mezhdu-defaultvalue-i-znacheniem-v-select

import React from 'react';

import Spin from './Spin';

export default function Departments({ hasErrored, isLoading, departments, defaultDepartmentId, changeDepartmentId }) {

  return (
    <span>
      <Spin isLoading={isLoading} />
      <label htmlFor='department'>Кафедра </label>
      <select
        id='department'
        value={defaultDepartmentId}
        onChange={event =>
          changeDepartmentId(event.nativeEvent.path[0].value)}
      >
        {isLoading ?
          <option>Загрузка списка кафедр …</option> :
          hasErrored ?
            <option>Извините! При загрузке списка кафедр произошла ошибка.</option> :
            departments.map(department =>
              <option
                key={Object.keys(department)[0]}
                value={Object.keys(department)[0]}
              >
                {department[Object.keys(department)[0]]}
              </option>)}
      </select>
    </span >
  );
}
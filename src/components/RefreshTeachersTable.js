import React from 'react';

export default function RefreshTeachersTable(props) {
  const { URL, fetchTeachers, lessons } = props;

  return (
    <input
      type='button'
      id='refreshTeachersTable'
      value='Обновить'
      onClick={() => fetchTeachers(URL, lessons)}
    />
  );
}
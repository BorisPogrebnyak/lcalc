import React from 'react';

export default function RefreshTeachersTable({ URL, fetchTeachers, lessons }) {

  return (
    <input
      type='button'
      id='refreshTeachersTable'
      value='Обновить'
      onClick={() => fetchTeachers(URL, lessons)}
    />
  );
}
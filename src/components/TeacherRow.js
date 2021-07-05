import React from "react";

import Spin from './Spin';

export default function TeacherRow({ teacher, lessons: { hasErrored, isLoading } }) {
  let row = []; // Cтрока таблицы - параметры препода

  if (hasErrored) {
    return <tr>Извините! При загрузке пар произошла ошибка.</tr>;
  }

  // Фрмирование массива параметров препода с уникальными ключами
  for (const property in teacher) {
    if (property !== `id`) { // Кроме кода преподавателя
      row.push(<td key={property}>{teacher[property]}</td>);
    }
  }

  // Возврат строки таблицы - одного препода
  return (
    <tr>
      {/* <Spin isLoading={isLoading} /> */}
      {row}
    </tr>
  );
}
import React, { Component } from "react";

export default class TeachersRow extends Component {
  render() {
    const { hasErrored, isLoading, teacher } = this.props;
    let row = []; // Cтрока таблицы - параметры препода

    if (hasErrored) {
      return <p>Извините! При загрузке пар произошла ошибка</p>;
    }

    if (isLoading) {
      return <p>Загрузка кол-ва пар …</p>;
    }

    // Фрмирование массива параметров препода с уникальными ключами
    for (const field in teacher) {
      if (field !== "ID") { // Кроме кода преподавателя
        row.push(<td key={field}>{teacher[field]}</td>);
      }
    }

    // Возврат строки таблицы - одного препода
    return <tr>{row}</tr>;
  }
}

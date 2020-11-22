import React, { Component } from 'react';

export default class GetCsrfToken extends Component {
  render() {
    const { hasErrored, isLoading } = this.props.csrfToken;

    if (hasErrored) {
      return <p>Извините! При загрузке csrfToken произошла ошибка</p>;
    }

    if (isLoading) {
      return <p>Загрузка csrfToken …</p>;
    }

    return null;
  }
}
import React, { Component } from 'react';

export default class RefreshTeachersTable extends Component {
  render() {
    // const { URL, createRequest, fetchTeachers } = this.props;
    const { URL, fetchTeachers } = this.props;

    return (
      <input
        type='button'
        id='refreshTeachersTable'
        value='Обновить'
        onClick={() => fetchTeachers(URL)}
      // onClick={() => fetchTeachers(createRequest(URL, 'GET'))}
      />
    );
  }
}
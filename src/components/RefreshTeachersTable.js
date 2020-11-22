import React, { Component } from 'react';

// import { createRequest } from '../URL/actions';
import { createRequest } from '../store/URL/actions';

export default class RefreshTeachersTable extends Component {
  render() {
    // const { URL, createRequest, fetchTeachers } = this.props;
    const { URL, fetchTeachers } = this.props;

    return (
      <input
        type='button'
        id='refreshTeachersTable'
        value='Обновить'
        onClick={() => fetchTeachers(createRequest(URL, 'POST'))}
      // onClick={() => fetchTeachers(URL)}
      // onClick={() => fetchTeachers(createRequest(URL, 'GET'))}
      />
    );
  }
}
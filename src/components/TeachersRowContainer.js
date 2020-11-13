'use strict';

import React, { Component } from 'react';

import TeachersRow from './TeachersRow';

export default class TeachersRowContainer extends Component {
  render() {
    const { teacher, lessons } = this.props;
    const { hasErrored, isLoading } = lessons;

    return (
      <TeachersRow hasErrored={hasErrored} isLoading={isLoading} teacher={teacher} />
    );
  }
}
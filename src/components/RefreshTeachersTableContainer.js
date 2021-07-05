import React, { Component } from 'react';
import { connect } from 'react-redux';

import RefreshTeachersTableOld from './RefreshTeachersTableOld';
import fetchTeachers from '../store/teachers/actions';

class RefreshTeachersTableContainer extends Component {
  render() {
    const { URL, fetchTeachers, lessons } = this.props;

    return (
      <RefreshTeachersTableOld URL={URL} fetchTeachers={fetchTeachers} lessons={lessons} />
    );
  }
}

const mapStateToProps = state => ({
  URL: state.URL,
  lessons: state.lessons,
});

const mapDispatchToProps = {
  fetchTeachers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RefreshTeachersTableContainer);
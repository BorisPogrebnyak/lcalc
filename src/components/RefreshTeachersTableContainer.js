import React, { Component } from 'react';
import { connect } from 'react-redux';

import RefreshTeachersTable from './RefreshTeachersTable';
import fetchTeachers from '../store/teachers/actions';

class RefreshTeachersTableContainer extends Component {
  render() {
    const { URL, fetchTeachers, lessons } = this.props;

    return (
      <RefreshTeachersTable URL={URL} fetchTeachers={fetchTeachers} lessons={lessons} />
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
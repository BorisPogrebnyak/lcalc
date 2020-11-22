import React, { Component } from 'react';
import { connect } from 'react-redux';

import RefreshTeachersTable from './RefreshTeachersTable';
import { fetchTeachers } from '../store/teachers/actions';

class RefreshTeachersTableContainer extends Component {
  render() {
    const { URL, fetchTeachers } = this.props;

    return (
      <RefreshTeachersTable URL={URL} fetchTeachers={fetchTeachers} />
    );
  }
}

const mapStateToProps = state => ({
  URL: state.URL,
});

const mapDispatchToProps = dispatch => ({
  // fetchTeachers: req => dispatch(fetchTeachers(req)),
  fetchTeachers: URL => dispatch(fetchTeachers(URL)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RefreshTeachersTableContainer);
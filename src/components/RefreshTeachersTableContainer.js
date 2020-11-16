import React, { Component } from 'react';
import { connect } from 'react-redux';

import RefreshTeachersTable from './RefreshTeachersTable';
// import { createRequest } from '../store/URL/actions';
import { fetchTeachers } from '../store/teachers/actions';

class RefreshTeachersTableContainer extends Component {
  render() {
    // const { URL, createRequest, fetchTeachers } = this.props;
    const { URL, fetchTeachers } = this.props;

    return (
      // <RefreshTeachersTable URL={URL} createRequest={createRequest} fetchTeachers={fetchTeachers} />
      <RefreshTeachersTable URL={URL} fetchTeachers={fetchTeachers} />
    );
  }
}

const mapStateToProps = state => ({
  URL: state.URL,
});

const mapDispatchToProps = dispatch => ({
  // createRequest: (URL, method) => createRequest(URL, method),
  // fetchTeachers: req => dispatch(fetchTeachers(req)),
  fetchTeachers: URL => dispatch(fetchTeachers(URL)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RefreshTeachersTableContainer);
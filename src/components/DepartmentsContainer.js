'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Departments from './Departments';
import { fetchDepartments } from '../store/departments/actions';
import { createRequest, changeDepartmentID } from '../store/URL/actions';

class DepartmentsContainer extends Component {
  componentDidMount() {
    const { URL, fetchDepartments } = this.props;
    fetchDepartments(createRequest(URL));
  }

  render() {
    const { hasErrored, isLoading, departments, changeDepartmentID, URL: { params: [, { value: defaultDepartment }] } } = this.props;

    return (
      <Departments hasErrored={hasErrored} isLoading={isLoading} departments={departments} changeDepartmentID={changeDepartmentID} defaultDepartment={defaultDepartment} />
    );
  }
}

const mapStateToProps = state => ({
  URL: state.URL,
  hasErrored: state.departments.hasErrored,
  isLoading: state.departments.isLoading,
  departments: state.departments.departments,
});

// DepartmentsContainer != DateRangeContainer ???
const mapDispatchToProps = dispatch => ({
  createRequest: (URL, method) => createRequest(URL, method),
  fetchDepartments: req => dispatch(fetchDepartments(req)),
  changeDepartmentID: selectedDepartmentID => dispatch(changeDepartmentID(selectedDepartmentID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsContainer);
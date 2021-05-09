import React, { Component } from 'react';
import { connect } from 'react-redux';

import Departments from './Departments';
import fetchDepartments from '../store/departments/actions';
import { changeDepartmentId } from '../store/URL/actions';

class DepartmentsContainer extends Component {
  componentDidMount() {
    this.props.fetchDepartments();
  }

  render() {
    const { hasErrored, isLoading, departments, changeDepartmentId, URL: { params: [, , { value: defaultDepartmentId }] } } = this.props;
    return (
      <Departments hasErrored={hasErrored} isLoading={isLoading} departments={departments} defaultDepartmentId={defaultDepartmentId} changeDepartmentId={changeDepartmentId} />
    );
  }
}

const mapStateToProps = state => ({
  URL: state.URL,
  hasErrored: state.departments.hasErrored,
  isLoading: state.departments.isLoading,
  departments: state.departments.departments,
});

const mapDispatchToProps = {
  fetchDepartments,
  changeDepartmentId,
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentsContainer);
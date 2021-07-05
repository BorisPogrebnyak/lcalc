import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from 'antd';

import 'antd/dist/antd.css';
// import './styles.css';

import fetchTeachers from '../../store/teachers/actions';

class RefreshTeachersTable extends Component {
  render() {
    const { URL, fetchTeachers, lessons, departments, teachers } = this.props;
    const isLoading = lessons.isLoading ||
      departments.isLoading || teachers.isLoading;

    return (
      <Button
        type='primary'
        size='small'
        loading={isLoading}
        onClick={() => fetchTeachers(URL, lessons)}>
        Обновить
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  URL: state.URL,
  lessons: state.lessons,
  departments: state.departments,
  teachers: state.teachers,
});

const mapDispatchToProps = {
  fetchTeachers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RefreshTeachersTable);
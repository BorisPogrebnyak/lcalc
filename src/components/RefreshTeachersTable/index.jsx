import React from "react";
import { connect } from "react-redux";
import { Button } from 'antd';

import 'antd/dist/antd.css';
// import './styles.css';

import { fetchTeachers } from '../../store/teachers/actions';

function RefreshTeachersTable({ url, fetchTeachers, lessons, departments, teachers }) {
  const isLoading = lessons.isLoading ||
    departments.isLoading || teachers.isLoading;

  return (
    <Button
      type='primary'
      size='small'
      loading={isLoading}
      onClick={() => fetchTeachers(url)}>
      Обновить
    </Button>
  );
}

const mapStateToProps = state => ({
  url: state.url,
  lessons: state.lessons,
  departments: state.departments,
  teachers: state.teachers,
});

const mapDispatchToProps = {
  fetchTeachers,
};

export default connect(mapStateToProps, mapDispatchToProps)(RefreshTeachersTable);
import React from "react";
import { connect } from "react-redux";
import { Table, InputNumber } from 'antd';

import Spin from '../Spin';
import { changeLessonsPerRate } from '../../store/teachers/actions';

import './styles.css';

function TeachersTable({ teachers, lessons, changeLessonsPerRate }) {
  const configColumns = [
    {
      title: 'Преподаватель',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: 'Пар',
      dataIndex: 'lessons',
      key: 'lessons',
      sorter: (a, b) => a.lessons - b.lessons,
    },
    {
      title: 'Кст',
      dataIndex: 'coeffRate',
      key: 'coeffRate',
      sorter: (a, b) => a.coeffRate - b.coeffRate,
      render: (coeffRate, teacher) => (
        <InputNumber
          size='small'
          bordered={false}
          min={0.25}
          max={1.5}
          step={0.25}
          value={coeffRate}
          onChange={coeffRate => changeLessonsPerRate(coeffRate, teacher)}
        />),
    },
    {
      title: 'Пар/1ст',
      dataIndex: 'lessonsPerRate',
      key: 'lessonsPerRate',
      sorter: (a, b) => a.lessonsPerRate - b.lessonsPerRate,
    },
  ];

  const dataSource = teachers.isLoading ?
    [{
      name: 'Загрузка списка преподавателей …',
      key: 'isLoadingTeachers'
    }] :
    teachers.hasErrored ?
      [{
        name: 'Извините! При загрузке списка преподавателей произошла ошибка.',
        key: 'hasErroredTeachers'
      }] :
      teachers.teachersList.map(
        teacher => ({ ...teacher, key: teacher.id }));

  return (<>
    <Spin isLoading={lessons.isLoading ||
      teachers.isLoading} />
    <Table
      columns={configColumns}
      dataSource={dataSource}
      size='small'
      bordered
      pagination={{
        // pageSize: 8,
        defaultPageSize: 8,
        pageSizeOptions: [8, 10, 16, 20, 50],
        showSizeChanger: true,
        size: 'small',
      }}
    />
  </>);
}

const mapStateToProps = state => ({
  teachers: state.teachers,
  lessons: state.lessons,
});

const mapDispatchToProps = {
  changeLessonsPerRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(TeachersTable);
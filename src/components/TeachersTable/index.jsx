import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from 'antd';

import Spin from '../Spin';

import './styles.css';

class TeachersTable extends Component {
  render() {
    const columns = [
      {
        title: 'Преподаватель',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name > b.name,
      },
      {
        title: 'Кст',
        dataIndex: 'coeffRate',
        key: 'coeffRate',
        sorter: (a, b) => a.coeffRate - b.coeffRate,
      },
      {
        title: 'Пар',
        dataIndex: 'lessons',
        key: 'lessons',
        sorter: (a, b) => a.lessons - b.lessons,
      },
    ];

    return (<>
      <Spin isLoading={this.props.lessons.isLoading ||
        this.props.teachers.isLoading} />
      <Table
        columns={columns}
        dataSource={this.props.teachers.isLoading ?
          [{
            name: 'Загрузка списка преподавателей …',
            key: 'isLoadingTeachers'
          }] :
          this.props.teachers.hasErrored ?
            [{
              name: 'Извините! При загрузке списка преподавателей произошла ошибка.',
              key: 'hasErroredTeachers'
            }] :
            this.props.teachers.teachersList.map(
              item => ({ ...item, key: item.id }))
        }
        size='small'
        bordered
        pagination={{ pageSize: 8, }}
      />
    </>);
  }
}

const mapStateToProps = state => ({
  teachers: state.teachers,
  lessons: state.lessons,
});

export default connect(mapStateToProps)(TeachersTable);
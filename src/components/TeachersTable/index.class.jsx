import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, InputNumber } from 'antd';

import Spin from '../Spin';
import { onChangeCoeffRate } from '../../store/teachers/actions';

import './styles.css';

class TeachersTable extends Component {
  render() {
    // let teacherNumber;
    let coeffRate;
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
        render: value => (
          <InputNumber
            size='small'
            bordered={false}
            min={0.25}
            max={1.5}
            step={0.25}
            defaultValue={value}
            onChange={value => coeffRate = value}
          />
        ),
      },
      {
        title: 'Пар/1ст',
        dataIndex: 'lessonsPerRate',
        key: 'lessonsPerRate',
        sorter: (a, b) => a.lessonsPerRate - b.lessonsPerRate,
      },
    ];

    const dataSource = this.props.teachers.isLoading ?
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
          teacher => ({ ...teacher, key: teacher.id }));

    return (<>
      <Spin isLoading={this.props.lessons.isLoading ||
        this.props.teachers.isLoading} />
      <Table
        columns={configColumns}
        dataSource={dataSource}
        size='small'
        bordered
        pagination={{ pageSize: 8, }}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => onChangeCoeffRate(coeffRate, rowIndex),
            // onClick: () => dispatch => dispatch(onChangeCoeffRate(coeffRate, rowIndex)),
          }
        }}
      />
    </>);
  }
}

const mapStateToProps = state => ({
  teachers: state.teachers,
  lessons: state.lessons,
});

const mapDispatchToProps = {
  onChangeCoeffRate,
};

// const mapDispatchToProps = dispatch => ({
//   onChangeCoeffRate: (coeffRate, rowIndex) => dispatch(onChangeCoeffRate(coeffRate, rowIndex)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(TeachersTable);
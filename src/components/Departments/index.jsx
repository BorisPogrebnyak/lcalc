import React, { Component } from "react";
import { connect } from "react-redux";
import { Select } from 'antd';
import Spin from '../Spin';

import fetchDepartments from '../../store/departments/actions';
import { changeDepartmentId } from '../../store/URL/actions';

// import './styles.css';

const { Option } = Select;

class Departments extends Component {
  componentDidMount() {
    this.props.fetchDepartments();
  }

  render() {
    const { hasErrored, isLoading, departments, changeDepartmentId, URL: { params: [, , { value: defaultDepartmentId }] } } = this.props;

    return (
      <>
        <Spin isLoading={isLoading} />
        <label>Кафедра </label>
        <Select
          size='small'
          style={{ width: 300, textAlign: 'left', }}
          defaultValue={defaultDepartmentId}
          loading={isLoading}
          onChange={value =>
            changeDepartmentId(value)}
        >
          {isLoading ?
            <Option
              key={defaultDepartmentId}
              value={defaultDepartmentId}>
              Загрузка списка кафедр …
            </Option> :
            hasErrored ?
              <Option
                key={defaultDepartmentId}
                value={defaultDepartmentId}>
                Извините! При загрузке списка кафедр произошла ошибка.
              </Option> :
              departments.map(department =>
                <Option className='department'
                  key={Object.keys(department)[0]}
                  value={Object.keys(department)[0]}
                >
                  {department[Object.keys(department)[0]]}
                </Option>)}
        </Select>
      </ >
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

export default connect(mapStateToProps, mapDispatchToProps)(Departments);
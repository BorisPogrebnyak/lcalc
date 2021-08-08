import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Select } from 'antd';
import Spin from '../Spin';

import fetchDepartments from '../../store/departments/actions';
import { changeDepartmentId } from '../../store/url/actions';

// import './styles.css';

const { Option } = Select;

function Departments({ hasErrored, isLoading, departments, changeDepartmentId, url, url: { selectedDepartmentId: defaultDepartmentId }, fetchDepartments }) {
  useEffect(() => fetchDepartments(url), [fetchDepartments, url]);
  // useEffect(() => fetchDepartments(url), []);

  return (<>
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
  </ >);
}

const mapStateToProps = state => ({
  url: state.url,
  hasErrored: state.departments.hasErrored,
  isLoading: state.departments.isLoading,
  departments: state.departments.departments,
});

const mapDispatchToProps = {
  fetchDepartments,
  changeDepartmentId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Departments);
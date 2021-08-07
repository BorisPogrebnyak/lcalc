import React from "react";
import { Table, InputNumber } from 'antd';

import './styles.css';

export default function TestEventsTable() {
  let rowNumber;

  const configColumns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'value',
      dataIndex: 'value',
      key: 'value',
      render: value => (
        <InputNumber
          size='small'
          bordered={false}
          min={0.25}
          max={1.5}
          step={0.25}
          defaultValue={value}
          onChange={value => {
            console.log('onChange rowNumber: ', rowNumber);
          }}
        />
      ),
    },
  ];

  const dataSource = [
    {
      key: 'row0',
      name: 'row0',
      value: 0.5,
    },
    {
      key: 'row1',
      name: 'row1',
      value: 1,
    },
    {
      key: 'row2',
      name: 'row2',
      value: 1.5,
    },
  ];

  return (<Table
    columns={configColumns}
    dataSource={dataSource}
    size='small'
    bordered
    onRow={(record, rowIndex) => {
      return {
        onClick: () => {
          rowNumber = rowIndex;
          console.log('onClick rowNumber: ', rowNumber);
        },
      }
    }}
  />)
}
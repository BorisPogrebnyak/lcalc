import React, { Component } from "react";
import { connect } from "react-redux";
import { InputNumber } from 'antd';

import 'antd/dist/antd.css';
// import './styles.css';

import { changeCoeffRate } from '../../store/teachers/actions';

class EditCoeffRate extends Component {
  render() {
    const { teacherNumber, coeffRate, changeCoeffRate } = this.props;

    // function onChangecoeffRate(teacherNumber, newCoeffRate) {
    //   changeCoeffRate(teacherNumber, newCoeffRate);
    // }

    return (
      <InputNumber
        id='EditCoeffRate'
        size='small'
        bordered={false}
        min={0.25}
        max={1.5}
        step={0.25}
        defaultValue={1.00}
        onChange={(teacherNumber, newCoeffRate) => () => changeCoeffRate(teacherNumber, newCoeffRate)}
      // onChange={onChangecoeffRate}
      />
    );
  }
}

const mapStateToProps = state => ({
  teacherNumber: state.teacherNumber,
  coeffRate: state.coeffRate,
});

const mapDispatchToProps = {
  changeCoeffRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditCoeffRate);
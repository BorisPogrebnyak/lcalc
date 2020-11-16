import React, { Component } from 'react';
import { connect } from 'react-redux';

import DateRange from './DateRange';
import { changeDateRangeFrom, changeDateRangeTo } from '../store/URL/actions';

class DateRangeContainer extends Component {
  render() {
    const { from, to, changeDateRangeFrom, changeDateRangeTo } = this.props;
    return (
      <DateRange from={from} to={to} changeDateRangeFrom={changeDateRangeFrom} changeDateRangeTo={changeDateRangeTo} />
    );
  }
}

const mapStateToProps = state => ({
  from: state.URL.params[3].value,
  to: state.URL.params[4].value,
});

// DepartmentsContainer != DateRangeContainer ???
const mapDispatchToProps = {
  changeDateRangeFrom,
  changeDateRangeTo,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeContainer);
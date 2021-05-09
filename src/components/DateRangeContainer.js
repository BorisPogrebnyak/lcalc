import React, { Component } from 'react';
import { connect } from 'react-redux';

import DateRange from './DateRange';
import { changeDateRangeStart, changeDateRangeEnd } from '../store/URL/actions';

class DateRangeContainer extends Component {
  render() {
    const { start, end, changeDateRangeStart, changeDateRangeEnd } = this.props;
    return (
      <DateRange start={start} end={end} changeDateRangeStart={changeDateRangeStart} changeDateRangeEnd={changeDateRangeEnd} />
    );
  }
}

const mapStateToProps = state => ({
  start: state.URL.params[5].value,
  end: state.URL.params[6].value,
});

const mapDispatchToProps = {
  changeDateRangeStart,
  changeDateRangeEnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';

import DateRangeOld from './DateRangeOld';
import { changeDateRangeStart, changeDateRangeEnd } from '../store/URL/actions';

class DateRangeContainer extends Component {
  render() {
    const { start, end, changeDateRangeStart, changeDateRangeEnd } = this.props;
    return (
      <DateRangeOld start={start} end={end} changeDateRangeStart={changeDateRangeStart} changeDateRangeEnd={changeDateRangeEnd} />
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
import React, { Component } from "react";
import { connect } from "react-redux";
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from 'moment';
import 'moment/locale/ru';
import dayjs from "dayjs";
import 'dayjs/locale/ru';

import 'antd/dist/antd.css';
// import './styles.css';

import { changeDateRangeStart, changeDateRangeEnd } from '../../store/URL/actions';

const { RangePicker } = DatePicker;

class DateRange extends Component {
  render() {
    const { start, end, changeDateRangeStart, changeDateRangeEnd } = this.props;
    const dateInputFormat = 'YYYY-MM-DD';
    const dateOutputFormat = 'DD.MM.YYYY';

    function onChangeDateRange(dates) {
      changeDateRangeStart(dayjs(dates[0]._d).format(dateInputFormat));
      changeDateRangeEnd(dayjs(dates[1]._d).format(dateInputFormat));
    }

    return (
      <>
        <label> за&nbsp;период:&nbsp;</label>
        <RangePicker
          allowClear={false}
          size='small'
          locale={locale}
          defaultValue={[moment(start, dateInputFormat), moment(end, dateInputFormat)]}
          format={dateOutputFormat}
          onChange={onChangeDateRange}
        />
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(DateRange);
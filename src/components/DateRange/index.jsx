import React from "react";
import { connect } from "react-redux";
import { DatePicker } from 'antd';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from 'moment';
import 'moment/locale/ru';
import dayjs from "dayjs";
import 'dayjs/locale/ru';

import 'antd/dist/antd.css';
// import './styles.css';

import { changeDateRangeStart, changeDateRangeEnd } from '../../store/url/actions';

const { RangePicker } = DatePicker;

function DateRange({ start, end, changeDateRangeStart, changeDateRangeEnd }) {
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

const mapStateToProps = state => ({
  start: state.url.dateStart,
  end: state.url.dateEnd,
});

const mapDispatchToProps = {
  changeDateRangeStart,
  changeDateRangeEnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateRange);
import dayjs from "dayjs";

import {
  CHANGE_DEPARTMEN_ID,
  CHANGE_DATE_RANGE_START,
  CHANGE_DATE_RANGE_END,
} from "./actions";

require('dotenv').config();

const initialUrl = () => ({
  hostServer: process.env.NODE_ENV === 'development'
    ? 'http://localhost' // dev  - localhost
    : '',                // prod - Heroku
  targetUrl: 'https://erp.kname.edu.ua/time-table/teacher?type=0',
  selectedDepartmentId: '169', // АКИТ; '78' - КН
  dateStart: defaultDateRangeStart(),
  dateEnd: defaultDateRangeEnd(),
});

export default function urlReducer(state = initialUrl(), action) {
  switch (action.type) {
    case CHANGE_DEPARTMEN_ID:
      return { ...state, selectedDepartmentId: action.selectedDepartmentId };

    case CHANGE_DATE_RANGE_START:
      return { ...state, dateStart: action.newDateRangeStart };

    case CHANGE_DATE_RANGE_END:
      return { ...state, dateEnd: action.newDateRangeEnd };

    default:
      return state;
  }
};

// 'YYYY-MM-DD'
// 'DD.MM.YYYY'
const defaultDateRangeStart = (format = 'YYYY-MM-DD') => (dayjs().isBefore(dayjs(`${dayjs().year()}-09-01`))
  ? dayjs(`${dayjs().year()}-01-01`)
  : dayjs(`${dayjs().year()}-09-01`)).format(format);

const defaultDateRangeEnd = (format = 'YYYY-MM-DD') => (dayjs().isBefore(dayjs(`${dayjs().year()}-09-01`))
  ? dayjs(`${dayjs().year()}-08-31`)
  : dayjs(`${dayjs().year()}-12-31`)).format(format);
import dayjs from "dayjs";

import {
  CHANGE_DEPARTMEN_ID,
  CHANGE_DATE_RANGE_START,
  CHANGE_DATE_RANGE_END,
} from "./actions";

const initialURL = (currentDate = new Date()) => {
  return {
    proxy: '',
    base: "https://erp.kname.edu.ua",
    offset: "/time-table/teacher?type=0",
    params: [
      {
        // [0] - csrfToken
        // NAME: "?_csrf-frontend=",
        // NAME: "&_csrf-frontend=",
        NAME: '_csrf-frontend=',
        value: "",
      },
      {
        // [1] - Филиал
        // NAME: "?TimeTableForm[filial]=",
        NAME: "&TimeTableForm[structureId]=",
        value: "0",
      },
      {
        // [2] - Кафедра
        NAME: "&TimeTableForm[chairId]=",
        value: "169", // АтКИТ
        // value: "78", // КН
      },
      {
        // [3] - Преподаватель
        NAME: "&TimeTableForm[teacherId]=",
        value: "",
      },
      {
        // [4] - date-picker
        NAME: '&date-picker=',
        value: `${defaultDateRangeStart('DD.MM.YYYY')} - ${defaultDateRangeEnd('DD.MM.YYYY')}`,
      },
      {
        // [5] - Дата начала
        NAME: "&TimeTableForm[dateStart]=",
        value: defaultDateRangeStart(),
      },
      {
        // [6] - Дата Окончания
        NAME: "&TimeTableForm[dateEnd]=",
        value: defaultDateRangeEnd(),
      },
      {
        // [7] - 
        NAME: '&TimeTableForm[indicationDays]=',
        value: '5',
      },
      {
        // [8] - 
        NAME: '&time-table-type=',
        value: '1',
      },
    ]
  };
};

// 'YYYY-MM-DD'
// 'DD.MM.YYYY'
const defaultDateRangeStart = (format = 'YYYY-MM-DD') => (dayjs().isBefore(dayjs(`${dayjs().year()}-09-01`))
  ? dayjs(`${dayjs().year()}-01-01`)
  : dayjs(`${dayjs().year()}-09-01`)).format(format);

const defaultDateRangeEnd = (format = 'YYYY-MM-DD') => (dayjs().isBefore(dayjs(`${dayjs().year()}-09-01`))
  ? dayjs(`${dayjs().year()}-08-31`)
  : dayjs(`${dayjs().year()}-12-31`)).format(format);

export default function URLReducer(state = initialURL(), action) {
  switch (action.type) {
    case CHANGE_DEPARTMEN_ID:
      return { ...state, params: changeParam(state, 2, action.Id) };

    case CHANGE_DATE_RANGE_START:
      return {
        ...state,
        params: changeParam(state, 5, action.newDateRangeStart)
      };

    case CHANGE_DATE_RANGE_END:
      return { ...state, params: changeParam(state, 6, action.newDateRangeEnd) };

    default:
      return state;
  }
};

// Меняет значение параметра value: c номером [index] на value
const changeParam = (state, index, value) => [
  ...state.params.slice(0, index),
  { ...state.params[index], value: value },
  ...state.params.slice(index + 1)
];

import {
  CHANGE_CSRF_TOKEN,
  CHANGE_DEPARTMEN_ID,
  // CHANGE_TEACHER_ID,
  CHANGE_DATE_RANGE_FROM,
  CHANGE_DATE_RANGE_TO,
} from "./actions";

const initialURL = (currentDate = new Date()) => {
  return {
    proxy: "https://cors-anywhere.herokuapp.com/",
    // base: "https://kis.kname.edu.ua",
    // offset: "/timeTable/teacher",
    base: "https://erp.kname.edu.ua",
    offset: "/time-table/teacher?type=0",
    // offset: "/time-table/teacher",
    params: [
      {
        // [0] - csrfToken
        NAME: "?_csrf-frontend=",
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
        NAME: "&TimeTableForm[teacher]=",
        value: "",
      },
      {
        // [4] - Дата начала
        NAME: "&TimeTableForm[date1]=",
        value:
          currentDate.toLocaleString() >= "01.09." + currentDate.getFullYear()
            ? currentDate.getFullYear() + "-09-01"
            : currentDate.getFullYear() + "-01-01",
      },
      {
        // [5] - Дата Окончания
        NAME: "&TimeTableForm[date2]=",
        value:
          currentDate.toLocaleString() >= "01.09." + currentDate.getFullYear()
            ? currentDate.getFullYear() + "-12-31"
            : currentDate.getFullYear() + "-08-31",
      },
      {
        // [6]
        NAME: "&TimeTableForm[r11]=",
        value: "5",
      }
    ]
  };
};

export const URLReducer = (state = initialURL(), action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_CSRF_TOKEN:
      return { ...state, params: changeParam(state, 0, action.csrfToken) };

    case CHANGE_DEPARTMEN_ID:
      return { ...state, params: changeParam(state, 2, action.ID) };

    // case CHANGE_TEACHER_ID:
    //   return { ...state, params: changeParam(state, 3, action.ID) };

    case CHANGE_DATE_RANGE_FROM:
      return {
        ...state,
        params: changeParam(state, 4, action.newDateRangeFrom)
      };

    case CHANGE_DATE_RANGE_TO:
      return { ...state, params: changeParam(state, 5, action.newDateRangeTo) };

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

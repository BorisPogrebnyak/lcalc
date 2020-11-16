export const CHANGE_DEPARTMEN_ID = 'CHANGE_DEPARTMEN_ID';
// export const CHANGE_TEACHER_ID = 'CHANGE_TEACHER_ID';
export const CHANGE_DATE_RANGE_FROM = 'CHANGE_DATE_RANGE_FROM';
export const CHANGE_DATE_RANGE_TO = 'CHANGE_DATE_RANGE_TO';

export const changeDepartmentID = ID => ({
  type: CHANGE_DEPARTMEN_ID,
  ID
});

// export const changeTeacherID = ID => ({
//   type: CHANGE_TEACHER_ID,
//   ID
// });

export const changeDateRangeFrom = newDateRangeFrom => ({
  type: CHANGE_DATE_RANGE_FROM,
  newDateRangeFrom
});

export const changeDateRangeTo = newDateRangeTo => ({
  type: CHANGE_DATE_RANGE_TO,
  newDateRangeTo
});

export const createRequest = (state, method = '') => {
  const { proxy, base, offset } = state;
  const defaultURL = `${proxy}${base}${offset}`;

  switch (method.toUpperCase()) {
    case 'GET':
      return `${defaultURL}${state.params.map(param => param.NAME + param.value).join('')}`;

    case 'POST':
      return {
        url: defaultURL,
        init: {
          method: 'POST',
          headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `${state.params.map(param => param.NAME + param.value).join('')}`.slice(1),
        },
      };

    default:
  }

  return defaultURL;
}
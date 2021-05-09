export const CHANGE_DEPARTMEN_ID = 'CHANGE_DEPARTMEN_ID';
export const CHANGE_DATE_RANGE_START = 'CHANGE_DATE_RANGE_START';
export const CHANGE_DATE_RANGE_END = 'CHANGE_DATE_RANGE_END';

export const changeDepartmentId = Id => ({
  type: CHANGE_DEPARTMEN_ID,
  Id
});

export const changeDateRangeStart = newDateRangeStart => ({
  type: CHANGE_DATE_RANGE_START,
  newDateRangeStart
});

export const changeDateRangeEnd = newDateRangeEnd => ({
  type: CHANGE_DATE_RANGE_END,
  newDateRangeEnd
});

export const createRequest = (state, method = '') => {
  const { proxy, base, offset } = state;
  const defaultURL = `${proxy}${base}${offset}`;

  switch (method.toUpperCase()) {
    case 'GET':
      return {
        url: defaultURL,
        init: {
          method: 'GET',
          headers: {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Cache-Control': 'max-age=0',
          },
        },
      };

    case 'POST':
      console.log(state);
      console.log(state.params[0]);
      return {
        url: defaultURL,
        init: {
          method: 'POST',
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `${state.params.slice(0, 3).map(param => encodeURI(param.NAME) + encodeURIComponent(param.value)).join('')}`,
        },
      };

    default:
      return defaultURL;
  }
}
export const CHANGE_DEPARTMEN_ID = 'CHANGE_DEPARTMEN_ID';
export const CHANGE_DATE_RANGE_START = 'CHANGE_DATE_RANGE_START';
export const CHANGE_DATE_RANGE_END = 'CHANGE_DATE_RANGE_END';

export const changeDepartmentId = selectedDepartmentId => ({
  type: CHANGE_DEPARTMEN_ID,
  selectedDepartmentId
});

export const changeDateRangeStart = newDateRangeStart => ({
  type: CHANGE_DATE_RANGE_START,
  newDateRangeStart
});

export const changeDateRangeEnd = newDateRangeEnd => ({
  type: CHANGE_DATE_RANGE_END,
  newDateRangeEnd
});
'use strict';

import { combineReducers } from 'redux';

import { URLReducer } from './URL/reducers';
// import { currentDateReducer } from './current_date/reducers';
import { departmentsReducer } from './departments/reducers';
// import { teachersReducer }    from './teachers/reducers';
// import { lessonsReducer }     from './lessons/reducers';

export default combineReducers({
  URL: URLReducer,
  // currentDate: currentDateReducer,
  departments: departmentsReducer,
  // teachers:    teachersReducer,
  // lessons:     lessonsReducer,
});
'use strict';

import { combineReducers } from 'redux';

import { URLReducer } from './URL/reducers';
import { departmentsReducer } from './departments/reducers';
import { teachersReducer } from './teachers/reducers';
import { lessonsReducer } from './lessons/reducers';

export default combineReducers({
  URL: URLReducer,
  departments: departmentsReducer,
  teachers: teachersReducer,
  lessons: lessonsReducer,
});
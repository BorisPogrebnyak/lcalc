import { combineReducers } from 'redux';

import { URLReducer } from './URL/reducers';
import { csrfTokenReducer } from './CSRF/reducers';
import { departmentsReducer } from './departments/reducers';
import { teachersReducer } from './teachers/reducers';
import { lessonsReducer } from './lessons/reducers';

export default combineReducers({
  URL: URLReducer,
  csrfToken: csrfTokenReducer,
  departments: departmentsReducer,
  teachers: teachersReducer,
  lessons: lessonsReducer,
});
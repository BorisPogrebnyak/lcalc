import { combineReducers } from 'redux';

import urlReducer from './url/reducers';
import departmentsReducer from './departments/reducers';
import teachersReducer from './teachers/reducers';
import lessonsReducer from './lessons/reducers';

export default combineReducers({
  url: urlReducer,
  departments: departmentsReducer,
  teachers: teachersReducer,
  lessons: lessonsReducer,
});
import {
  TEACHERS_HAS_ERRORED,
  TEACHERS_IS_LOADING,
  TEACHERS_FETCH_SUCCESS,
} from "./actions";

const initialTeachers = {
  hasErrored: false,
  isLoading: false,
  teachersTableHeaders: ["Преподаватель", "Кст", "Пар"], // Заголовки столбцов таблицы
  teachersList: [] // Список преподавателей для отображения
};

export default function teachersReducer(state = initialTeachers, action) {
  switch (action.type) {
    case TEACHERS_HAS_ERRORED:
      return { ...state, hasErrored: action.hasErrored };

    case TEACHERS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    case TEACHERS_FETCH_SUCCESS:
      return { ...state, teachersList: action.teachersList };

    default:
      return state;
  }
};

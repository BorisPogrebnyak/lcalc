import {
  TEACHERS_HAS_ERRORED,
  TEACHERS_IS_LOADING,
  TEACHERS_TABLE_CREATED,
  // TEACHERS_CHANGED_LESSONS,
} from "./actions";

const initialTeachers = () => ({
  hasErrored: false,
  isLoading: false,
  teachersTableHeaders: ["Преподаватель", "Кст", "Пар"], // Заголовки столбцов таблицы
  teachersForView: [] // Список преподавателей для отображения
});

export const teachersReducer = (state = initialTeachers(), action) => {
  switch (action.type) {
    case TEACHERS_HAS_ERRORED:
      return { ...state, hasErrored: action.hasErrored };

    case TEACHERS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    case TEACHERS_TABLE_CREATED:
      return { ...state, teachersForView: action.teachersForView };

    // case TEACHERS_CHANGED_LESSONS:
    //   return { ...state, lessons: action.lessons };

    default:
      return state;
  }
};

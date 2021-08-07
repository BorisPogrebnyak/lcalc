import {
  TEACHERS_HAS_ERRORED,
  TEACHERS_IS_LOADING,
  TEACHERS_FETCH_SUCCESS,
  CHANGE_LESSONS_PER_RATE,
} from "./actions";

const initialTeachers = {
  hasErrored: false,
  isLoading: false,
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

    case CHANGE_LESSONS_PER_RATE:
      return { ...state, teachersList: changeLessonsPerRate(state.teachersList, action.teacher, action.coeffRate) };

    default:
      return state;
  }
};

// Меняет в teachersList у конкретного teacher
// кол-во пар/ставку lessonsPerRate
function changeLessonsPerRate(teachersList, teacher, newCoeffRate) {
  return teachersList.map(currentTeacher =>
    currentTeacher.id !== teacher.id
      ? currentTeacher
      : { ...currentTeacher, coeffRate: newCoeffRate, lessonsPerRate: Math.round(currentTeacher.lessons / newCoeffRate) }
  );
}
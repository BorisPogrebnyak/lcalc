import {
  TEACHERS_HAS_ERRORED,
  TEACHERS_IS_LOADING,
  TEACHERS_FETCH_SUCCESS,
  CHANGE_COEFF_RATE,
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

    case CHANGE_COEFF_RATE:
      return { ...state, teachersList: changeTeacher(state.teachersList, action.newCoeffRate, action.teacherNumber) };

    default:
      return state;
  }
};

// Меняет в teachersList у преподавателя с номером
// teacherNumber параметры coeffRate и lessonsPerRate
function changeTeacher(teachersList, newCoeffRate, teacherNumber) {
  return [
    ...teachersList.slice(0, teacherNumber),
    { ...teachersList[teacherNumber], coeffRate: newCoeffRate, lessonsPerRate: Math.round(teachersList[teacherNumber].lessons / newCoeffRate) },
    ...teachersList.slice(teacherNumber + 1)
  ];
}
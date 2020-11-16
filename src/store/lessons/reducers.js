import {
  LESSONS_HAS_ERRORED,
  LESSONS_IS_LOADING,
  // LESSONS_CHANGED,
} from "./actions";

const initialLessons = () => ({
  hasErrored: false,
  isLoading: false,
  lessons: null, // Кол-во пар текущего преподавателя ???
});

export const lessonsReducer = (state = initialLessons(), action) => {
  switch (action.type) {
    case LESSONS_HAS_ERRORED:
      return { ...state, hasErrored: action.hasErrored };

    case LESSONS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    // case LESSONS_CHANGED:
    //   return { ...state, lessons: action.lessons };

    default:
  }

  return state;
};

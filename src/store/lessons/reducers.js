import {
  LESSONS_HAS_ERRORED,
  LESSONS_IS_LOADING,
} from "./actions";

const initialLessons = {
  hasErrored: false,
  isLoading: false,
};

export default function lessonsReducer(state = initialLessons, action) {
  switch (action.type) {
    case LESSONS_HAS_ERRORED:
      return { ...state, hasErrored: action.hasErrored };

    case LESSONS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
};

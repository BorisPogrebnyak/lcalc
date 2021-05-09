import {
  DEPARTMENTS_HAS_ERRORED,
  DEPARTMENTS_IS_LOADING,
  DEPARTMENTS_FETCH_SUCCESS,
} from './actions';

const initialDepartments = () => ({
  hasErrored: false,
  isLoading: false,
  departments: [],
})

// export const departmentsReducer = (state = initialDepartments(), action) => {
export default function departmentsReducer(state = initialDepartments(), action) {
  switch (action.type) {
    case DEPARTMENTS_HAS_ERRORED:
      return { ...state, hasErrored: action.hasErrored };

    case DEPARTMENTS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    case DEPARTMENTS_FETCH_SUCCESS:
      return { ...state, departments: action.departments };

    default:
      return state;
  }
}
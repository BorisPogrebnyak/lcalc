export const DEPARTMENTS_HAS_ERRORED = 'DEPARTMENTS_HAS_ERRORED';
export const DEPARTMENTS_IS_LOADING = 'DEPARTMENTS_IS_LOADING';
export const DEPARTMENTS_FETCH_SUCCESS = 'DEPARTMENTS_FETCH_SUCCESS';

const hasErrored = hasErrored => ({
  type: DEPARTMENTS_HAS_ERRORED,
  hasErrored
});

const isLoading = isLoading => ({
  type: DEPARTMENTS_IS_LOADING,
  isLoading
});

const fetchDepartmentsSuccess = departments => ({
  type: DEPARTMENTS_FETCH_SUCCESS,
  departments
});

export default function fetchDepartments() {
  return dispatch => {
    dispatch(isLoading(true));

    fetch('http://localhost:3001/departments?targetUrl=https://erp.kname.edu.ua/time-table/teacher?type=0')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        dispatch(isLoading(false));

        return res.json();
      })
      .then(json => dispatch(fetchDepartmentsSuccess(json)))

      .catch(() => dispatch(hasErrored(true)));
  }
};
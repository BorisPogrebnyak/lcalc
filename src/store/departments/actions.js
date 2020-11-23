import cheerio from 'cheerio';

import { changeCsrfToken } from '../URL/actions';


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

export const fetchDepartments = url => {
  // export const fetchDepartments = req => {
  return dispatch => {
    dispatch(isLoading(true));

    fetch(url)
      // fetch(req.url, req.init)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        dispatch(isLoading(false));
        return res.text();
      })
      .then(html => {
        dispatch(changeCsrfToken(cheerio.load(html)('meta[name="csrf-token"]').attr('content')));

        return html;
      })
      .then(html => dispatch(fetchDepartmentsSuccess(cheerio.load(html)('#timetableform-chairid option').slice(1))))

      .catch(() => dispatch(hasErrored(true)));
  }
};
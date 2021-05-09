import $ from 'jquery';

import fetchLessons from '../lessons/actions';

export const TEACHERS_HAS_ERRORED = "TEACHERS_HAS_ERRORED";
export const TEACHERS_IS_LOADING = "TEACHERS_IS_LOADING";
export const TEACHERS_FETCH_SUCCESS = "TEACHERS_FETCH_SUCCESS";

const hasErrored = hasErrored => ({
  type: TEACHERS_HAS_ERRORED,
  hasErrored
});

const isLoading = isLoading => ({
  type: TEACHERS_IS_LOADING,
  isLoading
});

const fetchTeachersSuccess = teachersList => ({
  type: TEACHERS_FETCH_SUCCESS,
  teachersList
});

export default function fetchTeachers(URL, lessons) {
  return async dispatch => {
    try {
      dispatch(isLoading(true));

      const res = await fetch(`http://localhost:3001/teachers?selectedDepartmentId=${URL.params[2].value}&dateStart=${URL.params[5].value}&dateEnd=${URL.params[6].value}`);

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      dispatch(isLoading(false));

      (async teachersList => {
        await dispatch(fetchTeachersSuccess(teachersList));
        for (const teacher of teachersList) {
          teacher.lessons = await fetchLessons(URL, teacher.id, lessons, dispatch);
          await dispatch(fetchTeachersSuccess(teachersList));
        } // Подключение tablesorter в TeachersTableHeader.js
        $("#contentTable").trigger("update");
      })(await res.json());

    } catch (err) {
      dispatch(hasErrored(true));
    }
  }
}
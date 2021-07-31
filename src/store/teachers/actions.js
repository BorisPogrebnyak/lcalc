import fetchLessons from '../lessons/actions';

export const TEACHERS_HAS_ERRORED = "TEACHERS_HAS_ERRORED";
export const TEACHERS_IS_LOADING = "TEACHERS_IS_LOADING";
export const TEACHERS_FETCH_SUCCESS = "TEACHERS_FETCH_SUCCESS";
export const CHANGE_COEFF_RATE = 'CHANGE_COEFF_RATE';

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

export function fetchTeachers(url) {
  return async dispatch => {
    try {
      dispatch(isLoading(true));

      const res = await fetch(`${url.hostServer}/teachers?selectedDepartmentId=${url.selectedDepartmentId}&dateStart=${url.dateStart}&dateEnd=${url.dateEnd}`);

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      dispatch(isLoading(false));

      (async teachersList => {
        await dispatch(fetchTeachersSuccess(teachersList));
        let teacherNumber = 0;
        for (const teacher of teachersList) {
          teacher.lessons = await fetchLessons(url, teacher.id, ++teacherNumber, dispatch);
          teacher.lessonsPerRate = Math.round(teacher.lessons / teacher.coeffRate);
          await dispatch(fetchTeachersSuccess(teachersList));
        }
      })(await res.json());

    } catch (err) {
      dispatch(hasErrored(true));
    }
  }
}

export function onChangeCoeffRate(newCoeffRate, teacherNumber) {
  return async dispatch => {
    await dispatch(changeCoeffRate(newCoeffRate, teacherNumber));
  }
}

const changeCoeffRate = (newCoeffRate, teacherNumber) => {
  return ({
    type: CHANGE_COEFF_RATE,
    newCoeffRate,
    teacherNumber,
  })

}
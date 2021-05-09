export const LESSONS_HAS_ERRORED = 'LESSONS_HAS_ERRORED';
export const LESSONS_IS_LOADING = 'LESSONS_IS_LOADING';

const hasErrored = hasErrored => ({
  type: LESSONS_HAS_ERRORED,
  hasErrored
});

const isLoading = isLoading => ({
  type: LESSONS_IS_LOADING,
  isLoading
});

export default async function fetchLessons(URL, teacherId, lessons, dispatch) {
  try {
    dispatch(isLoading(true));

    const res = await fetch(`http://localhost:3001/lessons?selectedDepartmentId=${URL.params[2].value}&teacherId=${teacherId}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    dispatch(isLoading(false));

    return res.text();
  } catch (err) {
    dispatch(hasErrored(true));
  }
}


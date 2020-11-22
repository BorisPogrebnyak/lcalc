import {
  CSRF_TOKEN_SET,
} from "./actions";

export const csrfTokenReducer = (state = '', action) => {
  switch (action.type) {
    case CSRF_TOKEN_SET:
      return { ...state, csrfToken: action.csrfToken };

    default:
      return state;
  }
}
export const CSRF_TOKEN_SET = 'CSRF_TOKEN_SET';

export const setCsrfToken = csrfToken => ({
  type: CSRF_TOKEN_SET,
  csrfToken
});
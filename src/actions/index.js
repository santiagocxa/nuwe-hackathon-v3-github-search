export const resgiterRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload,
});

export const loginRegister = payload => ({
  type: 'LOGIN_REGISTER',
  payload,
});

export const logout = payload => ({
  type: 'LOGOUT',
  payload,
});
import { resgiterRequest,loginRegister, logout } from '../../actions/index';

describe('Actions', () => {
  test('Register action', () => {
    const payload = { user: 'user test' };
    const expected = {
      type: 'REGISTER_REQUEST',
      payload,
    };
    expect(resgiterRequest(payload)).toEqual(expected);
  });

  test('Login action', () => {
    const payload = { user: 'user test' };
    const expected = {
      type: 'LOGIN_REGISTER',
      payload,
    };
    expect(loginRegister(payload)).toEqual(expected);
  });

  test('Loguot action', () => {
    const payload = {};
    const expected = {
      type: 'LOGOUT',
      payload,
    };
    expect(logout(payload)).toEqual(expected);
  });
});

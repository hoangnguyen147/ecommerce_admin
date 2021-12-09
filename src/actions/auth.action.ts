import { Dispatch } from 'redux';

// types
import { IAuthActionTypes } from 'models/IAuthState';
import { IHistory } from 'models/ICommon';

// services
import authService from 'services/authService';

// configs
import { PATH_NAME } from 'configs';

import * as api from 'apis/auth.api';

export const login = (username: string, password: string, roleUser: string, history: IHistory) => async (dispatch: Dispatch<any>) => {
  dispatch({ type: IAuthActionTypes.LOGIN_REQUEST });

  try {

    const res : any = await api.login('/Auth/admin-login', { username, password });

    const { user, fullname, avatar, token } = res.data.data;

    authService.logIn(token);

    dispatch({
      type: IAuthActionTypes.LOGIN_SUCCESS,
      payload: { user, fullname, avatar, token, role: 'ADMIN' },
    });
    history.push(PATH_NAME.ROOT);
  } catch (err) {
    console.error(err);
  }
};

export const logout = () => (dispatch: Dispatch<any>) => {
  authService.logOut();
  dispatch({ type: IAuthActionTypes.LOGOUT });
};

export const setUserData = (user: string, role: string) => (dispatch: Dispatch<any>) => {
  dispatch({
    type: IAuthActionTypes.SILENT_LOGIN,
    payload: { user, role },
  });
};

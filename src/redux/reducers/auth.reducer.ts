import { IAuthActionTypes, IAuthActionCreator, IAuthState } from 'models/IAuthState';

const initialState: IAuthState = {
  user: null,
  role: null,
  fullname: null,
  avatar: null,
  token: null,
};

const reducer = (state = initialState, { type, payload }: IAuthActionCreator) => {
  switch (type) {
    case IAuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: payload.user,
        role: payload.role,
        fullname: payload.fullname,
        avatar: payload.avatar,
        token: payload.token,
      };
    case IAuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
      };
    case IAuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        role: null,
      };
    case IAuthActionTypes.SILENT_LOGIN:
      return {
        ...state,
        user: payload.user,
        role: payload.role,
      };
    default:
      return state;
  }
};

export default reducer;

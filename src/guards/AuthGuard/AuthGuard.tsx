import React, { FC } from 'react';
import { Redirect } from 'react-router';

// configs
import { PATH_NAME } from 'configs';

// services
import authService from 'services/authService';
import { useSelector } from 'react-redux';

const AuthGuard: FC = ({ children }) => {
  // const res = useSelector(auth => auth);
  // console.log(res);
  const isAuth = authService.getAccessToken();

  if (!isAuth) return <Redirect to={PATH_NAME.LOGIN} />;

  return <>{children}</>;
};

export default AuthGuard;

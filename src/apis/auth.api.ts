import httpRequest from 'services/httpRequest';

export const login = async (data: any) => {
  return httpRequest.post('/auth/login', data, {
    showSpinner: true,
  });
};

export const resetPassword = async (username: string, new_password: string) => {
  return httpRequest.patch(
    '/auth/admin-reset-password',
    { username, new_password },
    {
      showSpinner: true,
    },
  );
};

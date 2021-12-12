import httpRequest from 'services/httpRequest';

export const login = async (data: any) => {
  return httpRequest.post('/auth/login', data, {
    showSpinner: true,
  });
};

import httpRequest from 'services/httpRequest';

export const getAllUser = async () => {
  return httpRequest.get('/user/get-all-user', {
    showSpinner: true,
  });
};

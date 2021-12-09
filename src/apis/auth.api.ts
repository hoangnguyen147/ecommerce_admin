import httpRequest from 'services/httpRequest';

export const login = async (url: string, data: any) => {
  return httpRequest.post(url, data, {
    showSpinner: true,
  });
};

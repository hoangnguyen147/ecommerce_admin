import httpRequest from 'services/httpRequest';

export const getAllProduct = async (data: any) => {
  return httpRequest.post('/product', data, {
    showSpinner: true,
  });
};

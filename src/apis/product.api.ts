import httpRequest from 'services/httpRequest';

export const getAllProduct = async () => {
  return httpRequest.get('/product', {
    showSpinner: true,
  });
};

export const postAddProduct = async (data: any) => {
  return httpRequest.post('/product/add-product', data, {
    showSpinner: true,
  });
};

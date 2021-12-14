import httpRequest from 'services/httpRequest';

export const getAllCategory = async () => {
  return httpRequest.get('/category', {
    showSpinner: true,
  });
};

export const postAddCategory = async (data: any) => {
  return httpRequest.post('/category/add-category', data, {
    showSpinner: true,
  });
};

export const deleteCategory = async (id: string) => {
  return httpRequest.delete(`/category/${id}`, {
    showSpinner: true,
  });
};

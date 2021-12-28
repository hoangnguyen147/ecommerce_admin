import httpRequest from 'services/httpRequest';

export const getAllOrder = async () => {
  return httpRequest.get('/order/get-all-order', {
    showSpinner: true,
  });
};

export const patchSetOrderDelivering = async (id: string) => {
  return httpRequest.patch(`/order/set-order-is-delivering/${id}`, {
    showSpinner: true,
  });
};

export const patchRejectOrder = async (id: string) => {
  return httpRequest.patch(`/order/admin-reject-order/${id}`, {
    showSpinner: true,
  });
};

export const patchTickOrderSuccess = async (id: string) => {
  return httpRequest.patch(`/order/admin-tick-order-success/${id}`, {
    showSpinner: true,
  });
};

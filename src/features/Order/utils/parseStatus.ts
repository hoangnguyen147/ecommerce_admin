export const parseStatus = (status: string) => {
  switch (status) {
    case 'pending':
      return 'Đang chờ';
    case 'delivering':
      return 'Đang giao hàng';
    case 'success':
      return 'Giao hàng thành công';
    case 'reject':
      return 'Từ chối đơn hàng';
    case 'cancel':
      return 'Hủy';
    default:
      return 'Không xác định';
  }
};

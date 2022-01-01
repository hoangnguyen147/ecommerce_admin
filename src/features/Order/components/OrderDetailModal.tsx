import React, { useEffect, useState } from 'react';
import * as api from 'apis/order.api';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ImageField } from 'components/molecules/ImageField/ImageField';
import { putUpdateProduct } from 'apis/product.api';
import { formatterVnd } from 'utils/formatNumber';
import { parseStatus } from '../utils/parseStatus';

type IProps = {
  isOpen: boolean;
  handleClose: () => void;
  data: any;
  getData: any;
};

export default function OrderDetailModal({ isOpen, handleClose, data, getData }: IProps) {
  const classes = useStyles();

  const [values, setValues] = useState<any>({
    name: '',
    category_id: '',
    image: '',
    price: '',
    quantity: '',
    vote: '',
  });

  useEffect(() => {
    setValues(data);
  }, [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleImageFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const target: any = e.currentTarget;
    if (target?.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();
      reader.onloadend = () => {
        setValues({
          ...values,
          image: reader.result,
        });
        console.log(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    try {
      handleClose();
      await getData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelivering = async () => {
    try {
      const res = await api.patchSetOrderDelivering(data.id);
      console.log(res);
      await getData();
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async () => {
    try {
      const res = await api.patchRejectOrder(data.id);
      console.log(res);
      await getData();
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSuccess = async () => {
    try {
      const res = await api.patchTickOrderSuccess(data.id);
      console.log(res);
      await getData();
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  const renderActions = (status: string) => {
    switch (status) {
      case 'pending':
        return (
          <>
            <Button onClick={() => handleReject()} variant="contained" color="secondary" size="small">
              Hủy
            </Button>
            <Button onClick={() => handleDelivering()} variant="contained" color="primary" size="small">
              Giao
            </Button>
          </>
        );
      case 'delivering':
        return (
          <>
            <Button onClick={() => handleReject()} variant="contained" color="secondary" size="small">
              Hủy
            </Button>
            {/* <Button onClick={() => handleSubmit()} variant="contained" color="primary" size="small">
              Về đang chờ
            </Button> */}
            <Button onClick={() => handleSuccess()} variant="contained" color="primary" size="small">
              Đã giao
            </Button>
          </>
        );
      case 'success':
        return null;
      case 'reject':
        return null;
      case 'cancel':
        return null;
      default:
        return 'Không xác định';
    }
  };

  return (
    <>
      <Dialog fullWidth maxWidth="sm" open={isOpen} aria-labelledby="max-width-dialog-title">
        <DialogContent>
          <Typography variant="h5" color="textPrimary">
            {`Chi tiết đơn hàng ( ${parseStatus(data.status)} )`}
          </Typography>
          <br />
          <div className={classes.product_list}>
            {data?.items?.map((item: any, index: number) => {
              return (
                <div className={classes.product_item_wrapper} key={index}>
                  <div className={classes.product_item}>
                    <img style={{ width: '70px', marginRight: '5px' }} src={item.product.image} />
                    <Typography variant="body2" color="textPrimary">
                      {`${item.quantity} ${item.product.name}`}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="body2" color="textPrimary">
                      {formatterVnd(item.product.price * item.quantity)}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={classes.product_item_wrapper}>
            <Typography variant="body1" color="textPrimary">
              Tổng cộng:
            </Typography>
            {data.orderCash}
          </div>
          <Typography style={{ padding: '8px 0', color: 'blue' }} variant="body1" color="textPrimary">
            {/* {`Lời nhắn: ${(<div dangerouslySetInnerHTML={{ __html: data.message }} />)}`} */}
            <div dangerouslySetInnerHTML={{ __html: data.message }} />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          {renderActions(data.status)}
        </DialogActions>
      </Dialog>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) => ({
  product_list: {
    overflowY: 'scroll',
    maxHeight: 500,
  },
  product_item_wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 7px',
    justifyContent: 'space-between',
  },
  product_item: {
    display: 'flex',
    alignItems: 'center',
  },
}));

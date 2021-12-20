import React, { useEffect, useState } from 'react';
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

type IProps = {
  isOpen: boolean;
  handleClose: () => void;
};

const handleSubmit = () => {};

export default function ResetPasswordModal({ isOpen, handleClose }: IProps) {
  const [values, setValues] = useState<any>({
    username: '',
    password: '',
  });

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

  const handleSelectChange = (e: React.ChangeEvent<any>) => {
    const { target } = e;
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <Dialog fullWidth maxWidth="sm" open={isOpen} aria-labelledby="max-width-dialog-title">
        <DialogContent>
          <Typography variant="h6" color="textPrimary">
            Sửa sản phẩm
          </Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                value={values.name}
                onChange={handleInputChange}
                fullWidth
                id="title"
                label="Tên sản phẩm"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="price"
                value={values.price}
                onChange={handleInputChange}
                fullWidth
                id="price"
                label="Giá"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="quantity"
                value={values.quantity}
                onChange={handleInputChange}
                fullWidth
                id="quantity"
                label="Số lượng"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="vote"
                value={values.vote}
                onChange={handleInputChange}
                fullWidth
                id="vote"
                label="Đánh giá"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={12} className="my-10">
              <ImageField name="category_image_field" value={values.image} url={values.image} onChange={handleImageFieldChange} />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Đóng
          </Button>
          <Button onClick={() => handleSubmit()} variant="contained" color="primary" size="small">
            Sửa
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

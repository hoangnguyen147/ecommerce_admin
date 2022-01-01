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
import { putUpdateProduct } from 'apis/product.api';

type IProps = {
  isOpen: boolean;
  handleClose: () => void;
  data: any;
  cat: any;
  getData: any;
};

export default function EditProductModal({ isOpen, handleClose, data, cat, getData }: IProps) {
  const [values, setValues] = useState<any>({
    name: '',
    category_id: '',
    image: '',
    price: '',
    quantity: '',
    overview: '',
  });

  const [isUri, setIsUri] = useState<boolean>(false);

  useEffect(() => {
    setValues(data);
    setIsUri(false);
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

  const handleSelectChange = (e: React.ChangeEvent<any>) => {
    const { target } = e;
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await putUpdateProduct(data.id, values);
      handleClose();
      await getData();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeToUriText = () => {
    setValues({
      ...values,
      image: isUri ? data.image : '',
    });
    setIsUri(!isUri);
  };

  return (
    <>
      <Dialog fullWidth maxWidth="sm" open={isOpen} aria-labelledby="max-width-dialog-title">
        <DialogContent>
          <Typography variant="h5" color="textPrimary">
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
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Nhóm sản phẩm</InputLabel>
                <Select
                  name="category_id"
                  value={values.category_id}
                  onChange={handleSelectChange}
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Nhóm sản phẩm"
                  fullWidth
                >
                  {cat?.map((item: any) => {
                    return (
                      <MenuItem key={item.id} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
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
                name="overview"
                value={values.overview}
                onChange={handleInputChange}
                fullWidth
                id="overview"
                label="Tính năng"
                variant="outlined"
                multiline
                rows={4}
                maxRows={5}
              />
            </Grid>
            <Grid item xs={12} md={12} className="my-10">
              <Typography
                style={{ padding: '10px 4px', cursor: 'pointer', display: 'inline-block' }}
                variant="h6"
                color="textPrimary"
                onClick={() => handleChangeToUriText()}
              >
                Thêm hình ảnh
              </Typography>
              {!isUri ? (
                <ImageField
                  name="category_image_field"
                  value={values.image}
                  url={values.image}
                  onChange={handleImageFieldChange}
                />
              ) : (
                <TextField
                  name="image"
                  value={values.image}
                  onChange={handleInputChange}
                  fullWidth
                  id="uri"
                  label="Hình ảnh"
                  variant="outlined"
                />
              )}
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

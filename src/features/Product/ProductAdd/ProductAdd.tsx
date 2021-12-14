import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import useGet from 'hooks/useGet';
import { postAddProduct } from 'apis/product.api';
import { useDispatch } from 'react-redux';
import { enqueueSnackbarAction } from 'redux/actions/app.action';
import { ImageField } from 'components/molecules/ImageField/ImageField';

function ProductAdd() {
  const { data } = useGet('/category', {}, true, 0);
  const dispatch = useDispatch();
  const [values, setValues] = useState<any>({
    name: '',
    category_id: '',
    image: '',
    price: '',
    quantity: '',
    vote: '',
  });

  const resetForm = () =>
    setValues({
      name: '',
      category_id: '',
      image: '',
      price: '',
      quantity: '',
      vote: '',
    });

  // này làm vội nên xài any thôi khỏi phải khai báo DTO v:

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<any>) => {
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
      const res = await postAddProduct(values);
      dispatch(
        enqueueSnackbarAction({
          key: new Date().getTime() + 3000,
          message: 'Thêm sản phẩm thành công',
          variant: 'success',
        }),
      );
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={12}>
          <h2>Thêm sản phẩm</h2>
        </Grid>
      </Grid>
      <Grid>
        <h3>Thông tin sản phẩm</h3>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField name="name" value={values.name} onChange={handleInputChange} fullWidth variant="outlined" label="Tên" />
        </Grid>
        <Grid item xs={12} md={6}>
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
              {data?.map((item: any) => {
                return (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            name="price"
            value={values.price}
            onChange={handleInputChange}
            type="number"
            fullWidth
            variant="outlined"
            label="Giá"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="quantity"
            value={values.quantity}
            onChange={handleInputChange}
            type="number"
            fullWidth
            variant="outlined"
            label="Số lượng"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="vote"
            value={values.vote}
            onChange={handleInputChange}
            type="number"
            fullWidth
            variant="outlined"
            label="Đánh giá"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <h4>Thêm hình ảnh</h4>
        </Grid>
        <Grid item xs={12} md={12} className="my-10">
          <ImageField name="category_image_field" value={values.image} url={values.image} onChange={handleImageFieldChange} />
        </Grid>
        <br />
        <Grid container justify="flex-end" className="my-20">
          <Button onClick={() => resetForm()} color="primary">
            Add More
          </Button>
        </Grid>
        <Grid container item sm={12} md={12} justify="flex-end">
          <Button variant="outlined" color="primary" className="mr-20">
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()} color="primary" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductAdd;

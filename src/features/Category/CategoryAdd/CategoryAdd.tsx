import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import useGet from 'hooks/useGet';
import { useDispatch } from 'react-redux';
import { enqueueSnackbarAction } from 'redux/actions/app.action';
import { postAddCategory } from 'apis/category.api';
import { PhotoAlbumOutlined, PhotoCamera } from '@material-ui/icons';
import { Input, Typography } from '@material-ui/core';
import { ImageField } from 'components/molecules/ImageField/ImageField';

function CategoryAdd() {
  const { data } = useGet('/category', {}, true, 0);
  const dispatch = useDispatch();
  const [values, setValues] = useState<any>({
    name: '',
    image: '',
    description: '',
  });

  const [isUri, setIsUri] = useState<boolean>(false);

  const handleChangeToUriText = () => {
    setValues({
      ...values,
      image: '',
    });
    setIsUri(!isUri);
  };

  const resetForm = () =>
    setValues({
      name: '',
      image: '',
      description: '',
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
      console.log('alo');
      const res = await postAddCategory(values);
      dispatch(
        enqueueSnackbarAction({
          key: new Date().getTime() + 3000,
          message: 'Thêm danh mục thành công',
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
          <h2>Thêm danh mục</h2>
        </Grid>
      </Grid>
      <Grid>
        <h3>Thông tin danh mục</h3>
      </Grid>
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField name="name" value={values.name} onChange={handleInputChange} fullWidth variant="outlined" label="Tên" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="description"
            value={values.description}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            label="Mô tả"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            style={{ padding: '10px 4px', cursor: 'pointer', display: 'inline-block' }}
            variant="h6"
            color="textPrimary"
            onClick={() => handleChangeToUriText()}
          >
            Thêm hình ảnh
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} className="my-10">
          {!isUri ? (
            <ImageField name="category_image_field" value={values.image} url={values.image} onChange={handleImageFieldChange} />
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
      <br />
      <br />

      <Grid container justify="flex-end" className="my-20">
        <Button onClick={() => resetForm()} color="primary">
          Add More
        </Button>
      </Grid>
      <br />
      <Grid container item sm={12} md={12} justify="flex-end">
        <Button variant="outlined" color="primary" className="mr-20">
          Cancel
        </Button>
        <Button onClick={() => handleSubmit()} color="primary" variant="contained">
          Submit
        </Button>
      </Grid>
    </>
  );
}

export default CategoryAdd;

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

function CategoryAdd() {
  const { data } = useGet('/category', {}, true, 0);
  const dispatch = useDispatch();
  const [values, setValues] = useState<any>({
    name: '',
    image: '',
    description: '',
  });

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
        <Grid item xs={12} md={4}>
          <TextField name="name" value={values.name} onChange={handleInputChange} fullWidth variant="outlined" label="Tên" />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="description"
            value={values.description}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            label="Mô tả"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            name="image"
            value={values.image}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            label="Hình ảnh"
          />
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

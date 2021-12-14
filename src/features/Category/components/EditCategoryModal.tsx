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
import { getAllCategory } from 'apis/category.api';

type IProps = {
  isOpen: boolean;
  handleClose: () => void;
  data: any;
};

export default function EditCategoryModal({ isOpen, handleClose, data }: IProps) {
  const [values, setValues] = useState<any>({
    name: '',
    category_id: '',
    image: '',
    price: '',
    quantity: '',
    vote: '',
  });

  const [listCat, setListCat] = useState<any>();

  console.log(data);

  const getCategory = async () => {
    try {
      const res: any = await getCategory();
      console.log(res);
      setListCat(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategory();
    setValues(data);
  }, []);

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
                label="Title"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Severity</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Severity"
                  value="low"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="high">High</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="image"
                value={values.image}
                onChange={handleInputChange}
                fullWidth
                id="author"
                label="Author"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="quantity"
              value={values.quantity}
              onChange={handleInputChange}
              fullWidth
              id="author"
              label="Author"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="vote"
              value={values.vote}
              onChange={handleInputChange}
              fullWidth
              id="author"
              label="Author"
              variant="outlined"
            />
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button variant="contained" color="primary" size="small">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

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
import { putUpdateCategory } from 'apis/category.api';

type IProps = {
  isOpen: boolean;
  handleClose: () => void;
  data: any;
  getData: any;
};

export default function EditCategoryModal({ isOpen, handleClose, data, getData }: IProps) {
  const [values, setValues] = useState<any>({
    name: '',
    description: '',
    image: '',
  });

  const [isUri, setIsUri] = useState<boolean>(false);

  useEffect(() => {
    setValues(data);
    setIsUri(false);
  }, [data]);

  const handleChangeToUriText = () => {
    setValues({
      ...values,
      image: isUri ? data.image : '',
    });
    setIsUri(!isUri);
  };

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
      const res = await putUpdateCategory(data.id, values);
      handleClose();
      await getData();
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Dialog fullWidth maxWidth="sm" open={isOpen} aria-labelledby="max-width-dialog-title">
        <DialogContent>
          <Typography variant="h6" color="textPrimary">
            S???a danh m???c
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
                label="T??n danh m???c"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="description"
                value={values.description}
                onChange={handleInputChange}
                fullWidth
                id="description"
                label="M?? t???"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} md={12} className="my-10">
              <Typography
                style={{ padding: '10px 4px', cursor: 'pointer', display: 'inline-block' }}
                variant="h6"
                color="textPrimary"
                onClick={() => handleChangeToUriText()}
              >
                Th??m h??nh ???nh
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
                  label="H??nh ???nh"
                  variant="outlined"
                />
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ????ng
          </Button>
          <Button onClick={() => handleSubmit()} variant="contained" color="primary" size="small">
            S???a
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

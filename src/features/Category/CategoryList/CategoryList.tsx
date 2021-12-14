import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// material core
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import * as api from 'apis/category.api';

// atomic
import PaginationBase from 'components/molecules/PaginationBase';

// configs
import { PATH_NAME } from 'configs';

// helpers
import { canAction } from 'helpers';

// hooks
import usePagination from 'hooks/usePagination';
import useGet from 'hooks/useGet';
import { IconButton } from '@material-ui/core';
import EditCategoryModal from '../components/EditCategoryModal';

function CategoryList() {
  const history = useHistory();
  const { page, perPage, _changePage, _changePerPage } = usePagination();
  const [data, setData] = useState<any>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [item, setItem] = useState('');

  const getData = async () => {
    try {
      const res = await api.getAllCategory();
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (data: any) => {
    setItem(data);
    console.log(data);
    setIsEdit(true);
  };

  return (
    <div>
      {canAction('create', 'product') ? (
        <Grid container justify="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => history.push(PATH_NAME.PRODUCT_ADD)}
          >
            Add Product
          </Button>
        </Grid>
      ) : null}
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tên</TableCell>
              <TableCell>Mô tả</TableCell>
              <TableCell>Hình ảnh</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data?.map((row: any) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.image}</TableCell>
                  <TableCell>
                    <IconButton color="primary" aria-label="edit user" component="span" onClick={() => handleEdit(row)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBase pageIndex={page} perPage={perPage} totalPage={50} changePage={_changePage} changePerPage={_changePerPage} />

      <EditCategoryModal isOpen={isEdit} handleClose={() => setIsEdit(false)} data={item} />
    </div>
  );
}

export default CategoryList;

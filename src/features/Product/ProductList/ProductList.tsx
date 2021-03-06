import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchSelector } from 'redux/selectors/app.selector';
import { formatterVnd } from 'utils/formatNumber';

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
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import DeleteForever from '@material-ui/icons/DeleteForever';

import * as api from 'apis/product.api';

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
import EditProductModal from '../components/EditProductModal';

function ProductList() {
  const history = useHistory();
  const { page, perPage, _changePage, _changePerPage } = usePagination();
  const [data, setData] = useState<any>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [item, setItem] = useState('');

  const cat = useGet('/category', {}, true, 0);

  const searchContent = useSelector(searchSelector);

  console.log(searchContent);

  const getData = async () => {
    try {
      const res = await api.getAllProduct();
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

  const handleSetHot = async (id: string) => {
    try {
      const res = await api.patchSetHot(id);
      console.log(res);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await api.deleteProduct(id);
      console.log(res);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  console.log(page, perPage);

  const filterData =
    data &&
    data.filter((item: any) => {
      return item.name.toLowerCase().includes(searchContent.toLowerCase());
    });

  // .slice((curPage - 1) * dataPerPage, curPage * dataPerPage)

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
              <TableCell align="center">T??n</TableCell>
              <TableCell align="center">Danh m???c</TableCell>
              <TableCell align="center">H??nh ???nh</TableCell>
              <TableCell align="center">S??? l?????ng</TableCell>
              <TableCell align="center">Gi??</TableCell>
              <TableCell align="center">????nh gi??</TableCell>
              <TableCell align="center">C??ng c???</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData &&
              filterData?.slice((page - 1) * perPage, page * perPage).map((row: any, index: number) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {(page - 1) * perPage + index + 1}
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.category.name}</TableCell>
                  <TableCell align="center">
                    <img src={row.image} width="180" />
                  </TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{formatterVnd(row.price)}</TableCell>
                  <TableCell align="center">{row.vote.toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <Grid container>
                      <Grid item xs={4}>
                        <IconButton color="primary" aria-label="edit user" component="span" onClick={() => handleEdit(row)}>
                          <EditIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={4}>
                        <IconButton aria-label="edit user" component="span" onClick={() => handleSetHot(row.id)}>
                          {row.is_hot ? <Star style={{ color: 'green' }} /> : <StarBorder style={{ color: 'green' }} />}
                        </IconButton>
                      </Grid>
                      <Grid item xs={4}>
                        <IconButton aria-label="edit user" component="span" onClick={() => handleDelete(row.id)}>
                          <DeleteForever style={{ color: 'tomato' }} />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBase
        pageIndex={page}
        perPage={perPage}
        totalPage={Math.ceil(filterData.length / perPage)}
        changePage={_changePage}
        changePerPage={_changePerPage}
      />

      <EditProductModal getData={getData} isOpen={isEdit} handleClose={() => setIsEdit(false)} data={item} cat={cat?.data} />
    </div>
  );
}

export default ProductList;

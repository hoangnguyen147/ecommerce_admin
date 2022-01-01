import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { searchSelector } from 'redux/selectors/app.selector';

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
import DeleteForever from '@material-ui/icons/DeleteForever';

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

  const searchContent = useSelector(searchSelector);

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

  const handleDelete = async (id: string) => {
    try {
      const res = await api.deleteCategory(id);
      console.log(res);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const filterData =
    data &&
    data.filter((item: any) => {
      return item.name.toLowerCase().includes(searchContent.toLowerCase());
    });

  return (
    <div>
      {canAction('create', 'product') ? (
        <Grid container justify="flex-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => history.push(PATH_NAME.CATEGORY_ADD)}
          >
            Add Category
          </Button>
        </Grid>
      ) : null}
      <br />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">Tên</TableCell>
              <TableCell align="center">Mô tả</TableCell>
              <TableCell align="center">Hình ảnh</TableCell>
              <TableCell align="center">Công cụ</TableCell>
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
                  <TableCell align="center">
                    <div dangerouslySetInnerHTML={{ __html: row.description }} />
                  </TableCell>
                  <TableCell align="center">
                    <img src={row.image} width="180" />
                  </TableCell>
                  <TableCell align="center">
                    <Grid container>
                      <Grid item xs={6}>
                        <IconButton color="primary" aria-label="edit user" component="span" onClick={() => handleEdit(row)}>
                          <EditIcon />
                        </IconButton>
                      </Grid>
                      <Grid item xs={6}>
                        <IconButton color="primary" aria-label="edit user" component="span" onClick={() => handleDelete(row.id)}>
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

      <EditCategoryModal getData={getData} isOpen={isEdit} handleClose={() => setIsEdit(false)} data={item} />
    </div>
  );
}

export default CategoryList;

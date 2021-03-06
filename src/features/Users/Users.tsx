import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { searchSelector } from 'redux/selectors/app.selector';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import * as api from 'apis/user.api';
import usePagination from 'hooks/usePagination';
import PaginationBase from 'components/molecules/PaginationBase';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, email: string, role: string) {
  return { name, email, role };
}

const rows = [
  createData('Tony Nguyen', 'nhattruong1811@gmail.com', 'ADMIN'),
  createData('David Name', 'david@gmail.com', 'OPERATOR'),
];

export default function UserList() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState<any>();
  const { page, perPage, _changePage, _changePerPage } = usePagination();

  const searchContent = useSelector(searchSelector);

  const getData = async () => {
    const res: any = await api.getAllUser();
    setData(res.data);
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  const filterData =
    data &&
    data.filter((item: any) => {
      return (
        item.fullname.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.username.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.email.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.phone.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.address.toLowerCase().includes(searchContent.toLowerCase())
      );
    });

  return (
    <>
      <Grid container alignItems="center">
        <Grid sm={8}>
          <h2>User</h2>
        </Grid>
        <Grid sm={4} container justify="flex-end">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<AddIcon />}
            onClick={() => history.push('/user/add')}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>T??i kho???n</TableCell>
              <TableCell>H??? t??n</TableCell>
              <TableCell>?????a ch???</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>S??T</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>C??ng c???</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData?.map((row: any) => (
              <TableRow key={row.id}>
                <TableCell>{row.username}</TableCell>
                <TableCell component="th" scope="row">
                  {row.fullname}
                </TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.is_admin ? 'Admin' : 'User'}</TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="edit user" component="span">
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBase
        pageIndex={page}
        perPage={perPage}
        totalPage={Math.ceil(filterData?.length / perPage)}
        changePage={_changePage}
        changePerPage={_changePerPage}
      />
    </>
  );
}

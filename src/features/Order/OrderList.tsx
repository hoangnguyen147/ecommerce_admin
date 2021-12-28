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
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import { parseShortTime } from 'utils/parseTime';

import * as api from 'apis/order.api';

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
import OrderDetailModal from './components/OrderDetailModal';
import { parseStatus } from './utils/parseStatus';

function OrderList() {
  const history = useHistory();
  const { page, perPage, _changePage, _changePerPage } = usePagination();
  const [data, setData] = useState<any>('');
  const [isViewDetail, setIsViewDetail] = useState<boolean>(false);
  const [detail, setDetail] = useState<any>('');
  const [item, setItem] = useState('');

  const cat = useGet('/category', {}, true, 0);

  const searchContent = useSelector(searchSelector);

  const getData = async () => {
    try {
      const res = await api.getAllOrder();
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const viewDetail = (data: any) => {
    setDetail(data);
    setIsViewDetail(true);
  };

  console.log(page, perPage);

  const filterData =
    data &&
    data.filter((item: any) => {
      return (
        item.userCreate?.fullname.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.userCreate?.username.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.userCreate?.email.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.userCreate?.phone.toLowerCase().includes(searchContent.toLowerCase()) ||
        item.userCreate?.address.toLowerCase().includes(searchContent.toLowerCase())
      );
    });

  const productCash = (item: any) => {
    return item.product.price * item.quantity;
  };

  const orderCash = (items: any) => {
    let sum = 0;
    items.forEach((item: any) => {
      sum += productCash(item);
    });
    return formatterVnd(sum);
  };

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
              <TableCell align="center">Tên người đặt hàng</TableCell>
              <TableCell align="center">SĐT</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Địa chỉ</TableCell>
              <TableCell align="center">Tổng đơn giá</TableCell>
              <TableCell align="center">Ngày đặt hàng</TableCell>
              <TableCell align="center">Trạng thái</TableCell>
              <TableCell align="center">Công cụ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData &&
              filterData?.slice((page - 1) * perPage, page * perPage).map((row: any, index: number) => {
                const sumCash: string = orderCash(row.items);
                return (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {(page - 1) * perPage + index + 1}
                    </TableCell>
                    <TableCell align="center">{row.userCreate?.fullname}</TableCell>
                    {/* <TableCell align="center">
                      <img src={row.image} width="180" />
                    </TableCell> */}
                    <TableCell align="center">{row.userCreate?.phone}</TableCell>
                    <TableCell align="center">{row.userCreate?.email}</TableCell>
                    <TableCell align="center">{row.userCreate?.address}</TableCell>
                    <TableCell align="center">{orderCash(row.items)}</TableCell>
                    <TableCell align="center">{parseShortTime(row.created_at)}</TableCell>
                    <TableCell align="center">{parseStatus(row.status)}</TableCell>
                    <TableCell align="center">
                      <Grid container>
                        <Grid item xs={6}>
                          <IconButton
                            color="primary"
                            aria-label="edit user"
                            component="span"
                            onClick={() => viewDetail({ ...row, orderCash: sumCash })}
                          >
                            <InfoOutlined />
                          </IconButton>
                        </Grid>
                        <Grid item xs={6}>
                          <IconButton aria-label="edit user" component="span">
                            <DeleteForever style={{ color: 'tomato' }} />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
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
      <OrderDetailModal isOpen={isViewDetail} handleClose={() => setIsViewDetail(false)} data={detail} getData={getData} />
    </div>
  );
}

export default OrderList;

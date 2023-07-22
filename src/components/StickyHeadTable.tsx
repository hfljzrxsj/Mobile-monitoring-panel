import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import FormDialog from './FormDialog';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import SnackbarAlert from './SnackbarAlert';
import styleModule from '../style/Manager.module.scss';
// type alignType = 'right' | 'inherit' | 'left' | 'center' | 'justify';
interface Column {
  id: 'id' | 'username' | 'password' | 'permission';
  label: string;
  minWidth?: number;
  align?: 'center';
  // format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: '工号', minWidth: 0 },
  { id: 'username', label: '用户名', minWidth: 0 },
  { id: 'password', label: '密码', minWidth: 0 },
  { id: 'permission', label: '权限', minWidth: 0 },
];


// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];
type severityType = 'success' | 'info' | 'warning' | 'error';

interface propsTypes {
  rows: {
    id: number;
    username: string;
    password: string;
    permission: 0 | 1;
  }[];
  action: () => void;
}
interface FormDiaDataPropsTypes {
  id: number;
  username: string;
  password: string;
  // action: () => void;
}
export default function StickyHeadTable(props: propsTypes): JSX.Element {
  const { rows, action } = props;
  const [FormDialogOpen, setFormDialogOpen] = useState(false);
  const [FormDiaData, setFormDiaData] = useState<FormDiaDataPropsTypes>({ id: 0, username: '', password: '' });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [DialogOpen, setDialogOpen] = useState(false);
  const [ToastOpen, setToastOpen] = useState(false);
  const [ToastText, setToastText] = useState<{ severity: severityType; alertText: string; }>({ severity: 'warning', alertText: '暂无数据' });
  const [delId, setDelId] = useState(0);
  const handleToastOpen = (obj: { severity: severityType; alertText: string; }) => {
    setToastText(obj);
    setToastOpen(true);
  };
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align='center'
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell
                style={{ minWidth: 0 }}
                align='center'
              >
                {'操作'}
              </TableCell>
            </TableRow>
          </TableHead>
          {rows.length !== 0 && <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}>
                    {columns.map((column) => {
                      // console.log(row['permission'] ? '普通用户' : '管理员');
                      const value = column.id === 'permission' ? (row.id === 1 ? '管理员' : '普通用户') : row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align='center'>
                          {value}
                        </TableCell>
                      );
                    })}
                    <TableCell
                      align='center'
                    >
                      <Button
                        variant='outlined'
                        onClick={() => {
                          setFormDiaData({ id: row.id, username: row.username, password: row.password });
                          setFormDialogOpen(true);
                        }}
                        mx={1}
                        className={styleModule['button'] as string}
                        sx={{ mr: 1 }}
                        disabled={row.id === 1}
                      >
                        {'修改'}
                      </Button>
                      <Button
                        variant='outlined'
                        onClick={() => (setDelId(row.id), setDialogOpen(true))}
                        mx={1}
                        className={styleModule['button'] as string}
                        sx={{ ml: 1 }}
                        disabled={row.id === 1}
                      >
                        {'删除'}
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {FormDialogOpen && <FormDialog
        action={action}
        open={FormDialogOpen}
        handleClose={() => setFormDialogOpen(false)}
        {...FormDiaData as FormDiaDataPropsTypes}
        type='update'
        handleToastOpen={handleToastOpen}
      />}
      <SnackbarAlert
        ToastOpen={ToastOpen}
        setToastOpen={setToastOpen}
        severity={ToastText.severity}
        alertText={ToastText.alertText}
      />
      <Dialog
        open={DialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'确认要删除吗 ? '}
        </DialogTitle>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>{'取消'}</Button>
          <Button
            onClick={() =>
            (setDialogOpen(false), fetch('api/delete', {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ id: delId })
            }).then(e => e.json()).then(e => {
              if (e.code === 200) {
                handleToastOpen({ severity: 'success', alertText: '删除成功' });
                action();
              }
              else {
                handleToastOpen({ severity: 'error', alertText: '删除失败' });
              }
            }).catch(() => {
              handleToastOpen({ severity: 'error', alertText: '删除失败' });
            }))
            }
            autoFocus
          >
            {'确认'}
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
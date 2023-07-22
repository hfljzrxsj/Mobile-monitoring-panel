import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// import SnackbarAlert from './SnackbarAlert';

import { useState } from 'react';
type severityType = 'success' | 'info' | 'warning' | 'error';
interface propsTypes {
  id: number;
  username: string;
  password: string;
  action: () => void;
  handleClose: () => void;
  open: boolean;
  type: 'add' | 'update';
  handleToastOpen: (obj: { severity: severityType; alertText: string; }) => void;
}

export default function FormDialog(props: propsTypes): JSX.Element {
  // const [ToastOpen, setToastOpen] = useState(false);
  // const [ToastText, setToastText] = useState<{ severity: severityType; alertText: string; }>({ severity: 'error', alertText: '修改失败' });

  // const handleToastOpen = (obj: { severity: severityType; alertText: string; }) => {
  //   setToastText(obj);
  //   setToastOpen(true);
  // };
  const { id, username, password, handleClose, open, action, type, handleToastOpen } = props;
  const message = type === 'add' ? '新增' : '修改';
  const [NewUsername, setNewUsername] = useState(username);
  const [NewPassword, setNewPassword] = useState(password);
  const fetchServer = (url: string) => {
    if (NewUsername === '') {
      handleToastOpen({ severity: 'error', alertText: '用户名不能为空' });
      return;
    }
    if (NewPassword === '') {
      handleToastOpen({ severity: 'error', alertText: '密码不能为空' });
      return;
    }
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        username: NewUsername,
        password: NewPassword,
        // permission: e.parentNode.parentNode.querySelectorAll('td')[3].querySelector('select').value
        permission: 1
      })
    }).then(e => e.json()).then(e => {
      if (e.code === 400) {
        handleToastOpen({ severity: 'error', alertText: '用户名相同' });
        return;
      }
      handleClose();
      handleToastOpen({ severity: 'success', alertText: `${message}成功` });
      action();
    }).catch(() => {
      handleToastOpen({ severity: 'error', alertText: `${message}失败` });
    });

  };
  return (
    <React.StrictMode>
      <Dialog
        open={open}
        onClose={handleClose}

      >
        <DialogTitle>{`${message}用户信息`}</DialogTitle>
        <DialogContent
          sx={{ flex: 1, px: 10, flexDirection: 'column', display: 'flex', gap: 2 }}
        >
          <TextField
            required
            autoFocus
            margin="dense"
            label="请输入用户名"
            defaultValue={username}
            variant="filled"
            onChange={(e) => setNewUsername(e.target.value)}
            error={NewUsername === ''}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            label="请输入密码"
            defaultValue={password}
            variant="filled"
            onChange={(e) => setNewPassword(e.target.value)}
            error={NewPassword === ''}
          />
          <TextField
            required
            autoFocus
            margin="dense"
            label="请输入权限"
            defaultValue='普通用户'
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>{'取消'}</Button>
          <Button onClick={() => fetchServer(`api/${type}`)}>{'确认'}</Button>
        </DialogActions>

      </Dialog>
      {/* <SnackbarAlert
        ToastOpen={ToastOpen}
        setToastOpen={setToastOpen}
        severity={ToastText.severity}
        alertText={ToastText.alertText}
      /> */}
    </React.StrictMode>
  );
}

'use strict';
import * as React from 'react';
// import Typography from '@mui/material/Typography';
import styleModule from '../style/Login.module.scss';
import { Checkbox, Button } from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SnackbarAlert from './SnackbarAlert';
type severityType = 'success' | 'info' | 'warning' | 'error';
export default function Login(): JSX.Element {
  const [loginData, setLoginData] = useState<{ username: string; password: string; remember: 1 | 0 }>({ username: '', password: '', remember: 0 });
  const [ToastOpen, setToastOpen] = useState(false);
  const [ToastText, setToastText] = useState<{ severity: severityType; alertText: string; }>({ severity: 'error', alertText: '' });
  const handleToastOpen = (obj: { severity: severityType; alertText: string; }) => {
    setToastText(obj);
    setToastOpen(true);
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin =
    useCallback(
      () => {
        fetch('api/login', {
          method: 'POST'
          , headers: {
            'Content-Type': 'application/json'
          }
          , body: JSON.stringify(loginData)
        }).then(e => {
          if (e.status !== 200) {
            localStorage.clear();
            handleToastOpen({ severity: 'error', alertText: '账号或密码错误' });
            return Promise.reject();
          }
          return e.json();
        }).then(e => {
          if (e.code !== 200) {
            localStorage.clear();
            handleToastOpen({ severity: 'error', alertText: '账号或密码错误' });
            return Promise.reject();
          }
          localStorage['username'] = e.username;
          localStorage['permission'] = e.permission;
          handleToastOpen({ severity: 'success', alertText: '登录成功' });
          location.reload();
          return;
        }).catch(() => handleToastOpen({ severity: 'error', alertText: '账号或密码错误' }));
      }, [loginData]);

  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (loginData.username.length === 0 || loginData.password.length === 0) return;
      handleLogin();
    }
  };
  useEffect(() => {
    const handleGlobalKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        if (loginData.username.length === 0 || loginData.password.length === 0) return;
        handleLogin();
      }
    };
    document.addEventListener('keydown', handleGlobalKeyPress);

    return () => {
      document.removeEventListener('keydown', handleGlobalKeyPress);
    };
  }, [handleLogin, loginData.password.length, loginData.username.length]);
  return (
    <React.StrictMode>
      <Box
        className={styleModule['Login']}
      >
        <Box>
          <Box>
            <p
            >
              {'登录到你的医学影像识别系统账户'}</p>
          </Box>
          <form>
            <TextField
              required
              label="用户名"
              variant="filled"
              className={styleModule['Login-TextField'] as string}
              sx={{ width: '100%' }}
              onChange={e => setLoginData({ ...loginData, username: e.target.value })}
              onKeyDown={handleEnterPress}
            />
            <FormControl
              sx={{ m: 1, width: '25ch' }}
              variant="filled"
            >
              <InputLabel htmlFor="filled-adornment-password">{'密码'}</InputLabel>
              <FilledInput
                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                onKeyDown={handleEnterPress}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            {/* <TextField
              label="密码"
              type="password"
              autoComplete="current-password"
              variant="filled"
              className={styleModule['Login-TextField'] as string}
              sx={{ width: '100%' }}
              onChange={e => setLoginData({ ...loginData, password: e.target.value })}
            /> */}
            <Box><Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              onChange={e => setLoginData({ ...loginData, remember: e.target.checked ? 1 : 0 })}
              checked={loginData.remember === 1}
            /><span>{'记住我'}</span></Box>
            <Button
              variant="contained"
              size="large"
              // sx={{ width: '100%' }}
              disabled={loginData.username.length === 0 || loginData.password.length === 0}
              onClick={() => handleLogin()}
            >{'登录'}</Button>
          </form>
          <Box />
        </Box>
      </Box><footer
        className={styleModule['Login-footer'] as string}
      >
        {''}
      </footer>
      <SnackbarAlert
        ToastOpen={ToastOpen}
        setToastOpen={setToastOpen}
        severity={ToastText.severity}
        alertText={ToastText.alertText}
      />
    </React.StrictMode>
  );
}
import { StrictMode, useEffect, useState } from "react";
import { TextField, Button, Box, type TextFieldVariants } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getScode, loginAction } from "@/actions";
import { useSetState, useUpdateEffect } from 'ahooks';
import { useDispatch } from "react-redux";
import style from './_index.module.scss';

const commonProps: { readonly className: string, readonly variant: TextFieldVariants; } = { className: style['input'] ?? '', variant: 'outlined' };
export default function Login () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useSetState({
    adminId: '',
    password: '',
    scode: '',
  });
  const [click, setClick] = useState(false);
  const { adminId, password, scode } = value;
  const adminIdVavid = /\w{6,20}/.test(adminId);
  const passwordVavid = /\w{6,20}/.test(password);
  const scodeVavid = /\w{4}/.test(scode);
  const notVavidSoError = (value = '', vavid = true, valueText = '', vavidText = '') => ({
    ...commonProps, ...(() => {
      if (!click) return {};
      if (!value)
        return ({ error: true, helperText: valueText });
      if (!vavid)
        return ({ error: true, helperText: vavidText });
      return {};
    })()
  });
  useUpdateEffect(() => {
    setClick(false);
  }, [adminIdVavid, passwordVavid, scodeVavid]);
  const [imgBase64, setImgBase64] = useState('');
  const refreshScope = () => getScode().then(e => setImgBase64(e));
  useEffect(() => {
    refreshScope();
  }, []);
  return (
    <StrictMode>
      <div className={style['loginBody']}>
        <div>
          <h3>移动监控面板</h3>
          <TextField
            label="账号"
            defaultValue="1038762"
            onChange={e => setValue({
              adminId: e.target.value
            })}
            {...notVavidSoError(adminId, adminIdVavid, '请输入账号', '账号格式不正确')}
          />
          <TextField
            defaultValue='666666'
            label="密码"
            type="password"
            onChange={e => setValue({
              password: e.target.value
            })}
            {...notVavidSoError(password, passwordVavid, '请输入密码', '密码格式不正确')}
          />
          <img src={`data:image/jpeg;base64,${imgBase64}`} alt='No Network' onClick={() => refreshScope()} />
          <TextField
            label="验证码"
            onChange={e => setValue({
              scode: e.target.value
            })}
            {...notVavidSoError(scode, scodeVavid, '请输入验证码', '验证码格式不正确')}
          />
          <Button variant="contained" size="large" color="primary" onClick={() => {
            setClick(true);
            if (!adminIdVavid || !passwordVavid || !scodeVavid)
              return;
            (loginAction(value)(dispatch)).then(e => e ? navigate('/') : refreshScope()).catch(console.error);
          }}>
            登录
          </Button>
        </div>
      </div>
    </StrictMode>
  );
}
import { StrictMode, useEffect, useState } from "react";
import { TextField, type TextFieldVariants } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { getScode, loginAction } from "@/actions";
import { useRequest, useSetState, useUpdateEffect } from 'ahooks';
import { useDispatch } from "react-redux";
import style from './_index.module.scss';
import { LoadingButton } from "@mui/lab";
import type { snackbarAlertAction } from "@/store/SnackBarRuducer";
import type { Dispatch } from "redux";
import { commonUseRequestParams } from "@/App";

const commonProps: { readonly className: string, readonly variant: TextFieldVariants; } = { className: style['input'] ?? '', variant: 'outlined' };
export default function Login () {
  const navigate = useNavigate();
  const dispatch = useDispatch<Dispatch<snackbarAlertAction>>();
  const [value, setValue] = useSetState({
    adminId: '',
    password: '',
    scode: '',
  });
  const [click, setClick] = useState(false);
  const { adminId, password, scode } = value;
  const adminIdVavid = /^[A-Z]\d{6}$/.test(adminId);
  const passwordVavid = /^\w{6,20}$/.test(password);
  const scodeVavid = /^\w{5}$/.test(scode);
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
  const refreshScope = () => getScode().then(e => setImgBase64(e ?? ''));
  useEffect(() => {
    refreshScope();
  }, []);
  const { run, loading, } = useRequest(() => (loginAction(value)(dispatch)).then(e => e ? navigate('/') : refreshScope()).catch(console.error), {
    ...commonUseRequestParams,
    manual: true,
  });
  return (
    <StrictMode>
      <div className={style['loginBody']}>
        <div>
          <h3>H5终端营销活动监控看板</h3>
          <TextField
            label="账号"
            onChange={e => setValue({
              adminId: e.target.value
            })}
            {...notVavidSoError(adminId, adminIdVavid, '请输入账号', '账号格式不正确')}
            autoFocus
            autocomplete
            maxlength={7}
            pattern={/^\d{7}$/}
          // type="number"
          />
          <TextField
            label="密码"
            type="password"
            onChange={e => setValue({
              password: e.target.value
            })}
            {...notVavidSoError(password, passwordVavid, '请输入密码', '密码格式不正确')}
            maxlength={20}
            autocomplete
            pattern={/^\w{6,20}$/}
          />
          <img src={`data:image/jpeg;base64,${imgBase64}`} alt='No Network' onClick={() => refreshScope()} />
          <TextField
            label="验证码"
            onChange={e => setValue({
              scode: e.target.value
            })}
            {...notVavidSoError(scode, scodeVavid, '请输入验证码', '验证码格式不正确')}
            maxlength={5}
            autocomplete
            pattern={/^\w{5}$/}
          />
          <LoadingButton
            variant="contained"
            size="large"
            loading={loading}
            onClick={() => {
              setClick(true);
              if (!adminIdVavid || !passwordVavid || !scodeVavid)
                return;
              run();
            }}>
            登录
          </LoadingButton>
        </div>
      </div>
    </StrictMode>
  );
}
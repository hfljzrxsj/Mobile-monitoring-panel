import { enumActionName, enumSeverity, enumSnackbarAlert, type snackbarAlertAction } from "@/store/SnackBarRuducer";
import axios from "axios";
import type { Dispatch } from "redux";
import { v4 } from 'uuid';
interface commonResponse<T = null> {
  readonly code: number;
  readonly data: T;
  readonly info: string;
}
type commonActionType<T = {}, D = void> = (props: T) => (dispatch: Dispatch<snackbarAlertAction>) => Promise<D | void>;
const adminId = 'adminId';
const uuidString = 'uuid';
export const loginAction: commonActionType<{ readonly [adminId]: string, readonly password: string, readonly scode: string; }, boolean> = ({ adminId, password, scode }) => dispatch => axios.post<commonResponse>('/api/login', {
  adminId, password, scode, uuid: sessionStorage.getItem(uuidString)
}).then(e => {
  const { code, info } = e.data ?? {};
  if (e.status === 200 && code === 1000) {
    dispatch({ type: enumActionName.OPENTRUE, payload: { [enumSnackbarAlert.alertText]: '登录成功', [enumSnackbarAlert.severity]: enumSeverity.success } });
    setTimeout(() => {

    });
    return true;
  }
  Promise.reject(info);
  throw new Error(info);
}).catch(e => {
  dispatch({ type: enumActionName.OPENTRUE, payload: { [enumSnackbarAlert.alertText]: '登录失败', [enumSnackbarAlert.severity]: enumSeverity.error } });
  console.error(e);
});
export const getScode = () => axios.get<commonResponse<string>>('/api/scode/', {
  params: {
    [uuidString]: (() => {
      const v = v4().replaceAll('-', '');
      sessionStorage.setItem(uuidString, v);
      return v;
    })()
  }
}).then(e => e?.data?.data);
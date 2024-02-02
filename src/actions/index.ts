import type { DistributionOfTerminalSalesArray } from "@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales";
import { enumActionName, enumSeverity, enumSnackbarAlert, type snackbarAlertAction } from "@/store/SnackBarRuducer";
import { number } from "prop-types";
import type { Dispatch } from "redux";
import { v4 } from 'uuid';
import { axios_instance, successCode } from "./axios_instance";
interface commonResponse<T = null> {
  readonly code: number;
  readonly data: T;
  readonly info: string;
}
type commonActionType<T = {}, D = void> = (props: T) => (dispatch: Dispatch<snackbarAlertAction>) => Promise<D | void>;
const adminIdString = 'adminId';
const uuidString = 'uuid';
export const JWT = 'JWT';
export const loginAction: commonActionType<{ readonly [adminIdString]: string, readonly password: string, readonly scode: string; }, boolean> = ({ adminId, password, scode }) => dispatch => axios_instance({
  url: '/api/user/login',
  params: { adminId, password, scode, uuid: sessionStorage.getItem(uuidString) }, method: "POST"
}).then(e => {
  const { code, info, data } = e.data ?? {};
  if (e.status === 200 && code === successCode) {
    dispatch({ type: enumActionName.OPENTRUE, payload: { [enumSnackbarAlert.alertText]: '登录成功', [enumSnackbarAlert.severity]: enumSeverity.success } });
    localStorage.setItem(JWT, data);
    localStorage.setItem(adminIdString, adminId);
    return true;
  }
  return Promise.reject(info);
  // throw new Error(info);
}).catch(e => {
  dispatch({ type: enumActionName.OPENTRUE, payload: { [enumSnackbarAlert.alertText]: String(e), [enumSnackbarAlert.severity]: enumSeverity.error } });
  console.error(e);
});
export const getScode = () => axios_instance.get<commonResponse<string>>('/api/scode/', {
  params: {
    [uuidString]: (() => {
      const v = v4().replaceAll('-', '');
      sessionStorage.setItem(uuidString, v);
      return v;
    })()
  }
}).then(e => e?.data?.data).catch(console.error);
export const getSalesVolumeMonitoring_DistributionOfTerminalSales = () => axios_instance.get<commonResponse<DistributionOfTerminalSalesArray>>('/api/SalesVolumeMonitoring/DistributionOfTerminalSales', {
  headers: {
    Authorization: localStorage.getItem(JWT) ?? '',
    adminId: localStorage.getItem(adminIdString) ?? ''
  }
}).then(e => e.data.data).catch(console.error);
export const testLogin = () => axios_instance.get<commonResponse>('/api/sell', {
  headers: {
    Authorization: localStorage.getItem(JWT) ?? '',
    adminId: localStorage.getItem(adminIdString) ?? ''
  }
}).then(e => e.data.code === successCode).catch(console.error);
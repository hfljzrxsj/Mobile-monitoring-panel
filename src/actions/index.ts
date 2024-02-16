import type { addressArrType } from "@/components/MyTable";
import type { data } from "@/echarts";
import type { DistributionOfTerminalSalesArray } from "@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales";
import type { SalesStructureOfTerminalPriceRangesArray } from "@/pages/SalesVolumeMonitoring/SalesStructureOfTerminalPriceRanges";
import { enumActionName, enumSeverity, enumSnackbarAlert, type snackbarAlertAction } from "@/store/SnackBarRuducer";
import axios from "axios";
import type { Dispatch } from "redux";
import { v4 } from 'uuid';
import { successCode, JWT, adminIdString, common, Authorization } from "./axios_instance";
interface commonResponse<T = null> {
  readonly code: number;
  readonly data: T;
  readonly info: string;
}
export interface typeType {
  readonly type: string;
}
// type commonActionType<T = {}, D = void> = (props: T) => (dispatch: Dispatch<snackbarAlertAction>) => Promise<D | void>;
const uuidString = 'uuid';
export const loginAction = ({ adminId, password, scode }: { readonly [adminIdString]: string, readonly password: string, readonly scode: string; }) => (dispatch: Dispatch<snackbarAlertAction>) => axios.post<commonResponse<string>>('/api/user/login', null, { params: { adminId, password, scode, uuid: sessionStorage.getItem(uuidString) } })
  .then(e => {
    const { code, info, data } = e.data ?? {};
    if (e.status === 200 && code === successCode) {
      dispatch({ type: enumActionName.OPENTRUE, payload: { [enumSnackbarAlert.alertText]: '登录成功', [enumSnackbarAlert.severity]: enumSeverity.success } });
      common[Authorization] = data;
      common[adminIdString] = adminId;
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
export const getScode = () => axios.get<commonResponse<string>>('/api/scode/', {
  params: {
    [uuidString]: (() => {
      const v = v4().replaceAll('-', '');
      sessionStorage.setItem(uuidString, v);
      return v;
    })()
  }
}).then(e => e?.data?.data).catch(console.error);
export const getSalesVolumeMonitoring_DistributionOfTerminalSales = () => axios.get<commonResponse<DistributionOfTerminalSalesArray>>('/api/SalesVolumeMonitoring/DistributionOfTerminalSales').then(e => e.data.data).catch(console.error);
export const getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges = () => axios.get<commonResponse<SalesStructureOfTerminalPriceRangesArray>>('/api/SalesVolumeMonitoring/SalesStructureOfTerminalPriceRanges').then(e => e.data.data).catch(console.error);
export const testLogin = () => axios.get<commonResponse>('/api/sell').then(e => e.data.code === successCode).catch(console.error);
export const getTerminalActivitySalesStructure = ({ type }: typeType) => axios.get<commonResponse<data>>('/api/SalesVolumeMonitoring/TerminalActivitySalesStructure', {
  params: {
    type
  }
}).then(e => e.data.data).catch(console.error);
export const getAddressList = ({ id }: {
  // readonly type: string;
  readonly id?: string;
}) => axios.get<commonResponse<addressArrType>>('/api/getAddressList', {
  params: {
    id
  }
}).then(e => e.data.data).catch(console.error);
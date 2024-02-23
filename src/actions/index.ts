import type { addressArrType } from "@/components/FilterDialogWithBreadcrumbs";
import type { data } from "@/echarts";
import type { DistributionOfTerminalSalesArray } from "@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales";
import type { SalesStructureOfTerminalPriceRangesArray } from "@/pages/SalesVolumeMonitoring/SalesStructureOfTerminalPriceRanges";
import { enumActionName, enumSeverity, enumSnackbarAlert, type snackbarAlertAction } from "@/store/SnackBarRuducer";
import axios from "axios";
import type { Dispatch } from "redux";
import { v4 } from 'uuid';
import { successCode, Authorization, adminIdString, common, orgId, level, getLevel, getLocalStorageFromJSON } from "./axios_instance";
interface commonResponse<T = null> {
  readonly code: number;
  readonly data: T;
  readonly info: string;
}
// type commonActionType<T = {}, D = void> = (props: T) => (dispatch: Dispatch<snackbarAlertAction>) => Promise<D | void>;
const uuidString = 'uuid';
const setItemAndHeaders = (k: string, v: string) => {
  common[k] = v;
  localStorage.setItem(k, v);
};
export const loginAction = ({ adminId, password, scode }: { readonly [adminIdString]: string, readonly password: string, readonly scode: string; }) => (dispatch: Dispatch<snackbarAlertAction>) => axios.post<commonResponse<string>>('/api/user/login', null, { params: { adminId, password, scode, uuid: sessionStorage.getItem(uuidString) } })
  .then(e => {
    const { code, info, data } = e.data ?? {};
    if (e.status === 200 && code === successCode) {
      dispatch({ type: enumActionName.OPENTRUE, payload: { [enumSnackbarAlert.alertText]: '登录成功', [enumSnackbarAlert.severity]: enumSeverity.success } });
      setItemAndHeaders(Authorization, data);
      setItemAndHeaders(adminIdString, adminId);
      setItemAndHeaders(level, getLevel(data));
      setItemAndHeaders(orgId, getLocalStorageFromJSON(orgId, data));
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
export const getInitParams = () => ({ [level]: Number(getLevel()) || 0, regionId: getLocalStorageFromJSON(orgId) || 'HB' });
export const getSalesVolumeMonitoring_DistributionOfTerminalSales = (e = getInitParams()) => axios.get<commonResponse<DistributionOfTerminalSalesArray>>('/api/sale/subregion', {
  params: e
}).then(e => e.data.data).catch(console.error);
export const getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges = (e = {}) => axios.get<commonResponse<SalesStructureOfTerminalPriceRangesArray>>('/api/SalesVolumeMonitoring/SalesStructureOfTerminalPriceRanges', {
  params: e
}).then(e => e.data.data).catch(console.error);
export const testLogin = () => axios.get<commonResponse>('/api/sell').then(e => e.data.code === successCode).catch(console.error);
export const getTerminalActivitySalesStructure = (props: {
  readonly type?: string;
  readonly regionId?: string;
} = { ...getInitParams() }) => axios.get<commonResponse<data>>('/api/SalesVolumeMonitoring/TerminalActivitySalesStructure', {
  params: props
}).then(e => e.data.data).catch(console.error);
export const getAddressList = ({ id }: {
  // readonly type: string;
  readonly id?: string;
}) => axios.get<commonResponse<addressArrType>>('/api/getAddressList', {
  params: {
    id
  }
}).then(e => e.data.data).catch(console.error);
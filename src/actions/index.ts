import { dateFormat, timeFormat } from "@/components/FilterDialogWithBreadcrumbs";
import type { DistributionOfTerminalSalesArray } from "@/pages/SalesVolumeMonitoring/DistributionOfTerminalSales";
import type { SalesSituationOfTerminalSubChannels_labelType } from "@/pages/SalesVolumeMonitoring/SalesSituationOfTerminalSubChannels";
import { priceNameArr } from "@/pages/SalesVolumeMonitoring/SalesStructureOfTerminalPriceRanges";
import type { TOP10ModelInformation_labelType } from "@/pages/SalesVolumeMonitoring/TOP10ModelInformation";
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
interface getInitParams {
  readonly [level]: number;
  readonly orgId: string;
  readonly date?: string;
}
export const getInitParams = (): getInitParams => ({ [level]: Number(getLevel()) || 0, orgId: getLocalStorageFromJSON(orgId) || 'HB', date: timeFormat(dateFormat()) });
type timeType = 'year' | 'month' | 'day';
export interface requestType extends getInitParams {
  readonly type?: timeType;
};
export const getInitParamsIncludeType = (): requestType => ({ ...getInitParams(), type: 'day' });
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
const addInitParams = (e: object) => ({ params: { ...getInitParams(), ...e } });
export const getSalesVolumeMonitoring_DistributionOfTerminalSales = (e = getInitParams()) => axios.get<commonResponse<DistributionOfTerminalSalesArray>>('/api/sale/subregion', addInitParams(e)).then(e => e.data.data).catch(console.error);
export const getSalesVolumeMonitoring_SalesStructureOfTerminalPriceRanges = ({ type, ...others }: requestType = getInitParamsIncludeType()) => axios.get<commonResponse<{
  readonly salesRecordMap: Record<string, {
    readonly salesNum: number;
    readonly ratio: number;
  }>;
}>>('/api/sale/structure', addInitParams({ ...others })).then(e => e.data.data.salesRecordMap).then(e => priceNameArr.map(i => ({
  price: i,
  salesVolume: e[i]?.salesNum ?? 0,
  proportion: e[i]?.ratio ?? 0,
}))).catch(console.error);
export const testLogin = () => axios.get<commonResponse>('/api/sell').then(e => e.data.code === successCode).catch(console.error);
export const getTerminalActivitySalesStructure = ({ type, ...others }: requestType = getInitParamsIncludeType()) => axios.get<commonResponse<{
  readonly scRatio: number;
  readonly feRatio: number;
  readonly jbRatio: number;
}>>(`/api/sale/contract/${type}`, addInitParams({ ...others })).then(e => Object.entries(e.data.data).map(i => ({ value: i[1], name: i[0] }))).catch(console.error);
// export const getAddressList = ({ id }: {
//   // readonly type: string;
//   readonly id?: string;
// }) => axios.get<commonResponse<addressArrType>>('/api/getAddressList', {
//   params: {
//     id
//   }
// }).then(e => e.data.data).catch(console.error);
export const getTOP10ModelInformation = ({ type, ...others }: requestType = getInitParamsIncludeType()) => axios.get<commonResponse<{
  readonly phoneInfoRank: Record<string, TOP10ModelInformation_labelType>;
}>>(`/api/sale/topPhone/${type}`, addInitParams({ ...others })).then(e => e.data.data.phoneInfoRank).then(e => Object.keys(e).map((i, ind) => {
  const item = e[ind + 1];
  if (item) {
    return { ...item, index: String(i) };
  }
  else {
    return {
      "phoneType": "",
      "salesNum": 0,
      "rate": 0,
      "priceLevel": "",
      index: '0'
    };
  }
})).then(e => e.filter(i => Boolean(i.salesNum))).catch(console.error);
export const getSalesVolumeMonitoring_SalesSituationOfTerminalSubChannels = (e = getInitParams()) => axios.get<commonResponse<ReadonlyArray<SalesSituationOfTerminalSubChannels_labelType>>>('/api/sale/channel/situation', addInitParams(e)).then(e => e.data.data).catch(console.error);
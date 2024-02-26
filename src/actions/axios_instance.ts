import { concatUrl, pathString } from "@/Route";
import axios, { type AxiosRequestConfig } from "axios";
import { redirect } from 'react-router';
export const successCode = 1000;
export const adminIdString = 'adminId';
export const Authorization = 'Authorization';
export const orgId = 'orgId';
const defaults = axios.defaults;
export const { common } = defaults.headers;
const source = axios.CancelToken.source();
const errorAction = () => {
  localStorage.removeItem(Authorization);
  redirect(concatUrl(pathString.login));
  // window.location.href = `#${concatUrl(pathString.login)}`;
};
defaults.baseURL = import.meta.env.VITE_baseURL;
defaults.withCredentials = false;
common[Authorization] ??= localStorage.getItem(Authorization) ?? '';
common[adminIdString] ??= localStorage.getItem(adminIdString) ?? '';
export const getLocalStorageFromJSON = (s: string, backup?: string) => {
  try {
    const getJWT = localStorage.getItem(Authorization) ?? backup;
    if (!getJWT)
      return '';
    return String(JSON.parse((atob(getJWT.split('.')?.[1] ?? '')))?.[s]);
  }
  catch (e) {
    console.error(e);
    return '';
  }
};
export const level = 'level';
export const getLevel = (backup?: string) => getLocalStorageFromJSON(level, backup);
common[level] ??= getLevel();
common[orgId] ??= getLocalStorageFromJSON(orgId);
const controller = new AbortController();
defaults.signal = controller.signal;
defaults.cancelToken = source.token;
const cacheStorage = window.caches;
const { adapter } = defaults;
export const stringify = (e: unknown) => {
  try {
    return JSON.stringify(e);
  }
  catch (e) {
    console.error(e);
    return '';
  }
};
const createCacheKey = ({ url, headers, params, data }: Pick<AxiosRequestConfig, 'url' | 'headers' | 'params' | 'data'>
) => ([url, headers?.[Authorization], headers?.[adminIdString], headers?.[level], stringify(params), stringify(data)].join('_'));
if (adapter && typeof adapter === 'function') {
  defaults.adapter = async (req) => {
    if (!cacheStorage) {
      return adapter(req);
    }
    const { url = '', headers = {}, params, data } = req;
    console.log('请求', url, params, data);
    const cacheKey = createCacheKey({ url, headers, params, data });
    const cache = await cacheStorage?.open(url);
    const cacheRes = await cache?.match(cacheKey);
    if (cacheRes) {
      const resJson = await cacheRes.json();
      // if (stringify(resJson)) {
      return resJson;
      // }
    }
    const res = await adapter(req);
    const { status, data: resData } = res;
    if (status === 200 && typeof resData === 'string' && resData.includes(String(successCode)))
      await cache?.put(cacheKey, new Response(stringify(res)));
    return res;
  };
}
// export const axios_instance = axios.create({
//   baseURL: import.meta.env.VITE_baseURL,
//   // timeout: 20000,
//   withCredentials: false,
//   crossDomain: true,
// });
// export const loginURL = '/api/user/login';
axios.interceptors.request.use(
  async (req) => {
    // if (!cacheStorage)
    //   return req;
    // const { url = '', headers = {}, params, data } = req;
    // if (await (await cacheStorage?.open(url))?.match(createCacheKey({ url, headers: headers?.["common"], params, data }))) {
    //   source.cancel(stringify(req));
    //   // controller.abort(req);
    // }
    return req;
  },
  err => Promise.reject(err)
);

axios.interceptors.response.use(
  async (res) => {
    if (res.data.code === 1003) {
      errorAction();
    }
    // if (!cacheStorage)
    //   return res;
    // const { url = '', headers = {}, params, data } = res.config;
    // const cacheKey = createCacheKey({ url, headers, params, data });
    // const cache = await cacheStorage?.open(url);
    // const cacheRes = await cache.match(cacheKey);
    // if (cacheRes) {
    //   // controller.abort();
    //   // source.cancel();
    //   const resJson = await cacheRes.json();
    //   return resJson;
    // }
    // await cache?.put(cacheKey, new Response(stringify(res)));
    return res;
  },
  async err => {
    // const message = err?.message;
    // if (!message) {
    //   errorAction();
    //   return Promise.reject(err);
    // }
    // const req: AxiosRequestConfig = JSON.parse(message);
    // const { url = '', headers = {}, params, data } = req;
    // const cacheRes = await (await cacheStorage?.open(url))?.match(createCacheKey({ url, headers: headers?.["common"], params, data }));
    // if (cacheRes && axios.isCancel(err)) {
    //   const resJson = await cacheRes.json();
    //   return resJson;
    // }
    return Promise.reject(err);
  }
);
// export class axios_instance extends Axios {
//   constructor () {
//     super();
//   }
// }

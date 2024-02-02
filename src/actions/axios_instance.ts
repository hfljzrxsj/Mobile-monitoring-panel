import { concatUrl, pathString } from "@/Route";
import axios from "axios";
import { JWT } from ".";
export const successCode = 1000;
export const axios_instance = axios.create({
  baseURL: import.meta.env.VITE_baseURL,
  // timeout: 20000,
  withCredentials: false,
  crossDomain: true,
});
axios_instance.interceptors.request.use(
  req => req,
  err => Promise.reject(err)
);

axios_instance.interceptors.response.use(
  res => {
    if (res.data.code !== successCode) {
      localStorage.removeItem(JWT);
      window.location.href = concatUrl(pathString.login);
    }
    return res;
  },
  err => {
    console.error(err);
    if (err.response) {
      localStorage.removeItem(JWT);
      window.location.href = concatUrl(pathString.login);
      return Promise.reject(err.response);
    }
    else {
      return Promise.reject(err);
    }
  }
);
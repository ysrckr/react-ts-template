import { AxiosRequestConfig } from "axios";
import { _instance } from "./instance";

export const GET = <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  return _instance.get(url, options).then((response) => response.data);
};

export const POST = <T, K>(url: string, data?: K, options?: AxiosRequestConfig): Promise<T> => {
  return _instance.post(url, data, options).then((response) => response.data);
};

export const PUT = <T, K>(url: string, data?: K, options?: AxiosRequestConfig): Promise<T> => {
  return _instance.put(url, data, options).then((response) => response.data);
};

export const PATCH = <T, K>(url: string, data?: K, options?: AxiosRequestConfig): Promise<T> => {
  return _instance.patch(url, data, options).then((response) => response.data);
};

export const DELETE = <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  return _instance.delete(url, options).then((response) => response.data);
};

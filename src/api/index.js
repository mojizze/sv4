import axios from "axios";
import { close, start } from "@/helpers/NProgress";

const apiBaseUrl = import.meta.env.VITE_BASE_API_URL;

/**
 * Axios basic configuration
 * Some general configuration can be added like timeout, headers, params etc. More details can be found on https://github.com/axios/axios
 * */
const baseConfig = {
  baseURL: apiBaseUrl,
};

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need to consume APIs from more than single server,
 * So, may need to create multiple http client with different config
 * Only this client will be used rather than axios in the application
 * */
const HTTP = axios.create(baseConfig);

const requestInterceptor = (config) => {
  start();

  config.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "access_token"
  )}`;

  config.headers["Content-Type"] = "application/json";

  return config;
};

const responseSuccessInterceptor = (response) => {
  close();
  return response.data.data || response.data;
};

const responseErrorInterceptor = (error) => {
  close();
  return Promise.reject(error.response.data);
};

/** Adding the request interceptors */
HTTP.interceptors.request.use(requestInterceptor);
HTTP.interceptors.response.use(
  responseSuccessInterceptor,
  responseErrorInterceptor
);

export { HTTP };

import axios from "axios";

import { getAccessToken } from "../utiles/aauthToken";


const axiosInstance = axios.create({
  baseURL:process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getAccessToken();

    config.headers["Content-Type"] = "application/json";

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;


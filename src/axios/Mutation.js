import axiosInstance from "./AxiosInstances";

export default function mutator(method, url, data) {
  return axiosInstance({
    method,
    url,
    data,
  }).then((res) => res.data);
}

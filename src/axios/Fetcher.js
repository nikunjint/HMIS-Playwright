import axiosInstance from "./AxiosInstances";

export default function fetcher(url) {
  return axiosInstance.get(url).then((res) => res.data);
}

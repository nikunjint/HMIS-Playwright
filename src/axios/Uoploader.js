import axiosInstance from "./AxiosInstances";
export const uploader = async (url, payload) => {
  const { data } = await axiosInstance.post(url, payload);

  return [data];
};

export const putUploader = async (url, payload) => {
  const { data } = await axiosInstance.put(url, payload);
  return data;
};
export const deleteUploader = async (url) => {
  const { data } = await axiosInstance.delete(url);

  return data;
};
export const putWithOutPayload = async (url) => {
  const { data } = await axiosInstance.put(url);
  return data;
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("userToken");
  return accessToken || "";
};

export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");
  return refreshToken || "";
};

import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { getAccessToken } from "../utiles/aauthToken";

function LoginLayout() {
  const data = useSelector((state) => state.auth.userInfo?.data?.user);
  if (!(data && getAccessToken())) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
  if (data || getAccessToken()) {
    return <Navigate to="/" />;
  }

  return null;
}

export default LoginLayout;

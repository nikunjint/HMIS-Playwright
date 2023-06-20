import React from "react";
import { Layout, theme } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SiderLayout from "./Sider";
import { userItem } from "../utiles/analyticsSidebar";
import { useSelector } from "react-redux";
import { getAccessToken } from "../utiles/aauthToken";

const { Header, Content } = Layout;

const Users = () => {
const data = useSelector((state) => state.auth.userInfo?.data?.user);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  if (data && getAccessToken()) {
    return (
      <Layout className="brandpage min-h-screen">
        <div>
          <SiderLayout item={userItem} />
        </div>
        <Layout className="site-layout pl-50 bg-bg">
          <Header
            className="h-fit "
            style={{ padding: 0, background: colorBgContainer }}
          >
            <Navbar className="container" />
          </Header>
          <Content className="main-content dark:bg-black pt-2 md:px-[20px] lg:px-[30px]">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
  return <Navigate to="/login" />;
};

export default Users;

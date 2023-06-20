import React from "react";
import { Layout, theme } from "antd";
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import SiderLayout from "./Sider";
import { accountitems } from "../utiles/accountLeftSider";


const { Header, Content } = Layout;

const AccountLayout = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
      <Layout className="min-h-screen">
        <SiderLayout item={accountitems}/>
        <Layout className="site-layout pl-50 bg-sky-100">
          <Header
            className="h-fit "
            style={{ padding: 0, background: colorBgContainer }}
          >
            <Navbar className="container" />
          </Header>
          <Content
            className="main-content dark:bg-black pt-2"
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
 

export default AccountLayout;

import React from "react";
<<<<<<< HEAD

import { Layout,theme} from "antd";

import { Navigate, Outlet} from "react-router-dom";

import Navbar from "./Navbar";

import SiderLayout from "./Sider";

import { investigationitems } from "../utiles/investigationSidebar";

import {  useSelector } from "react-redux";

=======
import { Layout, theme } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SiderLayout from "./Sider";
import { investigationitems } from "../utiles/investigationSidebar";
import { useSelector } from "react-redux";
>>>>>>> 752519067c482cf1d49fe6d777d69d741986e611
import { getAccessToken } from "../utiles/aauthToken";

const { Header, Content } = Layout;

const InvestigationLayout = () => {
<<<<<<< HEAD
=======
  const data = useSelector((state) => state.auth.userInfo?.data?.user);
  const {
    token: { colorBgContainer },
  } = theme?.useToken();
  if (data && getAccessToken()) {
    return (
      <Layout className="brandpage mainlayout min-h-screen">
        <div>
          <SiderLayout item={investigationitems} />
        </div>
        <Layout className="site-layout pl-50 bg-bg">
          <Header
            className="flex items-center justify-center"
            style={{ padding: 0, background: colorBgContainer, zIndex: 999 }}
          >
            <Navbar className="container" />
          </Header>
          <Content
            className={`main-content dark:bg-black pl-[80px] md:pr-[20px] 2xl:pr-[40px] ${
              data ? "pt-[5px]" : "pt-[5px]"
            }`}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    );
  }
  return <Navigate to="/login" />;
};
>>>>>>> 752519067c482cf1d49fe6d777d69d741986e611

  const data = useSelector((state) => state.auth.userInfo?.data?.user);

    const {

        token: { colorBgContainer },

      } = theme?.useToken();

      if (data && getAccessToken()) {  

    return (

      <Layout className="min-h-screen brandpage mainlayout">  

        <div>

          <SiderLayout item={investigationitems}/>

        </div>

        <Layout className="site-layout pl-50 bg-bg">

        <Header

            className="flex items-center justify-center"

            style={{ padding: 0, background: colorBgContainer, zIndex:999 }}

          >

              <Navbar className="container" />

            </Header>

            <Content

              className={`main-content dark:bg-black md:pr-[20px] 2xl:pr-[40px] pl-[80px] ${

                data ? "pt-[5px]" : "pt-[5px]"

              }`}

           

            >

              <Outlet />

            </Content>

        </Layout>

      </Layout>

    );

  }

  return <Navigate to="/login" />;

  }


export default InvestigationLayout;
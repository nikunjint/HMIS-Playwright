import React from "react";
import { Layout,theme} from "antd";
import { Navigate, Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import SiderLayout from "./Sider";
import { investigationitems } from "../utiles/investigationSidebar";
import {  useSelector } from "react-redux"; 
import { getAccessToken } from "../utiles/aauthToken";


const { Header, Content } = Layout;
 
const InvestigationLayout = () => {
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

import React from "react";
import { Layout, theme } from "antd";
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import SiderLayout from "./Sider";
import { userItem } from "../utiles/analyticsSidebar";


const { Header, Content } = Layout;

const Users = () => {
    const {
        token: { colorBgContainer }, 
      } = theme.useToken();
    return (
      <Layout className="min-h-screen brandpage">  
      <div>
        <SiderLayout item={userItem}/>
      </div>
      <Layout className="site-layout pl-50 bg-bg">
      <Header
          className="h-fit "
          style={{ padding: 0, background: colorBgContainer }}
        > 
            <Navbar className="container" />
          </Header>
          <Content 
            className='main-content dark:bg-black pt-2 md:px-[20px] lg:px-[30px]'
          
          >
            <Outlet />
          </Content>
      </Layout>
    </Layout>
    );
  }
 

export default Users;

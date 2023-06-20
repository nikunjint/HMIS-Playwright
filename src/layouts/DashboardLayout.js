import React, { cloneElement } from "react";
import { FloatButton, Layout, Skeleton, theme, Tooltip } from "antd";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
// import { getAccessToken } from "../utiles/aauthToken";
import activegrid from "../assets/activegrid.png";
import { HistoryOutlined} from "@ant-design/icons";
import { rightsiderData } from "../utiles/rightsider";
import { HiOutlineDocument, HiOutlineX } from "react-icons/hi";
import { updateData, setDataLoading } from '../services/changeState/HomeSlice';
import {deleteDataVisit,setVisitLoading} from '../services/changeState/Visitpath'
import { isEmpty } from "lodash";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filterData, setFilterData] = React.useState({
    filterData: rightsiderData,
  });
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };
  const handleDelet =async (to) => {
    dispatch(setVisitLoading(true))
    await dispatch(deleteDataVisit(to));
    dispatch(setVisitLoading(false))

  };
  React.useEffect(() => {
    const clonedData =  filterData?.filterData.map((item) => {
      return {
        ...item,
        icon: cloneElement(item.icon),
      };
    });
    dispatch(setDataLoading(true));
    dispatch(updateData(clonedData))
    dispatch(setDataLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="h-[100vh] overflow-y-hidden ">
      <Layout
        className="site-layout pl-50 bg-white homepage brandpage relative"
        style={{ zIndex: 9 }}
      >
        <Header
          
          style={{ padding: 7, background: colorBgContainer }}
        >
          <div className="absolute left-[3%]">
            <Link to="/">
              <img
                src={activegrid}
                className="activegrid mt-2 border"
                style={{
                  width: "25px",
                }}
                alt="MidasLight"
              />
            </Link>
          </div>
          <Navbar speaker="speaker" setFilterData={setFilterData} />
        </Header>

        <Content
          className={`main-content dark:bg-black customshadow mt-0 rounded-[40px]  bg-[#fff] p-[20px] px-[40px]  ${
            data?.auth?.userInfo
            ? "" : ""
          }`}
        >
          <Outlet />
        </Content>
      </Layout>
      {!isEmpty(data?.visitData?.data) &&(
        <FloatButton.Group
          trigger="click"
          type="primary"
          style={{ right: 94 }}
          icon={<HistoryOutlined size={130} />}
        >
          <Skeleton
          loading={data?.visitData?.loading}
          >
            {data?.visitData?.data?.map((path, index) => (
              <Tooltip title={path?.name} placement="left" key={path?.to}>
                <div className="flex items-center gap-2">
                  <div className="py-2">
                    <FloatButton
                      icon={path?.icon?.type?path?.icon:<HiOutlineDocument/>}
                      onClick={() => handleButtonClick(path?.to)}
                    />
                  </div>

                  <div>
                    <HiOutlineX
                      className="cursor-pointer"
                      onClick={() => handleDelet(path?.to)}
                    />
                  </div>
                </div>
              </Tooltip>
            ))}
          </Skeleton>
        </FloatButton.Group>
      )}
        
      
    </Layout>
  );
};

export default DashboardLayout;

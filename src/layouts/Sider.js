import React from "react";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { determineDefaultOpenKeys } from "../utiles/sider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import grid from "../assets/grid.png";
import speaker from "../assets/speaker.png";
import grouplogo from "../assets/grouplogo.png";
import activegrid from "../assets/activegrid.png";
import AllModule from "./AllModules";
import MenuFilter from "./MenuFilter";
// import { rightsiderData } from "../utiles/rightsider";

const SiderLayout = ({ rootSubmenuKeys, item }) => {
  // const param = useLocation();
  const [open, setOpen] = React.useState({
    open: false,
  });
  const [collapsed, setCollapsed] = React.useState(true);
  const [openKeys, setOpenKeys] = React.useState([]);
  const [filterData, setFilterData] = React.useState([]);
  // const [title] = rightsiderData.filter((item) => (item.to.includes(`${param?.pathname}`) || item.to.startsWith(`${param?.pathname}`)));
  // console.log('title',title,param?.pathname)
  // const investigationIndex = inputPath.indexOf(param?.pathname);
  // const filteredPath = inputPath.substring(investigationIndex);
  // console.log('filteredPath',filteredPath)
  const userroute = useNavigate();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys?.indexOf(key) === -1);
    if (rootSubmenuKeys?.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onClick = (e) => {
    userroute(e.key);
    setCollapsed(true);
    document.body.classList.add("opensidebar");
  };
  const location = useLocation();

  const searchcollapse = () => {
    setCollapsed(!collapsed);
  };

  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(item); // eslint-disable-line react-hooks/exhaustive-deps
  }, [item]);
  return (
    <div className={`h-full  ${open.open ? "sidebarindex" : ""}`}>
      <Layout.Sider
        trigger={null}
        collapsedWidth={40}
        collapsible
        width={250}
        collapsed={collapsed}
        className={` my-layout relative pb-5 text-midas-base ${
          collapsed ? "" : "sidebaropen"
        } `}
        style={{ backgroundColor: "#fff" }}
      >
        <div className="flex items-center justify-between px-4 pt-3">
          <div className={`flex items-center ${collapsed ? "hidden" : ""}`}>
            {!collapsed && (
              <div className="ml-1 flex items-center gap-2">
                <div>Logo</div>
                <div>
                  <h4 className="text-base font-medium ">Name</h4>
                </div>
              </div>
            )}
          </div>

          {!open?.open ? (
            collapsed ? (
              <img
                src={grid}
                className="ml-1 mt-2 cursor-pointer"
                style={{ width: "14px" }}
                alt="MidasLight"
                onClick={() =>
                  setOpen({ open: !open?.open, icon: true, mask: true })
                }
              />
            ) : (
              <img
                src={grid}
                style={{ width: "14px", cursor: "pointer" }}
                alt="MidasLight"
                onClick={() =>
                  setOpen({ open: !open?.open, icon: true, mask: true })
                }
              />
            )
          ) : collapsed ? (
            <img
              src={activegrid}
              className="activegrid animate-pulse border"
              style={{
                width: "25px",
                border: "1px solid lightgray",
                padding: "5px",
                borderRadius: "8px",
              }}
              alt="MidasLight"
              onClick={() =>
                setOpen({ open: !open?.open, icon: true, mask: true })
              }
            />
          ) : (
            <img
              src={activegrid}
              className="activegrid  border"
              style={{
                width: "25px",
                border: "1px solid lightgray",
                padding: "5px",
                borderRadius: "8px",
              }}
              alt="MidasLight"
              onClick={() =>
                setOpen({ open: !open?.open, icon: true, mask: true })
              }
            />
          )}
        </div>

        {open.open && <AllModule open={open} setOpen={(e) => setOpen(e)} />}

        <div className="bg-white h-full text-midas-base">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: `trigger mt-2 z-50 text-midas-base top-0 ml-1 pb-5 ${
                collapsed ? "left-2" : "left-50"
              } ${open?.open ? "negativeindex" : ""}`,
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <div>
            <MenuFilter
              collapsed={collapsed}
              searchcollapse={searchcollapse}
              onFilterData={OnFilterData}
              filterData={item}
            />
          </div>

          <Menu
            className=" text-midas-base"
            mode="inline"
            selectedKeys={[location?.pathname]}
            defaultOpenKeys={determineDefaultOpenKeys(location)}
            items={filterData}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            onClick={onClick}
          />

          {!collapsed && (
            <div className=" machine animate-wiggle">
              <div className="mt-10 flex px-2">
                <img
                  className="mt-2"
                  src={speaker}
                  style={{ width: "20px", height: "20px" }}
                  alt="speaker"
                />

                <div className="ml-2 rounded-[10px] bg-gradient-to-t from-[#FFFFFF] to-[#F3F3FF] p-2">
                  <h4 className="text-sm font-medium">Machine Interfacing</h4>
                  <div className="mb-4 mt-2 text-center">
                    <p className="text-[11px] text-[#4C4C4C]">
                      Automate your lab
                    </p>
                    <p className="text-[11px] text-[#4C4C4C]">
                      with machine interfacing
                    </p>
                  </div>
                  <Link className="mx-auto mt-4 flex w-fit items-center justify-center rounded-[5px] border border-[#D1D5DB] bg-[#fff] p-1 px-2 text-[12px] text-[#4C4C4C] hover:bg-[#292561] hover:text-[#fff]">
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="mt-5 flex items-center px-2">
                <h4 className="mb-0 mt-auto text-[12px] font-medium text-primary">
                  Powered By
                </h4>

                <img
                  className=" ml-2 object-contain"
                  src={grouplogo}
                  style={{ width: "100px", height: "50px" }}
                  alt="group logo"
                />
              </div>
            </div>
          )}
        </div>
      </Layout.Sider>
    </div>
  );
};

export default SiderLayout;

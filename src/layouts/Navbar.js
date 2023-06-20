import React, { memo } from "react";
import logo from "../assets/midas-brand.png";
import profilepic from "../assets/profilepic.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../services/auth/authSlice.js";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Badge, Button, Dropdown, Space } from "antd";
import {
  HiChevronDown,
  HiDotsVertical,
  HiOutlineBell,
  HiOutlineSpeakerphone,
  HiViewGrid,
} from "react-icons/hi";
import Common from "../components/common";
import { rightsiderData } from "../utiles/rightsider";
import DashBoardSearch from "./DashBoardSearch";

function Navbar({ speaker,setFilterData}) {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const OnFilterData = React.useCallback((filter) => {
    setFilterData(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [setFilterData]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };



 

  const data = useSelector((state) => state.auth.userInfo?.data?.user);
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          {data?.username} 
        </a>
      ),
    },

    {
      key: "2",
      label: (
        <Common.Buttons
          onClick={handleLogout}
          className="my-button btn-primary text-uppercase text-white flex text-center items-center justify-center bg-[#292561] w-full"
        >
          Logout
        </Common.Buttons>
      ),
    },
  ];

  
  if (!data) {
  return (
    <div className="grid grid-cols-3 items-center px-3 w-full">
      <div className="opacity-0">
        <Link to="/">
          <img src={logo} alt="..." className="h-11" />
        </Link>
      </div>
      <DashBoardSearch
        customsearch="Search for modules, sub-modules, settings, etc"
        menudata={rightsiderData}
        onFilterData={OnFilterData}
      />

      <div className="flex items-center justify-end">
        <div className="hidden">
          <Button
            type="primary"
            className={`flex h-11 w-36 items-center justify-between rounded-none bg-main px-2`}
            onClick={() => setOpen(!open)}
          >
            <div className="mr-3 flex flex-col items-start text-xs uppercase">
              <span className="text-xxs text-midas-base">CURRENTLY AT</span>
              <span className="font-semibold text-midas-base lg:text-sm xl:text-tiny">
                Module
              </span>
            </div>
            <HiViewGrid size={20} className="text-midas-base" />
          </Button>
        </div>
        {speaker && (
          <div>
            <HiDotsVertical size={20} color="#9CA3AF" />
          </div>
        )}
        <div>
          <Dropdown
            menu={{ items }}
            className={`  flex cursor-pointer items-center rounded-md px-3 py-1`}
          >
            <div onClick={(e) => e.preventDefault()}>
              <Space>
                {/* <HiUser size={18} className="text-midas-base"/>
            <HiChevronDown size={18} className="text-midas-base"/> */}
                <div className="flex items-center">
                  <img src={profilepic} alt="..." className="h-6 mr-2" />
                  <div className="text-dark ml-3 flex flex-col text-sm font-semibold leading-normal">
                    {data?.name}
                    <div className="text-gray-300 -ml-2 text-xs lg:text-sm font-Poppins font-semibold flex items-center">
                      Doctor's Panel
                      <HiChevronDown size={15} />
                    </div>
                  </div>
                </div>
              </Space>
            </div>
          </Dropdown>
        </div>

        <Badge
          count={1}
          offset={[2, 10]}
          color="#F6911E"
          className="ml-[10px] mr-[25px]"
        >
          <div className="rounded-full border border-[#D1D5DB] p-1">
            <HiOutlineBell size={15} color="#9CA3AF" />
          </div>
        </Badge>

        {speaker && (
          <div className="mr-3 flex">
          <Badge count={2} offset={[2, 10]} color="#F6911E">
            <div className="rounded-full border border-[#D1D5DB] p-1">
              <HiOutlineSpeakerphone size={15} color="#9CA3AF" />
            </div>
          </Badge>
          </div>
        )}
      </div>
    </div>
  );
}
return null;
}

export default memo(Navbar);

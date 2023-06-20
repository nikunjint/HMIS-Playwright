import React, { memo } from "react";
import { HiSearch } from "react-icons/hi";
import Common from "../../../common";

const SearchMenuList = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data?.filter((item) => {
      return (
        (item.NAME &&
          item.NAME.toLowerCase().includes(value.toLowerCase())) ||
        (item.CODE &&
          item.CODE.toLowerCase().includes(value.toLowerCase())) ||
        (item.ADDRESS && item.ADDRESS.toLowerCase().includes(value.toLowerCase())) ||
        (item.MOBILE &&
          item.MOBILE.toLowerCase().includes(value.toLowerCase())) ||
        (item.EMAIL &&
          item.EMAIL.toLowerCase().includes(value.toLowerCase())) 
        
      );
    });
    onFilterData(filter);
  };
  return (
    <div>
      <Common.Inputs
      placeholder="Search"
        label="Search"
        hidelabel="true"
        allowclear="true"
        color="black"
        prefix={
          <div className="text-base font-medium">
            <HiSearch />
          </div>
        }
        onChange={handelSearch}
        className={
          "flex-half text-dark bg-white mb-0 h-fit rounded-full  border-[#CCCCCC] lg:text-xs  xl:text-sm searchsec pt-0 pb-0"
        }
      />
    </div>
  );
};
export default memo(SearchMenuList);

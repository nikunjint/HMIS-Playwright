import React, { memo } from "react";
import { HiSearch } from "react-icons/hi";
import Common from "../../../common";

const SearchEmployeeList = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data?.filter((item) => {
      return (
        (item.name &&
          item.name.toLowerCase().includes(value.toLowerCase())) ||
        (item.email &&
          item.email.toLowerCase().includes(value.toLowerCase())) ||
        (item.mobile_no &&
          item.mobile_no.toLowerCase().includes(value.toLowerCase())) ||
        (item.code &&
          item.code.toLowerCase().includes(value.toLowerCase())) ||
        (item.type &&
          item.type.toLowerCase().includes(value.toLowerCase())) 
        
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
export default memo(SearchEmployeeList);

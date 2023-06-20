import React from "react";
import { memo } from "react";
import { HiSearch } from "react-icons/hi";
import Common from "../components/common";

function MenuFilter({ filterData, onFilterData, collapsed, searchcollapse }) {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = filterData?.filter((item) => {
      return (
        item.label && item.label.toLowerCase().includes(value.toLowerCase())
      );
    });
    onFilterData(filter);
  };
  return (
    <div>
      <Common.Inputs
        color="black"
        bordered={true}
        label={!collapsed ? "Search" : ""}
        hidelabel={true}
        allowclear={true}
        onChange={handelSearch}
        onClick={collapsed ? searchcollapse : undefined}
        prefix={
          <div className="text-base font-medium">
            <HiSearch />
          </div>
        }
        className={
          !collapsed
            ? "flex-half bg-sky-100 text-dark searchsec mb-0 ml-1 mr-7 h-fit bg-sky px-0 pb-[0.5px] pl-2 pt-[3px] rounded-[999px] w-[95%] "
            : "searchsec mb-2 ml-1 rounded-sm pb-[0.5px] pt-[3px]"
        }
      />
    </div>
  );
}

export default memo(MenuFilter);

import React, { memo } from "react";
import { HiSearch } from "react-icons/hi";
import Common from "../../common";

const SearchSetUp = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data?.filter((item) => {
      return (
        (item.name &&
          item.name.toLowerCase().includes(value.toLowerCase()))
      );
    });
    onFilterData(filter||[]);
  };
  return (
    <div>
      <Common.Inputs
        bordered="true"
        label="Search"
        hidelabel="true"
        allowclear="true"
        prefix={<HiSearch />}
        onChange={handelSearch}
        className="rounded-none border-b-[1px] border-[#3f51b5] px-0 hover:border-b-[2px]"
      />
    </div>
  );
};
export default memo(SearchSetUp);

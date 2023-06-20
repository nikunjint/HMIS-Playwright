import React, { memo } from "react";
import { HiSearch } from "react-icons/hi";
import Common from "../common";

const SearchHomeList = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data?.filter((item) => {
      return (
        (item.name &&
          item.name.toLowerCase().includes(value.toLowerCase())) ||
        (item.surname &&
          item.surname.toLowerCase().includes(value.toLowerCase())) ||
        (item.birthYear && item.birthYear.toLowerCase().includes(value.toLowerCase())) ||
        (item.birthCity &&
          item.birthCity.toLowerCase().includes(value.toLowerCase())) ||
        (item.address &&
          item.address.toLowerCase().includes(value.toLowerCase())) ||
        (item.regd &&
          item.regd.toLowerCase().includes(value.toLowerCase())) ||
        (item.dep &&
          item.dep.toLowerCase().includes(value.toLowerCase())) ||
        (item.doc &&
          item.doc.toLowerCase().includes(value.toLowerCase())) ||
        (item.actions &&
          item.actions.toLowerCase().includes(value.toLowerCase())) 
       
      );
    });
    onFilterData(filter);
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
        className="rounded-none border-b-[1px] border-[#3f51b5] px-0 mb-0 hover:border-b-[2px]"
      />
    </div>
  );
};
export default memo(SearchHomeList);

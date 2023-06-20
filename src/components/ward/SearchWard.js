import React, { memo } from "react";
import Common from "../common";
import { HiSearch } from "react-icons/hi";

const SearchWard = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data.filter((item) => {
      return (
        (item.patentname &&
          item.patentname.toLowerCase().includes(value.toLowerCase())) ||
        (item.ageSex &&
          item.ageSex.toLowerCase().includes(value.toLowerCase()))
      );
    });
    onFilterData(filter);
  };
  return (
    <div>
      <Common.Inputs
        label="Search"
        hidelabel="true"
        allowclear="true"
        suffix={<HiSearch />}
        onChange={handelSearch}
      />
    </div>
  );
};
export default memo(SearchWard);

import React, { memo } from "react";
import { HiSearch } from "react-icons/hi";
import Common from "../../../common";


const SearchLabTemplate = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data.filter((item) => {
      return (
        (item.testname &&
          item.testname.toLowerCase().includes(value.toLowerCase())) ||
        (item.method &&
          item.method.toLowerCase().includes(value.toLowerCase())) || 
          (item.unit &&
            item.unit.toLowerCase().includes(value.toLowerCase())) ||
            (item.analyzer &&
                item.analyzer.toLowerCase().includes(value.toLowerCase()))
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
        onChange={handelSearch}     className={
          "flex-half text-dark bg-white mb-0 h-fit rounded-full  border-[#CCCCCC] lg:text-xs  xl:text-sm pt-0 pb-0 flex items-center"
        }
        
      />
    </div> 
  );
};
export default memo(SearchLabTemplate);

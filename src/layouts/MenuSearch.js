import React, { memo } from "react";
import { HiSearch } from "react-icons/hi";
import Common from "../components/common";

const MenuSearch = ({ menudata, onFilterData, customsearch, setShowModules}) => {
  const handelSearch = (e) => {
    const value = e.target.value.toLowerCase();
    
    const filteredData = menudata?.filter((item) => {
      return item.name && item.name.toLowerCase().includes(value);
    });
    
    // Sort the filteredData based on best match
    filteredData?.sort((a, b) => {
      const aIndex = a.name.toLowerCase().indexOf(value);
      const bIndex = b.name.toLowerCase().indexOf(value);
      
      if (aIndex === bIndex) {
        // If both have the same index, sort alphabetically
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      }
      
      return aIndex - bIndex;
    });
    const filter=e.target.value?true:false
    const otherItems = menudata?.filter((item) => {
      return item.name && item.name.charAt(0).toLowerCase() === value.charAt(0).toLowerCase();
    });
    
    const finalData = { filterData: filteredData, other: otherItems, filter: filter };
    onFilterData(finalData);
  };


  const handleClick = (e) => {
    setShowModules(false);
  }

  return (
    <div>
      <Common.Inputs
        color="black"
        placeholder={customsearch ? customsearch : "Search"}
        hidelabel
        allowclear={true}
        prefix={
          <div className="text-base font-medium">
            <HiSearch />
          </div>
        }
        onClick={handleClick}
        onChange={handelSearch}
        className={
          customsearch
            ? "flex-half text-dark mb-0 h-fit rounded-full border-[#CCCCCC] px-2 py-[5px] lg:text-xs  xl:text-sm searchsec pt-[3px] pb-[0.5px]"
            : "text-dark bg-white searchsec rounded-md px-0 pb-[0.5px] pl-2 pt-[3px]"
        }
      />
    </div>
  );
};
export default memo(MenuSearch);

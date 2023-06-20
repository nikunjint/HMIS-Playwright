import React from "react";
import { Link } from "react-router-dom";

const FilterByLetter = ({ filterData }) => {
  return (
    <div className="h-[300px] overflow-y-scroll">
      {filterData?.map((item, index) => (
        <div key={item.to} className="flex w-full justify-between ">
          <div className="w-full pb-2 text-sm text-midas-base ">
            {index === 0 || item.name[0] !== filterData[index - 1].name[0] ? (
              <h2 className="mb-4 ml-2 text-left text-[14px] font-medium ">
                {item.name[0]}
              </h2>
            ) : null}

            <Link to={item?.to} className="flex items-center mb-1 hover-white p-2 rounded-[5px] cursor-pointer">
              {item.icon}
              <span className="pl-3 text-[#000]">{item.name}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FilterByLetter;

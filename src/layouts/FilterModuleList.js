import React, { memo, useEffect } from "react";
import RecentlyUsed from "../components/home/RecentlyUsed";
import { HiChevronRight } from "react-icons/hi";
import { isEmpty } from "lodash";
import machineinterface from "../assets/mi.jpeg";
import { Link } from "react-router-dom";

const FilterModuleList = ({ filterData }) => {
  const [filterchiled, setFilterChield] = React.useState({
    item: {},
    chield: false,
    mainitem: {},
  });
  const handelChangeChildren = (item, mainitem) => {
    setFilterChield({
      ...filterchiled,
      item: item,
      chield: true,
      mainitem: mainitem,
    });
  };
  useEffect(() => {
    const data = isEmpty(filterData?.filterData);
    if (data || filterData?.filter) {
      setFilterChield({ ...filterchiled, chield: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);
  return (
    <div>
      {!filterData?.filter && (
        <div className="flex justify-between mt-4">
          <div className="w-[50%]">
            <RecentlyUsed hover/>
          </div>
          <div className="machineinterface relative mt-2 h-fit overflow-hidden rounded-[8px]">
            <img
              src={machineinterface}
              className="m-auto flex h-[200px] w-full items-center rounded-[5px] object-cover"
              alt="Loading"
            />

            <div className="absolute bottom-2 w-full">
              <div className="text-white ml-2 rounded-[10px] p-2">
                <div className="text-white text-left font-Poppins text-[18px] font-medium">
                  Machine Interfacing
                </div>  
                <div className="mb-2 mt-2 text-left">
                  <p className="text-white text-[11px]">
                    Automate your lab with machine interfacing
                  </p>
                </div>
                <Link className=" float-left mx-auto mb-2 mt-0 flex w-fit items-center justify-center rounded-[5px] border border-[#D1D5DB] bg-[#fff] p-1 px-2 text-left text-[12px] text-[#4C4C4C] hover:bg-[#292561] hover:text-[#fff]">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {filterData?.filter && (
        <div className="flex items-start justify-between gap-3">
          <div className="w-full">
            <div className="grid grid-cols-2">
              <div className="mt-0 w-full">
                {filterData?.filterData[0] && (
                  <>
                    <h3 className="pb-1 font-Poppins text-sm font-medium">
                      Best Search
                    </h3>
                    <Link
                      to={`${filterData?.filterData[0]?.to}`}
                      className="text-[#292561]"
                    >
                      <div className="hover-white bestsearch bg-white border-left-[#292561] flex cursor-pointer items-center rounded-[5px] p-2 ">
                        <div>{filterData?.filterData[0]?.icon}</div>
                        <div className="pl-2 font-Poppins text-sm ">
                          {filterData?.filterData[0]?.name}
                        </div>
                      </div>
                    </Link>
                  </>
                )}
                <h3 className="pt-2 font-Poppins text-sm font-medium">
                  You Might Be Searching For
                </h3>
                <div className="mt-2 grid gap-2">
                  {filterData?.other
                    ?.filter(
                      (item) => item?.to !== filterData?.filterData[0]?.to
                    )
                    .map((item) => (
                      <div
                        className="hover-white flex h-[35px] cursor-pointer items-center justify-between  gap-2 rounded-[5px]"
                        key={item.to}
                      >
                        <Link to={`${item?.to}`} className="text-[#292561]">
                          <div className="flex items-center gap-1 p-2 font-Poppins text-sm">
                            {item?.icon} {item?.name}
                          </div>
                        </Link>
                        <div
                          className="hover-lightgray flex items-center justify-center p-[11px]"
                          onClick={() =>
                            handelChangeChildren(item.children, item)
                          }
                        >
                          <HiChevronRight />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="bg-white ml-3 mt-[5px] w-full rounded-[5px] p-[20px] text-center h-[300px] overflow-y-scroll">
                {(!filterchiled?.chield && !isEmpty(filterData?.filterData)) && (
                  <div className="mb-5 flex flex-col items-center justify-center">
                    <div className="resultIcon">
                      {filterData?.filterData[0]?.icon}
                    </div>
                    <div className="mt-3 w-full border-b-[1px] border-[#d3d3d3] pb-3 font-Poppins text-sm">
                      {filterData?.filterData[0]?.name}
                    </div>
                  </div>
                )}
                {isEmpty(filterData?.filterData) &&
                  !filterchiled?.chield &&
                  filterData?.other && (
                    <div className="mb-5 flex flex-col items-center justify-center">
                      <div className="resultIcon">
                        {filterData?.other[0]?.icon}
                      </div>
                      <div className="mt-3 w-full border-b-[1px] border-[#d3d3d3] pb-3 font-Poppins text-sm">
                        {filterData?.other[0]?.name}
                      </div>
                    </div>
                  )}
                {filterchiled?.chield && (
                  <div className="mb-5 flex flex-col items-center justify-center">
                    <div className="resultIcon">
                      {filterchiled?.mainitem?.icon}
                    </div>
                    <div className="mt-3 w-full border-b-[1px] border-[#d3d3d3] pb-3 font-Poppins text-sm">
                      {filterchiled?.mainitem?.name}
                    </div>
                  </div>
                )}
                <div>
                  {filterchiled?.chield && (
                    <div className="flex flex-col items-start">
                      {filterchiled?.item.map((item) => (
                        <div key={item?.name}>
                          <Link to={`${item?.to}`} className="text-[#292561]">
                            <div className="mb-2 flex items-center gap-2 font-Poppins text-sm">
                              {item?.childrenicon} {item?.name}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                  {!filterchiled?.chield &&
                    !isEmpty(filterData?.filterData) &&
                    filterData?.filterData[0]?.children?.map((item) => (
                      <div
                        className="mt-3 flex items-center gap-3"
                        key={item.name}
                      >
                        <Link to={`${item?.to}`} className="text-[#292561] flex items-center">
                          <div>{item?.childrenicon}</div>
                          <div className="font-Poppins text-[12px] ml-2">
                            {item?.name}
                          </div>
                        </Link>
                      </div>
                    ))}
                  {isEmpty(filterData?.filterData) &&
                    !filterchiled?.chield &&
                    filterData?.other &&
                    filterData?.other[0]?.children?.map((item) => (
                      <div
                        className="mt-3 flex items-center gap-3"
                        key={item.name}
                      >
                        <Link to={`${item?.to}`} className="text-[#292561] flex items-center">
                          <div>{item?.childrenicon}</div>
                          <div className="font-Poppins text-[12px] ml-2">
                            {item?.name}
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default memo(FilterModuleList);

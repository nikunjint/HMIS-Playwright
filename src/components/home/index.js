import React from "react";
import { HiChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import SiderFilter from "../../layouts/SiderFilter";
import { useDispatch, useSelector } from "react-redux";
import { cloneElement } from "react";
import RecentlyUsed from "./RecentlyUsed";
import { useNavigate } from "react-router-dom";
import { Skeleton, Tooltip } from "antd";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  visitupdateData,
  setVisitLoading,
} from "../../services/changeState/Visitpath";

function HomeScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dynamicDroppableId = Math.random().toString();
  const [showModules, setShowModules] = React.useState(false);
  const [filterData, setFilterData] = React.useState();
  const allModules = () => {
    setShowModules(!showModules);
  };
  const handelNavigate = (id, name, icon) => {
    dispatch(setVisitLoading(true));
    dispatch(visitupdateData([{ name: name, to: id, icon: cloneElement(icon) }]));
    dispatch(setVisitLoading(false));

    navigate(id);
  };
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return; // Item was dropped outside of a droppable area
    }

    const newItems = Array.from(filterData);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setFilterData(newItems);
  };
  const homeData = useSelector((state) => state?.homeData);
  React.useEffect(() => {
    setFilterData(homeData?.data);
  }, [homeData?.data]);
  return (
    <Skeleton loading={homeData?.loading}>
      <div>
        <div className="mb-5 mt-0 flex items-center justify-between">
          {filterData?.length ? (
            <h3 className="text-base font-medium ">Modules</h3>
          ) : (
            ""
          )}

          {!showModules ? (
            <h3
              className="bg-white position-initial hover:text-dark flex w-[150px] cursor-pointer items-center justify-between rounded-md border border-[#A8A8A8] px-4 pr-2 text-sm text-primary"
              onClick={allModules}
            >
              All Modules
              <HiChevronRight size={20} />
            </h3>
          ) : (
            <h3
              className=" position-initial hover:text-dark flex w-[80px] cursor-pointer items-center justify-between rounded-md px-4 pr-2 text-sm text-primary"
              onClick={allModules}
            >
              <HiOutlineChevronLeft size={20} />
              Back
            </h3>
          )}
        </div>

        {!showModules ? (
          <div>
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId={dynamicDroppableId}>
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`${
                      filterData?.length === 1 || filterData?.length === 0
                        ? "items-start"
                        : "scrollview grid h-[70vh] grid-cols-3 gap-8 overflow-y-scroll 2xl:grid-cols-4 no_scrollbar"
                    }`}
                  >
                    {filterData?.map((item, index) => (
                      <Draggable
                        key={item.name}
                        draggableId={item.name}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            snapshot={snapshot}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div
                              key={item.name}
                              className="flex w-full justify-between"
                            >
                              <div className="w-full pb-2 text-sm text-midas-base ">
                                <div
                                  className={`${
                                    showModules
                                      ? "flex items-center rounded-[10px] p-1 text-[#000] hover:bg-[#fff]"
                                      : `flex cursor-pointer items-center gap-2 p-3 font-Poppins text-secondary transition-all hover:shadow-lg  ${
                                          filterData?.length === 1
                                            ? "items-start"
                                            : ""
                                        }`
                                  }`}
                                  onClick={() =>
                                    handelNavigate(
                                      item.to,
                                      item.name,
                                      item.icon
                                    )
                                  }
                                >
                                  <div className="rounded-[6px] border border-[#E0E0E0] p-2">
                                    {cloneElement(item?.icon)}
                                  </div>
                                  <div className="flex flex-col">
                                    <span
                                      className={`whitespace-nowrap text-[16px] font-semibold text-[#292561]  ${
                                        showModules ? "pl-2" : "pl-1"
                                      }`}
                                    >
                                      {item?.name}
                                    </span>
                                    <span className="h-[18px] max-w-[200px] overflow-hidden text-ellipsis font-normal text-[#A5A5A5] lg:max-w-[250px]">
                                      {item?.children &&
                                        item.children?.map((childItem) => (
                                          <Tooltip
                                            placement="topLeft"
                                            color="#fff"
                                            title={
                                              <div className="flex flex-wrap gap-3">
                                                {item?.children?.map(
                                                  (childItem) => (
                                                    <a
                                                      href={childItem.to}
                                                      key={childItem.to}
                                                      className="mr-3  text-[12px] font-medium text-[#292561] "
                                                    >
                                                      {childItem.name}
                                                    </a>
                                                  )
                                                )}
                                              </div>
                                            }
                                          >
                                            <span
                                              className="pl-1"
                                              key={childItem.to}
                                            >
                                              {childItem.name},
                                            </span>
                                          </Tooltip>
                                        ))}

                                      {!item?.children && (
                                        <span>
                                          No submenus available for now.
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                </div>
                                <SiderFilter
                                  filterData={filterData}
                                  otherData={filterData?.other}
                                  searchName="You might also like"
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    <SiderFilter
                      filterData={filterData}
                      otherData={filterData?.other}
                      searchName="You might be searching for"
                    />
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        ) : (
          <div
            className={` ${
              showModules
                ? "scrollview flex h-full max-w-[100%] flex-col items-start gap-4 overflow-y-scroll no_scrollbar"
                : "grid grid-cols-6 gap-4 "
            }`}
          >
            {filterData?.map((item, index) => (
              <div key={item.to} className="flex w-full justify-between">
                <div className="w-full pb-2 text-sm text-midas-base ">
                  {index === 0 ||
                  item.name[0] !== filterData[index - 1].name[0] ? (
                    <h2 className="mb-4 ml-2 text-left text-[14px] font-medium">
                      {item.name[0]}
                    </h2>
                  ) : null}

                  <div
                    className={`${
                      showModules
                        ? "flex items-center rounded-[10px] p-1 text-[#000] hover:bg-[#fff]"
                        : "flex flex-col items-center gap-2 font-Poppins text-secondary"
                    }`}
                    onClick={() =>
                      handelNavigate(item.to, item.name, item.icon)
                    }
                  >
                    {item.icon}
                    <span
                      className={`whitespace-nowrap ${
                        showModules ? "pl-2" : ""
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                  <SiderFilter
                    filterData={filterData}
                    otherData={filterData?.other}
                    searchName="You might also like"
                  />
                </div>

                {/* Render children if available and search query is not empty */}

                {/* {index === 0 && item?.children && item?.children.length > 0 && (
                  <div className="bg-white customshadow mr-5 w-[70%] rounded-[10px] p-[40px]">
                    <div class="flex items-center justify-center mx-auto">
                    {item?.childicon}
                    </div>
                    <div className="mb-5 mt-3 font-Poppins text-center text-tiny font-medium text-main">
                      {item?.name}
                    </div>
    
                    <div className="mt-2">
                      {item?.children?.map((childItem, childIndex) => (
                        <div key={childItem?.to} className="mt-4">
                          <div
                            className="flex items-center text-sm text-[#000] "
                            onClick={() =>
                              handelNavigate(
                                childItem.to,
                                childItem.name,
                                childItem.icon
                              )
                            }
                          >
                            {childItem?.childrenicon}
                            <span className="text-[13px] pl-2 font-normal">
                              {childItem?.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )} */}
              </div>
            ))}

            <SiderFilter
              filterData={filterData}
              otherData={filterData?.other}
              searchName="You might be searching for"
            />
          </div>
        )}

        <div className="homerecentlyused">
          {homeData?.data?.length === 1 ? "" : <RecentlyUsed />}
        </div>
      </div>
    </Skeleton>
  );
}

export default HomeScreen;

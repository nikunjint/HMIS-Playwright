import React from "react";
import Common from "../components/common";
import MenuSearch from "./MenuSearch";
import { HiChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import { rightsiderData } from "../utiles/rightsider";
import RecentlyUsed from "../components/home/RecentlyUsed";
import InitialModuuleList from "./InitialModuleList";
import FilterModuleList from "./FilterModuleList";
import FilterByLetter from "./FilterByLetter";

const AllModule = ({ open, setOpen }) => {
  const [filterData, setFilterData] = React.useState({
    filterData: [],
    filter: "",
  });

  const [showModules, setShowModules] = React.useState(true);
  const [filterbyletter, setFilterByLetter] = React.useState(true);
  const OnFilterData = React.useCallback((filter) => {
    setFilterData(filter);
  }, []);

  // const handelNavigate = (id, name, icon) => {
  //   console.log('id',id)
  //   updateComponent([{ name: name, icon: icon }]);
  //   navigate(id);
  //   setOpen(!open);
  // };
  const handelFilterByLetter = () => {
    setFilterByLetter(!filterbyletter);
  };

  React.useEffect(() => {
    setFilterData({ filterData: rightsiderData, filter: false });
  }, []);
  console.log("filterData", filterData);
  return (
    <Common.AntModal open={open} setOpen={(e) => setOpen(e)} width={1000}>
      <div>
        <div>
          <MenuSearch
            customsearch="Search for modules and sub-modules "
            menudata={rightsiderData}
            onFilterData={OnFilterData}
            showModules={showModules}
            setShowModules={(e) => setShowModules(e)}
          />
        </div>
        {showModules && (
          <div 
            className="flex items-center justify-between"
            onClick={handelFilterByLetter}
          >

            <div className="font-Poppins text-tiny text-primary font-medium">Modules</div>


            {filterbyletter ? (
              <h3 className="bg-white position-initial hover:text-dark flex w-[120px] cursor-pointer items-center justify-between rounded-md border border-[#A8A8A8] px-4 pr-2 text-[11px] text-primary mt-4">
                All Modules
                <HiChevronRight size={20} />
              </h3>
            ) : (
              <h3 className=" bg-white position-initial hover:text-dark flex w-[80px] cursor-pointer items-center justify-between rounded-md border mt-4 mb-3 border-[#A8A8A8] px-4 text-[11px] text-primary">
                <HiOutlineChevronLeft size={20} />
                Back
              </h3>
            )}
          </div>
        )}

        <div>
          <div className="initialmodule relative">
            {showModules && filterbyletter && (
              <InitialModuuleList filterData={filterData?.filterData} />
            )}
            {showModules && !filterbyletter && (
              <FilterByLetter filterData={filterData?.filterData} />
            )}
          </div>
          <div>
            {!showModules && <FilterModuleList filterData={filterData} />}
          </div>
          <div className="innerrecentlyused">
            {showModules && filterbyletter && <RecentlyUsed />}
          </div>
        </div>
      </div>
    </Common.AntModal>
  );
};

export default AllModule;

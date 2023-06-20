import React, { memo } from "react";
import Common from "../../common";
import { HiSearch } from "react-icons/hi";

const SearchPatientList = ({ data, onFilterData }) => {
  const handelSearch = (e) => {
    const value = e.target.value;
    const filter = data?.filter((item) => {
      return (
        (item.PATIENTNAME &&
          item.PATIENTNAME.toLowerCase().includes(value.toLowerCase())) ||
        (item.PATIENTID &&
          item.PATIENTID.toLowerCase().toString().includes(value.toLowerCase().toString())) ||
        (item.AGE && item.AGE.toLowerCase().includes(value.toLowerCase())) ||
        (item.MOBILENO &&
          item.MOBILENO.toLowerCase().includes(value.toLowerCase())) ||
        (item.TESTNAME &&
          item.TESTNAME.toLowerCase().includes(value.toLowerCase())) ||
        (item.BILLNO &&
          item.BILLNO.toLowerCase().includes(value.toLowerCase())) ||
        (item.SAMPLENO &&
          item.SAMPLENO.toLowerCase().includes(value.toLowerCase())) ||
        (item.LABNO &&
          item.LABNO.toLowerCase().includes(value.toLowerCase())) ||
        (item.TESTDATE &&
          item.TESTDATE.toLowerCase().includes(value.toLowerCase())) ||
        (item.PATIENTTYPE &&
          item.PATIENTTYPE.toLowerCase().includes(value.toLowerCase())) 
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
        onChange={handelSearch}
        className={
          "flex-half text-dark bg-white mb-0 h-fit rounded-full  border-[#CCCCCC] lg:text-xs  xl:text-sm pt-0 pb-0"
        }
      />
    </div>
  );
};
export default memo(SearchPatientList);

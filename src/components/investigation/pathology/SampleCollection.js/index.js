import React from "react";
import PatientInfo from "./PatientInfo";
import CollectType from "./CollectType";

const SampleCollections = () => {
  return (
    <div className="dark:bg-black customshadow rounded-[20px] bg-[#fff] p-[20px] mt-3">
      <div>
        <PatientInfo />
      </div>
      <div>
        <CollectType />
      </div>
    </div>
  );
};
export default SampleCollections;

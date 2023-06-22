import React from "react";
import PatientInfo from "./PatientInfo";
import CollectType from "./CollectType";
import Common from "../../../common";

const SampleCollections = () => {
  return (
    <div className="mt-4">
      <Common.Cards>
        <div className="grid grid-flow-row gap-4">
          <div>
            <PatientInfo />
          </div>
          <div>
            <CollectType />
          </div>
        </div>
      </Common.Cards>
    </div>
  );
};
export default SampleCollections;

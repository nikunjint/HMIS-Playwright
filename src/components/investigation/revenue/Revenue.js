import React from "react";
import PatientType from "./patientType/index";
import DepartmentWise from "./departmentWise/index";
import TestWise from "./testwise/TestWise";
import CollectionDetails from "./collectionDetails/CollectionDetails";
import BillDetails from "./billDetails/BillDetails";
import RevenueDetailTwo from "./RevenueDetailTwo";
import RevenueDetail from "./RevenueDetail";
import Sratd from "./sratd/index";
import Rcod from "./rcod/index";

function Index() {
  return (
    <div className="mt-4">
      <div className="font-Poppins text-lg font-bold">Revenue Details</div>
      <Sratd />
      <div className="mt-5 grid grid-cols-2 gap-4">
        <PatientType />
        <DepartmentWise />
        <TestWise />
        <div>
          <CollectionDetails />
          <BillDetails />
        </div>
      </div>
      <Rcod />
    </div>
  );
}

export default Index;

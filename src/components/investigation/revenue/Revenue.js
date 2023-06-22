import React from "react";
import PatientTypeDetail from "./patientTypeDetail/PatientTypeDetail";
import DepartmentWiseDetail from "./departmentWise/DepartmentWiseDetail";
import TestWise from "./testwise/TestWise";
import CollectionDetails from "./collectionDetails/CollectionDetails";
import BillDetails from "./billDetails/BillDetails";
import RevenueDetailTwo from "./RevenueDetailTwo";
import RevenueDetail from "./RevenueDetail";

function Index() {
  return (
    <div className="mt-4">
      <div className="font-Poppins text-lg font-bold">Revenue Details</div>
      <RevenueDetail />
      <div className="mt-5 grid grid-cols-2 gap-4">
        <PatientTypeDetail />
        <DepartmentWiseDetail />
        <TestWise />
        <div>
          <CollectionDetails />
          <BillDetails />
        </div>
      </div>
      <RevenueDetailTwo />
    </div>
  );
}

export default Index;

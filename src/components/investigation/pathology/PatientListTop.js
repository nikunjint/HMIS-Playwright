// import { Form } from "antd";
import Common from "../../common";
import { HiX } from "react-icons/hi";

const PatientListTop = () => {
  return (
    <Common.Cards>
      <div className="grid gap-y-4 w-full">
        <div className="  w-full justify-between gap-6 lg:flex  sm:grid sm:grid-cols-3 sm:grid-rows-2 ">
          <div className="w-full">
            <Common.DatePickers
              placeholder="Select Date Range"
              name="employee_id"
              className="mb-0 w-full"
              hidelabel
            />
          </div>
 
          <div className="w-full">
            <Common.Selects
              array={[{ id: 1, name: "Hematology" }]}
              placeholder="Patient Type"
              value={"id"}
              description="name"
              name="department"
              className="mb-0 w-full"
              hidelabel
            />
          </div>
          <div className="w-full">
            <Common.Selects
              array={[{ id: 1, name: "Hematology" }]}
              placeholder="Patient ID"
              value={"id"}
              description="name"
              name="patientid"
              className="mb-0 w-full"
              hidelabel
            />
          </div>
          <div className="w-full">
            <Common.Selects
              array={[{ id: 1, name: "Hematology" }]}
              placeholder="Show All"
              value={"id"}
              description="name"
              name="show all"
              className="mb-0 w-full"
              hidelabel
            />
          </div>
          <div className="w-1/4">
            <div>
              <Common.Buttons hovertext="black" className="hover:text-dark">
                <div className="flex items-center gap-1">
                  Clear <HiX />
                </div>
              </Common.Buttons>
            </div>
          </div>
        </div>
        <div className=" w-full justify-between gap-6 lg:flex  sm:grid sm:grid-cols-3 sm:grid-rows-2">
          <div className="w-full">
            <Common.Selects
              array={[{ id: 1, name: "Hematology" }]}
              placeholder="Select Department"
              value={"id"}
              description="name"
              name="selectdepartment"
              className="mb-0 w-full"
              hidelabel
              mode="multiple"
            />
          </div>
          <div className="w-full">
            <Common.Selects
              array={[{ id: 1, name: "Hematology" }]}
              placeholder="Select Tests"
              value={"id"}
              description="name"
              name="test"
              className="mb-0 w-full"
              hidelabel
              mode="multiple"
            />
          </div>
          <div className="w-full">
            <Common.Selects
              array={[
                { id: 1, name: "Hematology" },
                { id: 2, name: "RBC" },
              ]}
              placeholder="Select Category"
              value={"id"}
              description="name"
              name="category"
              className="mb-0 w-full"
              hidelabel
              mode="multiple"
            />
          </div>
          <div>
            <Common.Buttons className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main">
              Submit
            </Common.Buttons>
          </div>
        </div>
      </div>
    </Common.Cards>
  );
};
export default PatientListTop;

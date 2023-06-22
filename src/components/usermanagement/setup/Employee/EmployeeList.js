import React from "react";
import Common from "../../../common";
import SearchEmployeeList from "./SearchEmployee";
import { Action } from "../../../../utiles/action";
import ViewEditdEmployee from "./ViewEdit";

const EmployeeList = () => {
  const [filterData, setFilterData] = React.useState([]);
  const [open, setOpen] = React.useState({
    open: false,
    data: [],
  });

  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data);
    // eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (open.open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open.open]);

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Dob",
      dataIndex: "dob_ad",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile_no",
    },
    { title: "Code", dataIndex: "code" },
    { title: "Type", dataIndex: "type" },

    {
      title: "Action",
      dataIndex: "REFERED",
      align: "center",
      width: 50,
      render: (_, record) => (
        <div className="flex justify-center">
          <Common.AntAction
            action={Action}
            data={record}
            setOpen={(e) => setOpen(e)}
            title="Employee"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="grid gap-3">
      <div>
        <Common.Header
          currentmodule="Employee"
          mainmodule="User Department"
          name="Go Back"
          to="/"
          size={"large"}
        />
      </div>
      <div>
        <div className="flex items-center justify-between bg-[white] px-4 pt-2 pb-2">
          <div className="flex items-center gap-6">
            <div>
              <SearchEmployeeList data={data} onFilterData={OnFilterData} />
            </div>
            <div>
              <Common.Selects
                array={[{ id: 1, name: "Hematology" }]}
                placeholder="Department Id"
                value={"id"}
                description="name"
                name="NAME"
                className="custom-selectbDOB relative mb-0 w-[200px]"
                hidelabel
              />
            </div>
          </div>
          <div className="item-center flex gap-4">
            <div>
              <Common.Buttons
                className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main"
                onClick={() =>
                  setOpen({
                    open: true,
                    data: [],
                    title: "Add Employee",
                    edit: true,
                  })
                }
              >
                Add Employee
              </Common.Buttons>
            </div>
            <div className=" flex items-center font-Poppins text-sm font-medium text-[#4C4C4C]">
              Show
            </div>
            <div>
              <Common.Selects
                className="mb-0"
                array={[
                  { id: 1, name: "15" },
                  { id: 2, name: "30" },
                  { id: 3, name: "45" },
                  { id: 4, name: "60" },
                ]}
                placeholder="15"
                value={"id"}
                description="name"
                name="NAME"
                hidelabel
              />
            </div>
          </div>
        </div>
        <div className="patientlist">
          <Common.Tables
            data={filterData}
            columns={columns}
            X={"1000px"}
            expandable
            spinning={false}
          />
        </div>
      </div>
      {open?.open && <ViewEditdEmployee open={open} setOpen={setOpen} />}
    </div>
  );
};
export default EmployeeList;
const data = [
  {
    sn: 1,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 2,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 3,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 4,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 5,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 6,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 7,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 8,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 9,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 10,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
  {
    sn: 11,
    name: "Sandip Dhakal",

    dob_ad: "1996-3-4",
    code: "00212",
    email: "sandip@gmail.com",
    mobile_no: "9876543234",
    type: "CS79/80-000152",
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    department_id: "775t",
    position_id: "uut5",
    designation_id: "4473",
  },
];

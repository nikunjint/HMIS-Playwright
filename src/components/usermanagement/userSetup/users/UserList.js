import React from "react";
import Common from "../../../common";
import SearchUserList from "./SearchUser";
import { Action } from "../../../../utiles/action";
import ViewEditdUser from "./ViewEdit";
import { Switch } from "antd";

const UserList = () => {
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
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Email Verified At",
      dataIndex: "email_verified_at",
    },

    {
      title: "Status",
      dataIndex: "is_active",
      render: (text, record) => (
        <div>
          <Switch checked={text} />
        </div>
      ),
    },
    {
      title: "Action",
      render: (_, record) => (
        <div>
          <Common.AntAction
            action={Action}
            data={record}
            setOpen={(e) => setOpen(e)}
            title="User"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="grid gap-3">
      <div>
        <Common.Header
          currentmodule="Department"
          mainmodule="User Department"
          name="Go Back"
          to="/"
          size={"large"}
        />
      </div>
      <div>
        <div className="flex items-center justify-between bg-[white] px-4 pb-2 pt-2">
          <div className="flex items-center gap-6">
            <div>
              <SearchUserList data={data} onFilterData={OnFilterData} />
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
                    title: "Add User",
                    edit: true,
                  })
                }
              >
                Add User
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
      {open?.open && <ViewEditdUser open={open} setOpen={setOpen} />}
    </div>
  );
};
export default UserList;
const data = [
  {
    sn: 1,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: true,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 2,
    name: "Sandip Dhakal",
    email: "Report Title 2",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: true,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 3,
    name: "Sandip Dhakal",
    email: "Report Title 3",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: false,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 4,
    name: "Sandip Dhakal",
    email: "Report Title 4",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: true,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 5,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: false,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 6,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: true,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 7,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: false,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 8,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    is_active: true,
    organization_id: "229ER",
    created_at: "2023-4-6",
    created_by: "Nikesh Bhandari",
    updated_by: "Sandip Dhakal",
    sub_organization_id: "22300",
    updated_at: "2023-6-4",
    employee_id: "WD223",
  },
  {
    sn: 9,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
  },
  {
    sn: 10,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
  },
  {
    sn: 11,
    name: "Sandip Dhakal",
    email: "sandip@gmail.com",
    email_verified_at: "Nikesh Bhandari",
    password: "Midas@123",
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
  },
];

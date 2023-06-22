import React from "react";
import Common from "../../../common";
import { Action } from "../../../../utiles/action";
import ViewEditdSubOrganization from "./ViewEdit";
import SearchSubOrgList from "./SubOrdSearch";
import { Switch } from "antd";
import { useFeatchSubOrganization } from "../../../../services/userManagement/SetUp";

const SubOrganizationList = () => {
  const { isLoading, data } = useFeatchSubOrganization();
  const [filterData, setFilterData] = React.useState([]);
  const [open, setOpen] = React.useState({
    open: false,
    data: [],
  });
  const [queryParams, setQueryParams] = React.useState({
    page: 1,
    limit: 10,
  });
  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data?.data);
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [data]);

  React.useEffect(() => {
    if (open.open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open.open]);

  const columns = [
    {
      title: "S.N.",

      render: (_, record, index) =>
        (queryParams?.page - 1) * queryParams?.limit + (index + 1),
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "mobileNo",
    },
    { title: "Code", dataIndex: "code" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex:'isDefault',
      render: (text) => (
        <div>
          <Switch defaultChecked={text === 1?true:false} value={text}>Status</Switch>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "REFERED",
      render: (_, record) => (
        <div>
          <Common.AntAction
            action={Action}
            data={record}
            setOpen={(e) => setOpen(e)}
            title="Sub Organization"
          />
        </div>
      ),
    },
  ];
  return (
    <div className="grid gap-3">
      <div>
        <Common.Header
          currentmodule="Sub-Orgamization"
          mainmodule="User Management"
          name="Go Back"
          to="/"
          size={"large"}
        />
      </div>
      <div>
        <div className="flex items-center justify-between bg-[white] px-4 pb-2 pt-2">
          <div className="flex items-center gap-6">
            <div>
              <SearchSubOrgList data={data?.data} onFilterData={OnFilterData} />
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
                    title: "Add Sub Organization",
                    edit: true,
                    add:true
                  })
                }
              >
                Add Sub Organization
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
            current={data?.meta?.current_page}
            pazesize={data?.meta?.per_page}
            total={data?.meta?.total}
            spinning={isLoading}
            setQueryParams={(e) => setQueryParams(e)}
          />
        </div>
      </div>
      {open?.open && <ViewEditdSubOrganization open={open} setOpen={setOpen} />}
    </div>
  );
};
export default SubOrganizationList;
// const data = [
//   {
//     sn: 1,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 2,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 2",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 3,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 3",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 4,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 4",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 5,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 6,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 7,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 8,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 9,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 10,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
//   {
//     sn: 11,
//     name: 'Sandip Dhakal',
//     address: "Panipokhari 1",
//     phoneno: '9876545434',
//     code: "00212",
//     email: "sandip@gmail.com",
//     created_at:'2023-4-6',
//     created_by:'Nikesh Bhandari',
//     updated_by:'Sandip Dhakal',
//     updated_at:'2023-6-4',
//     organization_id:'775',
//     is_default:true
//   },
// ];

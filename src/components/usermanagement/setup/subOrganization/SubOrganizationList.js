import React from "react";
import Common from "../../../common";
import { Action } from "../../../../utiles/action";
import ViewEditdSubOrganization from "./ViewEdit";
import SearchSubOrgList from "./SubOrdSearch";
import { Switch } from "antd";
import { useDeletSubOrganization, useFeatchSubOrganization } from "../../../../services/userManagement/SetUp";

const SubOrganizationList = () => {
  const [queryParams, setQueryParams] = React.useState({
    page: 1,
    limit: 10,
  });
  const { isLoading, data } = useFeatchSubOrganization(queryParams.page);
  const deletSubOrganization=useDeletSubOrganization()
  const [filterData, setFilterData] = React.useState([]);
  const [open, setOpen] = React.useState({
    open: false,
    data: [],
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
      dataIndex: "phone_no",
      render:(text,record)=>(
        <div>
          {text && text?.slice(0,10)}
        </div>
      )
    },
    {
      title: "Mobile",
      dataIndex: "mobile_no",
      render:(text,record)=>(
        <div>
          {text && text?.slice(0,10)}
        </div>
      )
    },
    { title: "Code", dataIndex: "code" },
    { title: "Email", dataIndex: "email" },
    {
      title: "Status",
      dataIndex:'is_default',
      render: (text) => (
        <div>
          <Switch defaultChecked={text === 1?true:false} value={text} checked={text ===1?true:false}>Status</Switch>
        </div>
      ),
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (text, record) => (
        <div>
          <Common.AntAction
            action={Action}
            data={record}
            setOpen={(e) => setOpen(e)}
            title="Sub Organization"
            id={text}
            delet={deletSubOrganization}
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
        <div className="flex items-center justify-between bg-[white]">
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

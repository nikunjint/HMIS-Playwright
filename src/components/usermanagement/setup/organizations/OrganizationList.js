import React from "react";
import Common from "../../../common";
import { Action } from "../../../../utiles/action";
import ViewEditdOrganization from "./ViewEdit";
import SearchOrganizationList from "./SearchOrganization";
import { useFeatchOrganization } from "../../../../services/userManagement/SetUp";

const OrganizationList = () => {
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

  const { isLoading, data } = useFeatchOrganization(queryParams.page);

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
      dataIndex: "phoneno",
    },
    { title: "Code", dataIndex: "code" },
    { title: "Email", dataIndex: "email" },

    {
      title: "Action",
      dataIndex: "REFERED",
      align: "center",
      width: 50,
      render: (_, record) => (
        <div classname="flex justify-center">
          <Common.AntAction
            action={Action.filter((item)=>item.key !==3)}
            data={record}
            setOpen={(e) => setOpen(e)}
            title="Organization"
          />
        </div>
      ),
    },
  ];
  return (
    <div classname="grid gap-3">
      <div>
        <Common.Header
          currentmodule="Organization"
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
              <SearchOrganizationList data={data?.data} onFilterData={OnFilterData} />
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
                    title: "Add Organization",
                    edit: true,
                    add:true
                  })
                }
              >
                Add Organization
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
        <div classname="patientlist">
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
      {open?.open && <ViewEditdOrganization open={open} setOpen={setOpen} />}
    </div>
  );
};
export default OrganizationList;

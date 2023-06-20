import React from "react";
import Common from "../../../common";
import SearchDepartmentList from "./SearchDepartmentList";
import { Action } from "../../../../utiles/action";
import ViewEditdDepartment from "./ViewEdit";
import { useFeatchOrganization } from "../../../../services/userManagement/SetUp";

const DepartmentList = () => {
  const [filterData, setFilterData] = React.useState([]);

  const [open,setOpen]=React.useState({
    open:false,
    data:[]
  })
  const [queryParams, setQueryParams] = React.useState({
    page: 1,
    limit: 10,
  });
  const { isLoading, data:isData } = useFeatchOrganization(queryParams.page);
  console.log('kkk',isLoading, isData)
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
      title: "S.N.",

      render: (_, record, index) =>
        (queryParams?.page - 1) * queryParams?.limit + (index + 1), 
    },
    {
      title: "Name",
      dataIndex: "name",
     
    },
    {
      title: "Report Title",
      dataIndex: "report_title",
     
    },
    {
      title: "Order",
      dataIndex: "order",
     
    },
    { title: "Code", dataIndex: "code"},
    { title: "Type", dataIndex: "type"  },
    {
      title: "Action",
      render:(_,record)=>(
        <div >
        <Common.AntAction action={Action} data={record}  setOpen={(e)=>setOpen(e)} title="Department"/>
        </div>
      )
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
      <div >
      <div className="flex items-center justify-between bg-[white] px-4 pt-2 pb-2">
        <div className="flex items-center gap-6">
          <div>
            <SearchDepartmentList
              data={data}
              onFilterData={OnFilterData}
            />
          </div>
          <div>
            <Common.Selects
              array={[{ id: 1, name: "Hematology" }]}
              placeholder="Parent ID"
              value={"id"}
              description="name"
              name="NAME"
              className="custom-selectborder relative mb-0 w-[200px]"
              hidelabel
            />
          </div>
        </div>
       
        <div className="item-center flex gap-4">
        <div>
          <Common.Buttons className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main" onClick={()=>setOpen({open:true,data:[],title:"Add Department",edit:true})}>
            Add Department
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
      <div className="patientlist mb-5">
        <Common.Tables
          data={filterData}
          columns={columns}
          X={"1000px"}
          rowKey="sn"
          expandable
          spinning={false}
          pageSize={queryParams.limit}
          total={11}
          current={queryParams.page}
          setQueryParams={(e) => setQueryParams(e)}
        />
      </div>
      </div>
      {
        open?.open &&(
            <ViewEditdDepartment open={open}setOpen={setOpen}/>
        )
      }
    </div>
  );
};
export default DepartmentList;
const data = [
  {
    sn: 1,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true,
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 2,
    name: 'Sandip Dhakal',
    report_title: "Report Title 2",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true,
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 3,
    name: 'Sandip Dhakal',
    report_title: "Report Title 3",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true,
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 4,
    name: 'Sandip Dhakal',
    report_title: "Report Title 4",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true,
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 5,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true, 
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 6,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true,
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 7,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true,
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 8,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
    is_ward:true,
    organization_id:'229ER',
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    updated_by:'Sandip Dhakal',
    sub_organization_id:'22300',
    updated_at:'2023-6-4'
  },
  {
    sn: 9,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
  },
  {
    sn: 10,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
  },
  {
    sn: 11,
    name: 'Sandip Dhakal',
    report_title: "Report Title 1",
    order: 'order no',
    code: "00212",
    type: "CS79/80-000152",
    SAMPLENO: "2080-N57",
  },
];

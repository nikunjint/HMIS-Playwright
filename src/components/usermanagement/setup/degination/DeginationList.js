import React from "react";
import Common from "../../../common";
import { Action } from "../../../../utiles/action";
import SearchDeginationList from './SearchDegination'
import ViewEditdDegination from "./ViewEdit";

const DeginationList = () => {
  const [filterData, setFilterData] = React.useState([]);
  const [open,setOpen]=React.useState({
    open:false,
    data:[]
  })

  const [queryParams, setQueryParams] = React.useState({
    page: 1,
    limit: 10,
  });

  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  React.useEffect(() => {
    setFilterData(data);
    // eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "SN",
      render: (_, record, index) =>
      (queryParams?.page - 1) * queryParams?.limit + (index + 1), 
  },
     

    {
      title: "Name",
      dataIndex: "name",
     
    },
    {
      title: "Create Date",
      dataIndex: "created_at",
     
    },
    {
      title: "Updated Date",
      dataIndex: "created_at",
     
    },
    
    {
      title: "Action",
    
      render:(_,record)=>(
        <div classname="flex justify-center">
        <Common.AntAction action={Action} data={record}  setOpen={(e)=>setOpen(e)} title="Degination"/>
        </div>
      )
    },
  ];
  return (
    <div classname="grid gap-3">
      <div>
        <Common.Header
          currentmodule="Degination"
          mainmodule="User Management"
          name="Go Back"
          to="/"
          size={"large"}
        />
      </div>
      <div>
      <div className="flex items-center justify-between bg-[white] px-4 pt-2 pb-2">
        <div className="flex items-center gap-6">
          <div>
            <SearchDeginationList
              data={data}
              onFilterData={OnFilterData}
            />
          </div>
        </div>
       
        <div className="item-center flex gap-4">
        <div>
          <Common.Buttons className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main" onClick={()=>setOpen({open:true,data:[],title:"Add Degination",edit:true})}>
            Add Degination
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
            <ViewEditdDegination open={open}setOpen={setOpen}/>
        )
      }
    </div>
  );
};
export default DeginationList;
const data = [
  {
    sn: 1,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 2,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 3,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 4,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 5,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 6,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 7,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 8,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 9,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 10,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
  {
    sn: 11,
    name: 'Sandip Dhakal',
    created_at: "2023-6-7 ",
    updated_at:"2023--7-8"
    
   
  },
];

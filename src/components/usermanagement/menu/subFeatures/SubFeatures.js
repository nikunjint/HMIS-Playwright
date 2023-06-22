import React from "react";
import Common from "../../../common";
import { Action } from "../../../../utiles/action";
import SearchSubFeatures from "./SearchSubFeatures";
import ViewEditdSubFeatures from "./SubViewEdit";

const SubFeatures = () => {
  const [filterData, setFilterData] = React.useState([]);
  const [open,setOpen]=React.useState({
    open:false,
    data:[]
  })

  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  const [queryParams, setQueryParams] = React.useState({
    page: 1,
    limit: 10,
  });

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
      dataIndex: "NAME",
     
    },
    {
      title: "Code",
      dataIndex: "CODE",
     
    },
    {
      title: "Remarks",
      dataIndex: "REMARKS",
     
    },
    { title: "Link", dataIndex: "LINK"},
    { title: "Class", dataIndex: "CLASS"  },
    { title: "Order", dataIndex: "ORDER"  },

    {
      title: "Action",
      dataIndex: "REFERED",
      align:'center',
      width:50,
      render:(_,record)=>(
        <div className="flex justify-center">
        <Common.AntAction action={Action} data={record}  setOpen={(e)=>setOpen(e)} title="Sub Features"/>
        </div>
      )
    },
  ];
  return (
    <div className="grid gap-3">
      <div>
        <Common.Header
          currentmodule="SubFeatures"
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
            <SearchSubFeatures
              data={data}
              onFilterData={OnFilterData}
            />
          </div>
        </div>
        <div className="item-center flex gap-4">
        <div>
          <Common.Buttons className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main" onClick={()=>setOpen({open:true,data:[],title:"Add Sub Features",edit:true})}>
            Add Sub Features
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
            <ViewEditdSubFeatures open={open}setOpen={setOpen}/>
        )
      }
    </div>
  );
};
export default SubFeatures;
const data = [
  {
    sn: 1,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"
  },
  {
    sn: 2,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 3,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 4,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 5,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 6,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 7,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 8,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 9,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 10,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
  {
    sn: 11,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    ORDER: "2",
    newtab: "test",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_id:"Sanjog",
    suborganization_id:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4',
    CLASS:"Hello"

   
  },
];

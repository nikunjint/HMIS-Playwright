import React from "react";
import Common from "../../../common";
import { Action } from "../../../../utiles/action";
import SearchMenu from "./SearchMenu";
import ViewEditdMenu from "./ViewEdit";

const Menu = () => {
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
        <Common.AntAction action={Action} data={record}  setOpen={(e)=>setOpen(e)} title="Menu"/>
        </div>
      )
    },
  ];
  return (
    <div className="grid gap-3">
      <div>
        <Common.Header
          currentmodule="Menu"
          mainmodule="User Management" 
          name="Go Back"
          to="/"
          size={"large"}
        />
      </div>
      <div className="lg:item-center mx-auto p-2  w-full rounded-[10px] border-[4px] border-[white] bg-[white] shadow-bottom shadow-gray">
      <div className="flex items-center justify-between bg-[white]">
        <div className="flex items-center gap-6">
          <div>
            <SearchMenu
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
          <Common.Buttons className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main" onClick={()=>setOpen({open:true,data:[],title:"Add Menu",edit:true})}>
            Add Menu
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
      <div className="patientlist patient_list">
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
            <ViewEditdMenu open={open}setOpen={setOpen}/>
        )
      }
    </div>
  );
};
export default Menu;
const data = [
  {
    sn: 1,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
    created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
  },
  {
    sn: 2,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 3,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 4,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 5,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 6,
    NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 7,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 8,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 9,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 10,
      NAME: 'Sandip Dhakal',
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal',
    updated_at:'2023-6-4'
   
  },
  {
    sn: 11,
      NAME: 'Sandip Dhakal', 
    CODE: "Panipokhari 1",
    REMARKS: '9876545434',
    LINK: "00212",
    CLASS: "sandip@gmail.com",
    ORDER: "2",
        created_at:'2023-4-6',
    created_by:'Nikesh Bhandari',
    organization_by:"Sanjog",
    suborganization_by:"Sanjog",
    updated_by:'Sandip Dhakal', 
    updated_at:'2023-6-4'
   
  },
];

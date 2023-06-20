import React from 'react'
import Common from '../../../common'
import { HiColorSwatch, HiOfficeBuilding, HiOutlineUser, HiRefresh, HiSupport } from 'react-icons/hi'
import { Form } from 'antd'

const Index=()=>{
    return(
       <Common.AntdCard bg={"#00000008"} className="font-Poppins"
            title='Doctor' 
            icon={<HiOutlineUser/>}  
            buttonType={
           <div className='flex justify-between items-center gap-4'>
             {
                item.map((item)=>(
                    <div key={item.id} className={`flex items-center gap-1 bg-[${item.bg}] text-white text-sm font-Poppins p-2 rounded-md cursor-pointer`}>
                        <div>
                          {item.icon}
                        </div>
                        <div>
                        {item.name}

                        </div>
                    </div>
                ))
             }
           </div>
       }
       >
         <div>
         <Form className="">
            <div className="w-full grid-flow-row  gap-x-4 gap-y-0 lg:grid lg:grid-cols-4">
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="55555566"
                prefix="Patient Id:"
                readOnly 
              />
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="Sanjog"
                prefix="Patient Name:"
                readOnly 
              />
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="Sanjog"
                prefix="Manual Sample no:"
                readOnly 
              />
              <Common.Inputs
                name="name"
                hidelabel
                initialValue="Sanjog"
                prefix="Age/Gender:"
                readOnly 
              />
              <Common.Inputs
                name="name"
                hidelabel className="mb-0"
                initialValue="Sanjog"
                prefix="Registration Date/Time:"
                readOnly 
              />
               <Common.Inputs
                name="name"
                hidelabel className="mb-0"
                initialValue="Sanjog"
                prefix="Service Start Date/Time::"
                readOnly 
              />
                <Common.Selects
            array={[
              { id: 1 },
              { id: 2 },
              { id: 3 },
              { id: 4 },
              { id: 5 },
              { id: 6 },
            ]}
            label="Department:"
            value={"id"}
            isfield="true"
            hidelabel
            name="employee_id"
          />
            <Common.Selects
            array={[
              { id: 1 },
              { id: 2 },
              { id: 3 },
              { id: 4 },
              { id: 5 },
              { id: 6 },
            ]}
            label="Unit:"
            value={"id"}
            hidelabel
            isfield="true"
            name="employee_id"
          />
            <Common.Selects
            array={[
              { id: 1 },
              { id: 2 },
              { id: 3 },
              { id: 4 },
              { id: 5 },
              { id: 6 },
            ]}
            label="Doctor:"
            value={"id"}
            isfield="true"
            hidelabel
            name="employee_id"
          />
            </div>

            <Common.Buttons size={"tiny"}
            name="Submit"
            htmlType="submit"
            className="my-button btn-primary ml-auto text-uppercase flex bg-[#0d2f66] flex items-center justify-center"
          />
            
        </Form>
      </div>
       </Common.AntdCard >
    )
}
export default Index
const item=[
    {
        name:'Patient In',
        icon: <HiOfficeBuilding/>,
        bg:'#0d2f66',
        id:1

    },
    {
        name:'Patient Out',
        icon:<HiColorSwatch/>,
        bg:'#f43f5e',
        id:2
    },
    {
        name:'Refer',
        icon:<HiSupport/>,
        bg:"#0dcaf0",
        id:3
    },
    {
        name:'Exchange',
        icon:<HiRefresh/>,
        bg:"#212529",
        id:4
    },
    
]
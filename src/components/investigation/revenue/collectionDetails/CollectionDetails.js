import React from 'react'
import Common from '../../../common'

const columns = [
  {
    title: "SN",

    dataIndex: "sn",
  },

  {
    title: "Username",
    dataIndex: "username",
  },

  {
    title: "Purchase",
    dataIndex: "purchase",
  },



];

const data = [
  {
    sn: 1,

    username: "CBC",

    purchase: "005009",

  },

  {
    sn: 2,

    username: "RFT",

    purchase: "322777",

  },
  {
    sn:3,
    username:'Blood  C/S',
    purchase: "445454",
  },

];

function Index() {



  const [filterData, setFilterData] = React.useState([]);
  
    React.useEffect(() => {
      setFilterData(data);
    }, []); 

  return (
    <div>
         <Common.Cards>
    <div className="flex items-center justify-between bg-[#fff]"> 
      <div className="flex items-center gap-6 pl-2">
     
      <div class=" grid grid-flow-row-dense grid-rows-1 py-2 pt-0">
        <div class="flex items-center justify-between">
            <div class="flex font-Poppins font-medium
             items-center gap-1">Collection Details
             </div>
             <div>
        </div>
        </div>
        <div class="text-[#6B6B6B] flex justify-start font-Poppins text-sm font-medium ">
        Top performing test lists
            </div>
            </div>
    
      </div>
 
    </div>
    <div className="patientlist flex items-center"> 

<div className='pl-4 mr-[70px]'>
<div  className='font-bold font-Poppins text-[30px] xl:text-[40px]'>2,839</div>
<div>
            <div className='font-Poppins font-normal text-sm text-[#2CB257]'>16.05%</div>
            <div className='font-Poppins font-normal text-xs text-[#A8A8A8] mt-[2px]'>vs last 24 hours</div>
          </div>
</div>

    <Common.Tables
        spinning={false}
        columns={columns}
        data={filterData}
        pagination={false}
        size="small"
        className="cursor-pointer w-full"
      />
    </div>
    </Common.Cards>
    </div>
  )
}

export default Index
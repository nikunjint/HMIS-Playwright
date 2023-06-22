import React from 'react'
import { Statistic } from 'antd';
import chartup from "../../../../src/assets/chartup.png";
import chartdown from "../../../../src/assets/chartdown.png";

const items = [
    {
      key: "1",
      label: `Total Sales`,
      value: `2,839`,
      image: chartup,
    },
    {
      key: "2",
      label: `Total Refunds`,
      value: `857`,
      image: chartdown,
    },
    {
      key: "3",
      label: `Discounted Amount`,
      value: `5,879`,
      image: chartup,
    },
    {
      key: "4",
      label: `TPA's`,
      value: `1,239`,
      image: chartup,
    },
    {
      key: "5",
      label: `Deposits`,
      value: `2,839`,
      image: chartdown,
    },

  ];

function RevenueDetail() {
  return (
    <div className='grid grid-cols-5 mt-5 gap-x-3'>
    {items.map(item => (
   <div key={item.key} className='bg-white relative shadowdrop p-3 rounded-[10px] px-5'>
   <div className='font-Poppins text-[#6B6B6B] xl:text-tiny text-sm'>{item.label}</div>
   <div className='flex items-center justify-between'>
   <div  className='font-bold font-Poppins text-[30px] xl:text-[40px]'>
   <Statistic
   
   value={item.value}
   precision={2}
   valueStyle={{ color: '#000' }}
   suffix={ <img src={item.image} className="absolute w-[40px] right-[10px] xl:right-[100px] top-[10%] xl:top-[50%]" style={{ width: "40px" }} alt="Loading.." /> }
   
   
 /> 
   </div>

   <div>
   <div className={`font-Poppins font-normal text-sm ${item.image == chartup ? 'text-[#2CB257]' : 'text-red'}`}>
16.05%
</div>       <div className='font-Poppins font-normal text-xs text-[#A8A8A8] mt-[2px]'>vs last 24 hours</div>
   </div>

   </div>
 </div>
    ))}
  </div>
  )
}

export default RevenueDetail
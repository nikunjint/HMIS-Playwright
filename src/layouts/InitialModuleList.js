import { Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const InitialModuuleList=({filterData})=>{

  const filterContainerRef = React.useRef(null);
  const [topScale, setTopScale] = useState(true);
  const [bottomScale, setBottomScale] = useState(false);

  const handleTopClick = () => {
    filterContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    setTopScale(!topScale);
    setBottomScale(false); // Deactivate the bottom button
  };

  const handleBottomClick = () => {
    const container = filterContainerRef.current;
    const scrollHeight = container.scrollHeight;
    container.scrollTo({ top: scrollHeight, behavior: "smooth" });
    setBottomScale(!bottomScale);
    setTopScale(false); // Deactivate the top button
  };



    return(
        <div   ref={filterContainerRef} className='h-[280px] overflow-x-hidden overflow-y-hidden grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 pl-0 mt-1 mb-3'>
               {
        filterData?.map((item)=>(
          <Link to={item.to} key={item.to}>
            <div className='text-center flex items-center justify-center'>
              {item.icon}
            </div>
            <div className='font-Poppins font-normal text-center whitespace-nowrap text-[11px] xl:text-[12px] pt-2 text-[#000] cursor-pointer'>
            {item.name}

            </div>
          </Link>
        ))
      }

<div className="absolute -right-5 top-[40%] flex flex-col">
                <Button onClick={handleTopClick} className="border-none">
                  <div
                    className={`${
                      topScale
                        ? "scale150 h-[7px] w-[7px] rounded-full bg-[#6D6D6D]"
                        : "h-[7px] w-[7px] rounded-full bg-[#6D6D6D]"
                    }`}
                  ></div>
                </Button>
                <Button onClick={handleBottomClick} className="border-none">
                  <div
                    className={`${
                      bottomScale
                        ? "scale150 h-[7px] w-[7px] rounded-full bg-[#6D6D6D]"
                        : "h-[7px] w-[7px] rounded-full bg-[#6D6D6D]"
                    }`}
                  ></div>
                </Button>
              </div>


        </div>
    )
}
export default InitialModuuleList
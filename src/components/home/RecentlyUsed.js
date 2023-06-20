import React from "react";
import { rightsiderData } from "../../utiles/rightsider";
import { Link } from "react-router-dom";

function RecentlyUsed({hover}) {
  return (
    <div>
      <h3 className="mb-2 mt-0 font-Poppins text-sm pb-1 font-medium">
        Recently Used
      </h3>
      <div className="grid grid-cols-1 gap-4 cursor-pointer">
        {rightsiderData.map((items, index) => {
          if (index <= 3) {
            return (
              <div key={items.to} className={hover ? 'hover-white p-1 rounded-[5px]' : ''}> 
              <Link to={`${items?.to}`} className="text-[#292561]">

              <div className="flex items-center px-2">
                {items.icon}
                <div>
                <div className="ml-2 whitespace-nowrap font-Poppins text-sm">
                  {items.name}
                </div>
                 <div className="text-[#777777] font-normal font-Poppins text-[12px] 2xl:text-[12px] text-left ml-2">
                  2h Ago
                </div> 
                </div>
               
              </div>
              </Link>
              </div>
            );
          }else{
            return null
          }
        })}
      </div>
    </div>
  );
}

export default RecentlyUsed;

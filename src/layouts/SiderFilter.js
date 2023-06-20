import { isEmpty } from 'lodash'
import React from 'react'
import { memo } from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const SiderFilter=({filterData,otherData,searchName})=> {
  return (
    <div className='w-full'>
        {(filterData?.length < 1 || isEmpty(filterData) )&& (
    <div className="flex flex-col items-start mt-5">
      <h3 className="text-base font-medium mb-5">{searchName}</h3>
      {otherData
        ?.filter((item) => item.name !== filterData[0]?.name)
        .map((item) => (
          <Link
            to={item.to}
            key={item.to}
            className="mb-4 text-left text-[14px] rounded-[10px] p-1 w-[50%] font-medium text-primary flex items-center hover:bg-[#fff] justify-between"
          >
            <div className='flex items-center'>
            {item.icon}
            <span className="ml-2">{item?.name}</span>
            </div>
            <div><HiChevronRight size={20}/></div>
          </Link>
        ))}
    </div>
  )}

    </div>
  )
}

export default memo(SiderFilter)
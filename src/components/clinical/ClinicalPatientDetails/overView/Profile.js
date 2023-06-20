import { Avatar } from 'antd'
import React from 'react'
import { HiUser } from 'react-icons/hi'
import Common from '../../../common'

const Profile=()=>{ 
    return(
      <Common.Cards>
        <div className=' flex items-center'>
            <div>
            <Avatar size={120} icon={<HiUser />} className="flex items-center justify-center ml-2"/>
            </div>
            <div className='w-10/12 text-left pl-10'>
                <div className='font-medium text-lg font-Poppins mb-3'>
                    Sanjog Piya
                </div>
                <div className='md:grid md:grid-cols-2'>
                    <div className='bg-white border-gray-600 p-2 font-Poppins font-semibold'> 
                       Gender: <span class="font-normal">Male</span>
                    </div>
                    <div className='bg-white border-gray-600 p-2 font-Poppins font-semibold'>
                        Age:  <span class="font-normal">25</span>
                    </div>
                    <div className='bg-white border-gray-600 p-2 font-Poppins font-semibold'>
                     Guardian Name:  <span class="font-normal">Sanjog Piya</span>
                    </div>
                    <div className='bg-white border-gray-600 p-2 font-Poppins font-semibold'>
                     Phone:  <span class="font-normal">9846579211</span>
                    </div>
                </div>
            </div>
        </div>
      </Common.Cards>
    )
}
export default Profile
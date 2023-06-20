import React from 'react'
import Common from '../../../common'
import { HiUser } from 'react-icons/hi'
import { options } from '../../../../utiles/sider'

const PostCovit=()=>{
    return(
        <div className="postcovid"> 
            <Common.AntdCard  title="POST COVIT" icon={<HiUser/>} bg="#0d2f66" tc='white'>
            <div className="flex items-center justify-content-center">
            <div className="w-full grid-flow-row  gap-x-4 gap-y-0 lg:grid lg:grid-cols-5">
               <Common.DatePickers placeholder="PCR Date" hidelabel name="pcrdate" className="w-full mb-2" />
               <Common.AntdCheckbox options={checkBox} placeholder="Admitted?" name="admitted" label="Admitted" hidelabel/>
               <Common.Inputs
                name="admittedat"
                hidelabel 
                className="mb-0"
                lable="Admitted At"
              />
               <Common.DatePickers placeholder="From " hidelabel name="from" className="w-full"/>
               <Common.DatePickers placeholder="To" hidelabel name="to" className="w-full"/>
               <Common.AntRadio className="text-sm -mt-2 antradio" options={options} label='Oxygen Required?' name="oxygenrequired"/>

            </div>
            </div>
            </Common.AntdCard>
        </div>
    )
}
export default PostCovit
const checkBox=[
    {
        option:'Yes',
        value:'yes'
    }
]
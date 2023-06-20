import React from 'react'
import Common from '../../common'
import { Tabs } from 'antd';
import { HiOutlineChartPie, HiPlay, HiViewGrid } from 'react-icons/hi';
import OverView from './overView'
import DoctorVisit from './doctorVisit';
import VitaSocialHistory from './vitalSocialHistory'
import TreatmentHistory from './TreatMentHistory'
const Index=()=>{
    return(
        <div>
           <div>
           <div>
            <Common.Header name="Go Back or Hit ESC" mainmodule="Clinical " currentmodule="Patient Details"/>
            </div>
            <div>
            <Tabs
                defaultActiveKey="1"
                style={{
                marginBottom: 32,
                }}
                items={item.map((item, i) => {
                return {
                    label:<div className='flex items-center gap-2 font-Poppins'>
                        <div>{item.icon}</div>
                        <div>{item.lable}</div>
                    </div>,
                    key: item.id,
                    children: item.name,
                };
                })}
            />
            </div>
           </div>
        </div>
    )
}
export default Index
const item=[
    {
        lable:'OverView',
        id:1,
        icon:<HiViewGrid/>,
        name:<OverView/>
    },
    {
        lable:'Doctor Visits',
        id:2,
        icon:<HiPlay/>,
        name:<DoctorVisit/>
    },
    {
        lable:'Vital & Social History',
        id:4,
        icon:<HiOutlineChartPie/>,
        name:<VitaSocialHistory/>
    },
    {
        lable:'Treatment History',
        id:5,
        icon:<HiOutlineChartPie/>,
        name:<TreatmentHistory/>
    },
]
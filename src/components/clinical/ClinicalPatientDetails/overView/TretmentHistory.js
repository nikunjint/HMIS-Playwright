import React from 'react'
import Common from '../../../common'

const TreatmentHistory=()=>{
    return(
        <Common.Cards loaging={false} title={'Treatment History'}>
            <Common.Tables columns={columns} spinning={false}/>

        </Common.Cards>
    )
}
export default TreatmentHistory

const columns=[
    {
        title:'OPD No',
        key:'testname',
        dataIndex:'testname'
    },
    {
        title:'Case ID',
        key:'caseId',
        dataIndex:'caseId'
    },
    {
        title:'Appointment Date',
        key:'appointment Date',
        dataIndex:'appointment Date'
    },
    {
        title:'Consultant',
        key:'consultant',
        dataIndex:'consultant'
    },
    {
        title:'	Symptoms',
        key:'symptoms',
        dataIndex:'symptoms'
    },
   
]
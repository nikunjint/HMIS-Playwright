import React from 'react'
import Common from '../../../common'

const VisitDetails=()=>{
    return(
        <Common.Cards loaging={false} title={'Visit Details'}>

            <Common.Tables columns={columns} spinning={false}/>
        </Common.Cards>
    )
}
export default VisitDetails

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
        title:'	Reference Symptoms',
        key:'referencesymptoms',
        dataIndex:'referencesymptoms'
    },
   
]
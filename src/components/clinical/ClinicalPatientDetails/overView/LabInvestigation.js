import React from 'react'
import Common from '../../../common'

const Labinvestigation=()=>{
    return(
        <Common.Cards loaging={false} title={'Lab Investigation'}>

           <Common.Tables columns={columns} spinning={false}/>
        </Common.Cards>
    )
}
export default Labinvestigation

const columns=[
    {
        title:'Test Name',
        key:'testname',
        dataIndex:'testname'
    },
    {
        title:'Case Id',
        key:'caseId',
        dataIndex:'caseId'
    },
    {
        title:'Lab',
        key:'lab',
        dataIndex:'lab'
    },
    {
        title:'Sample Collected',
        key:'samplecollected',
        dataIndex:'samplecollected'
    },
    {
        title:'Expected Date',
        key:'expecteddate',
        dataIndex:'expecteddate'
    },
    {
        title:'Approved By',
        key:'approved',
        dataIndex:'approved'
    },
]
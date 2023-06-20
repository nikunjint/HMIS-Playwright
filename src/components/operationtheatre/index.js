import React from 'react'
import { Divider } from 'antd'
import Common from '../common'
import SearchClinical from './SearchClinical'
import Addmission from './Addmission'
import { useNavigate } from 'react-router-dom'
import Discharge from './Discharge'
import TransferIn from './TransferIn'
import TransferOut from './TransferOut'

const Index = () => {
  const [filterData, setFilterData] = React.useState([]);
  const navigate = useNavigate()
  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  const handleRowClick = (record) => {
    navigate(`/clinical/details/${record.key}`)
  };

  React.useEffect(() => {
    setFilterData(data);
  }, []);
  return (
    <div className='md:grid md:grid-cols-3 gap-4 block '>
      <div >
        <div className='text-left text-lg font-medium font-Poppins'>
          Operation Theatre
        </div>
          <Divider className='my-0 mt-1 mb-5'/>
        <div>
          <SearchClinical
            data={data}
            onFilterData={OnFilterData}
          />
        </div>
        <div className='text-left text-lg font-medium font-Poppins mt-5'>
          Newly Registered Patients
        </div>
        <div>
          <Divider className='my-0 mt-1 mb-5'/>
        </div>
        <div>
          <Common.Tables className="clinical" columns={columns} data={filterData} spinning={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: () => handleRowClick(record),
                style: { cursor: 'pointer' }
              };
            }} />
        </div>
      </div>

      <div className='grid col-span-2 grid-cols-2 gap-5'>
        <div>
            <Addmission />
        </div>
        <div>
            <Discharge />
        </div>
        <div>
            <TransferIn />
        </div>
        <div>
            <TransferOut />
        </div>
      </div>


  
    </div>
  )
}
export default Index
const columns = [
  {
    title: 'Patient ID',
    key: 'patient_id',
    dataIndex: 'patentId'
  },
  {
    title: 'Patient Name',
    key: 'patient_name',
    dataIndex: 'patentname'
  },
  {
    title: 'Age/Sex',
    key: 'age/sex',
    dataIndex: 'ageSex'
  },
  {
    title: 'Mobile Nmber',
    key: 'mobNo',
    dataIndex: 'mobileNumber'
  },
]


const data = [
  {
    key: "1",
    patentId: '1',
    mobileNumber: "9865423469",
    ageSex: '30/M',
    patentname: "Sanjog"

  },
  {
    key: "2",
    patentId: '2',
    mobileNumber: "9865423469",
    ageSex: '30/M',
    patentname: "Nikesh"

  },
];
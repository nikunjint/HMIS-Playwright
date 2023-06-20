import React from 'react'
import { Divider } from 'antd'
import Common from '../common'
import { useNavigate } from 'react-router-dom'
import Admission from './Admission'
import DisCharge from './DisCharge'
import TransferIn from './TransferIn'
import TransferOut from './TransferOut'
import Death from './Death'
import CriticalPatient from './CriticalPatient'
import SearchWard from './SearchWard'

const Index = () => {
  const [filterData, setFilterData] = React.useState([]);
  const navigate = useNavigate()
  const OnFilterData = React.useCallback((item) => {
    setFilterData(item);
  }, []);

  const handleRowClick = (record) => {
    navigate(`/ward/details/${record.key}`)
  };

  React.useEffect(() => {
    setFilterData(data);
  }, []);
  return (
    <div className='lg:grid lg:grid-cols-3 gap-4 block '>
      <div className='col-spn-1'>
        <div className='text-left text-lg font-medium font-Poppins'>
          Ward
        </div>
          <Divider className='my-0 mt-1 mb-5'/>
        <div>
          <SearchWard
            data={data}
            onFilterData={OnFilterData}
          />
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
      <div className='lg:grid lg:grid-cols-2 gap-4 w-full lg:col-span-2'>
        <div>
        <Admission />

        </div>
        <div>
        <DisCharge />
      </div>
      <div>
        <TransferIn/>
      </div>
      <div>
        <TransferOut/>
      </div>
      <div>
      <Death/>
      </div>
      <div>
        <CriticalPatient/>
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
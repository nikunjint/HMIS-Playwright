import { Table } from 'antd';
const columns = [
  {
    title: 'Row Tier',
    dataIndex: 'key',
    key: 'key',
    width: 100,
  },
  {
    title: 'Left',
    children: [
      {
        title: 'Footer Type',
        dataIndex: 'footerleft',
        key: 'age',
        width: 150,
      }
    ],
  },
  {
    title: 'Left Center',
    children: [
      {
        title: 'Username',
        dataIndex: 'leftcentername',
        key: 'leftcentername',
        width: 200,
      },
      
    ],
  },
  {
    title: 'Center',
    children: [
      {
        title: 'Footer Type',
        dataIndex: 'centerfooter',
        key: 'centerfooter',
        width: 200,
      },
      
    ],
  },
  {
    title: 'Right Center',
    children: [
      {
        title: 'Username',
        dataIndex: 'rightcentername',
        key: 'rightcentername',
        width: 200,
      },
      
    ],
  },
  {
    title: 'Right',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    children: [
        {
          title: 'Footer Type',
          dataIndex: 'rightfooter',
          key: 'rightfooter',
          width: 200,
        },
        
      ],
   
  },
];

const ReportFooter = (props) => {
    const rowClassName = (record, index) => {
        return "even-row";
      }

    return (
        <div className='transparent-table rowtiertable'>
        <Table
            rowClassName={rowClassName}
            columns={columns}
            dataSource={props.data}
            pagination={false}
            size="middle"
           
        />
        </div>
     
    )
 
}
export default ReportFooter;

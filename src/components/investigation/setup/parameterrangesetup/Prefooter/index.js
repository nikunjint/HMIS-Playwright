
import React from 'react'
import { PlusCircleFilled } from '@ant-design/icons'
import { Button, Input, Select, Switch } from 'antd'
import Common from '../../../../common'

function Index() {
  const inputRefs = React.useRef([]);
  const [data, setData] = React.useState([
      {
        id:1,
        prefootertype: 'jack',
        Abbreviation: 'Abbreviation',
       
      },
      {
          id:2,
        prefootertype: 'jack',
        Abbreviation: 'Abbreviation',
      
      },
    ]);

  const columns=[
      {
          title:"Prefooter Type",
          dataIndex:'prefootertype',
          key:'prefootertype',
          editable: true,
          width:250,
          render: (text, record, index) => (
              <Select
              ref={(el) => (inputRefs.current[index] = el)} 
              placeholder="Prefooter Type"
              className='w-full'
              defaultValue="Comment"
              
              options={[
                { value: 'Comment', label: 'Comment' },
                { value: 'End note', label: 'End note' },
                
              ]}
            />
            
            ),
      },
      {
          title:"Abbreviation",
          dataIndex:'abbreviation',
          key:'abbreviation',
          editable: true,
          width:150,
          render: (text, record, index) => (
              <div>
                  <Input 
                  value="12345" 
                  placeholder="Select Abbreviation" 
                  onChange={(e) => handleFieldChange(e.target.value, record.id, 'abbreviation')}/>

              </div>
          )
      },
      {
          title:"Comment / EndNote",
          dataIndex:'comment',
          width:650,
          key:'comment',
          render: (text, record, index) => (
              <div>
                  <Input.TextArea 
                  rows={3}
                  placeholder="Input Comment / EndNote"
                  onChange={(e) => handleFieldChange(e.target.value, record.id, 'comment')}/>

              </div>
          )
      },
     
      {
        title:'Active',
        key:"active",
      
        width:200,
        render:(taxt,record)=>(

              <Switch 
              style={{ backgroundColor: "#f0f0f0" }}
              checkedChildren={<div style={{ backgroundColor: "#000" }}></div>}
              defaultChecked/>
        )
      },
      {
        title:'Default',
        key:"Default",
      
        width:200,
        render:(taxt,record)=>(
          <Switch
            style={{ backgroundColor: "#f0f0f0" }}/>

         
        )
      },
    
  ]
  

  const handleAddRow = () => {
      const newRow = {
          id: data.length + 1,
          prefootertype: '',
          abbreviation: '',
          comment:""
         
        };
        setData((prevData) => [newRow,...prevData]);
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus(); 
        }
  };

  const handleFieldChange = (value, recordId, fieldName) => {
      const newData = data.map((item) => {

          if ((item.id).toString() === (recordId).toString()) {
            return { ...item, [fieldName]: value };
          }else{

              return item;
          }
          
        });
        setData(newData);
    };
  return (
<div className=' pt-4 bg-white mt-2 pb-2'>
        <div>
            <Button className="btn text-white mb-1 ml-auto flex items-center justify-center mr-4 bg-main" onClick={handleAddRow}>
                Add <PlusCircleFilled size={20} />
            </Button>
        </div>
    <div>
    <Common.Tables spinning={false} columns={columns} data={data} bordered pagination={false} size='small' X='calc(500px + 50%)' className="  cursor-pointer rounded-none pb-5 pt-2"/>
        
    </div>
    </div>
  )
}

export default Index 
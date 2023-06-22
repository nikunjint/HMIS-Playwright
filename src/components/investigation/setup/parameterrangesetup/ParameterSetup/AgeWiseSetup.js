import React from 'react'
import { Button, Input, Select } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'
import Common from '../../../../common';


const AgeWiseSetup=()=>{

    const inputRefs = React.useRef([]);
    const [data, setData] = React.useState([
        {
          id:1,
          gender: 'Male',
          CH: 'CH',
          cl: 'cl',
          hl: 'hl',
          nl: 'nl',
          rangeselector: 'BETWEEN',
          ageto: '30',
          agefrom: '20',
          agetype: 'young',
        },
        {
            id:2,
          gender: 'Female',
          CH: 'CH',
          cl: 'cl',
          hl: 'hl',
          nl: 'nl',
          rangeselector: '10 to 20',
          ageto: '30',
          agefrom: '20',
          agetype: 'young',
        },
      ]);
 
    const columns=[
        {
            title:"Gender",
            data:'gender',
            key:'gender',
            editable: true,
            render: (text, record, index) => (
                <Select
                ref={(el) => (inputRefs.current[index] = el)} 

                defaultValue={text.gender}
                style={{ width: 120 }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled', disabled: true },
                ]}
              />
              
              ),
        },
        {
            title:"Age Type",
            data:'agetype',
            key:'agetype',
            editable: true,
            render: (text, record, index) => (
                <div>
                    <Input 
                    value="MONTH"
                    placeholder="Select Age Type" 
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'ageto')}/>

                </div>
            )
        },
        {
            title:"Age Form",
            data:'agefrom',
            key:'ageform',
            render: (text, record, index) => (
                <div>
                    <Input 
                    value={0}
                    placeholder="Select Age Form"
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'ageto')}/>

                </div>
            )
        },
        {
            title:"Age To",
            data:'ageto',
            key:'ageto',
            render: (text, record, index) => (
                <div>
                        
                    <Input  placeholder="Select Age To"
                    value={110} 
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'ageto')}/>

                </div>
            )
        },
        {
            title:"Range Selector",
            data:'rangeselector',
            key:'rangeselector',
            render:(text,record)=>(
                <div>
                      <Select
                    defaultValue={text.rangeselector}
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'gender')}
                    options={[
                        {
                        value: 'Male',
                        label: 'Male',
                        },
                        {
                        value: 'Femal',
                        label: 'femal',
                        },
                        {
                        value: 'Other',
                        label: 'Other',
                        },
                        
                    ]}
                    />
                </div>
            )
        },
        {
            title:"NL",
            data:'nl',
            key:'nl',
            render: (text, record, index) => (
                <div>
                  
                    <Input  placeholder="Select NL" 
                    value={4000}
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'nl')}/>

                    
                </div>
            )
        },
        {
            title:"NH",
            data:'hl',
            key:'hl',
            render: (text, record, index) => (
                <div>
                        
                    <Input 
                    value={11000}
                     placeholder="Select HL" 
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'hl')}/>

                    
                </div>
            )
        },
        {
            title:"Cl",
            data:'cl',
            key:'cl',
            render: (text, record, index) => (
                <div>
                        
                    <Input
                    name="Cl" 
                    placeholder="Select CL" 
                    hidelabel 
                    value={1500}
                    initialValue={text.cl} 
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'cl')}/>

                </div>
            )
        },
        {
            title:"CH",
            data:'CH',
            key:'CH',
            render: (text, record, index) => (
                <div>
                    <Input
                     placeholder="Select CH" 
                     value={3000}
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'CH')}/>
                  
                </div>
            )
        },
        {
            title:"AL",
            data:'ab',
            key:'cl',
            render: (text, record, index) => (
                <div>
                        
                    <Input
                    name="Cl" 
                    placeholder="Select AL" 
                    hidelabel 
                    value={500}
                    initialValue={text.cl} 
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'cl')}/>

                </div>
            )
        },
        {
            title:"AH",
            data:'al',
            key:'cl',
            render: (text, record, index) => (
                <div>
                        
                    <Input
                    name="Cl" 
                    placeholder="Select AH" 
                    hidelabel 
                    value={1000}
                    initialValue={text.cl} 
                    onChange={(e) => handleFieldChange(e.target.value, record.id, 'cl')}/>

                </div>
            )
        },
      
    ]
    

    const handleAddRow = () => {
        const newRow = {
            id: data.length + 1,
            gender: '',
            CH: '',
            cl: '',
            hl: '',
            nl: '',
            rangeselector: '',
            ageto: '',
            agefrom: '',
            agetype: '',
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
  
    return(
        <div className='rounded-[10px] bg-white  pb-2'>
        <div>
            <Button className="btn text-white mb-1 ml-auto flex items-center justify-center bg-main mr-4" onClick={handleAddRow}>
                Add <PlusCircleFilled size={20} />
            </Button>
        </div>
    <div>
    <Common.Tables spinning={false} columns={columns} data={data} bordered pagination={false} size='small' X='calc(500px + 50%)'/>
        
    </div>
    </div>
     
       
    )
}
export default AgeWiseSetup

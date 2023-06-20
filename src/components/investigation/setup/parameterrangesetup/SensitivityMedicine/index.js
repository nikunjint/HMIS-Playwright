import React, { useState } from 'react';
import { Checkbox } from 'antd';
import Common from '../../../../common';
import setting from "../../../../../assets/setting.png";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Erythromycin', 'Ciprofloxacin', 'Ibuprofen', 'Lisinopril', 'Omeprazole', 'Atorvastatin', 'Metformin', 'Azithromycin', 'Losartan', 'Tramadol', 'Pantoprazole', 'Simvastatin', 'Amiodarone', 'Venlafaxine', 'Duloxetine', 'Escitalopram', 'Warfarin', 'Methotrexate', 'Lorazepam', 'Levothyroxine', 'Hydrochlorothiazide', 'Amlodipine', 'Cephalexin', 'Gabapentin', 'Prednisone'];
const defaultCheckedList = [''];

function Index() {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  }; 

  return ( 
<div>
    <Common.Cards customclass='grid-initial justify-initial'> 
    <div className='flex'>
    <div className='w-1/4'>
             <Common.Selects 
                array={[
                { id: 1,name:'Bacteria' },
        
                ]}
                label="Bacteria"
                hidelabel
                value={"id"}
                description="name"
                isfield="true"
                name="employee_id"
                className="mb-0"
            />
            </div>
            <div className='w-1/4 ml-5'>
             
               <Common.Selects
                array={[
                { id: 1,name:'Nikesh' },
                { id: 2 ,name:'Bhandari'},
                { id: 3 ,name:'Sangoj'},
                { id: 4 ,name:'Kaji'},
                { id: 5 ,name:'Piya'},
                { id: 6 ,name:'Hello'},
                ]}
                label="Medicine Type"
                hidelabel
                value={"id"}
                description="name"
                isfield="true"
                name="testnameid"
            />
            </div>

            <div className='w-full flex items-end justify-end'>
            <img
              src={setting} className="absolute right-5 top-5"
        
              alt="Setting"
              
            />
            </div>


    </div>
 


      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} className="justify-start w-full mx-auto mt-5">
        Select all
      </Checkbox>
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} className="grid grid-cols-5 gap-8 mt-8"/>
      </Common.Cards>
      </div>
  );
}



export default Index;

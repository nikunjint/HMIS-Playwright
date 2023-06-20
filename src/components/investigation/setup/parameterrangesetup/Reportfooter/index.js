import React from 'react'
import Common from '../../../../common'
import { Button, Form, Switch } from 'antd'
import ReportFooter from './ReportFooter'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { HiDocumentRemove } from 'react-icons/hi'
import { useForm } from 'antd/es/form/Form'

const Index = () => {
  const [form]=useForm()
  const [data,setData]=React.useState([])
  const reportFooter=[
    {
      title:[
        {
          name:'ALIGNMENT',
          key:1
        },
        {
          name:'LEFT',
          key:'left'
        },
        {
          name:'CENTER LEFT',
          key:'leftcenter'
        },
        {
          name:'CENTER',
          key:'center'
        },
        {
          name:'CENTER RIGHT ',
          key:'rightcenter'
        },
        {
          name:'RIGHT',
          key:'right'
        }
      ],
      footertype:[
        {
          key:'footertype',
          name:'Footer Type',
          select:[
            {
              selector:<Common.Selects width={200}
              array={[
                { id: 1, name: "USER WISE" },
                { id: 6, name: "SETUPWISE" },
              ]}
              label="Select"
              initialValue="USER WISE"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="footerleft"
            />,
            key:'leftfooter'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "USER WISE" },
                { id: 6, name: "SETUPWISE" },
              ]}
              label="Select"
              value={"name"}
              initialValue="USER WISE"
              
              description="name"
              isfield="true"
              hidelabel
              name="leftcenterfooter"
            />,
            key:'leftcenterfooter'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "USER WISE" },
                { id: 6, name: "SETUPWISE" },
              ]}
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="centerfooter"
              initialValue="USER WISE"
  
            />,
            key:'centerfooter'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "USER WISE" },
                { id: 6, name: "SETUPWISE" },
              ]}
              initialValue="SETUPWISE"
  
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="rightcenterfooter"
            />,
            key:'rightcenterfooter'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "USER WISE" },
                { id: 6, name: "SETUPWISE" },
              ]}
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="rightfooter"
              initialValue="SETUPWISE"
            />,
            key:'rightfooter'
            }
           
          ]
        }
      ],
      username:[
        {
          name:'User Name',
          select:[
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "Nikesh" },
                { id: 6, name: "Sanjog" },
              ]}
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="leftname"
            />,
            key:'leftname'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "Nikesh" },
                { id: 6, name: "Sanjog" },
              ]}
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="leftcentername"
            />,
            key:'leftcentername'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "Nikesh" },
                { id: 6, name: "Sanjog" },
              ]}
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="centername"
            />,
            key:'centername'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "Nikesh" },
                { id: 6, name: "Sanjog" },
              ]}
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="rightcentername"
            />,
            key:'rightcentername'
            },
            {
              selector:<Common.Selects width={200}
                array={[
                { id: 1, name: "Nikesh" },
                { id: 6, name: "Sanjog" },
              ]}
              label="Select"
              value={"name"}
              description="name"
              isfield="true"
              hidelabel
              name="rightname"
            />,
            key:'rightname'
            }
           
          ]
        }
      ]
    }
   
  ]

const handelFinish=(value)=>{
   value.key=1
  console.log('values',value)
  setData([value])
}
 return(
  <div className=' m-auto  w-full grid gap-y-4'>
    <div>
    <Form onFinish={handelFinish} form={form}>
      <div className='justify-end flex'>
        <Button htmlType='submit' className='bg-[#292561] text-[#FFFFFF] font-Poppins font-normal text-sm flex items-center gap-1'>
          Save <HiDocumentRemove/>
        </Button>
      </div>
      <div className="grid gap-y-4 mx-auto mt-3   shadow-sm bg-[#fff] rounded-[20px] ">
      <div>
        <div >
          {
            reportFooter.map((item)=>(
              <div className='grid gap-y-4'>
                <div  className='flex justify-between w-full text-left bg-[#fff] p-2 rounded-tl-[10px] rounded-tr-[10px]'>
                  {item.title.map((item)=>(
                    <div key={item.key} className='font-Poppins font-medium p-1 text-[#292561]'>
                      {item.name}
                    </div>
                  ))}
                </div>
                <div className='flex items-center justify-between'>
                  {
                    item.footertype.map((item)=>(
                      <div key={item.key} className='flex items-center justify-between w-full px-4'>
                        <div className='w-1/6 text-left'>
                          {item.name}
                        </div>
                        <div className='flex items-center justify-between w-full'>
                          {
                            item.select.map((item)=>(
                              <div key={item.key}>
                                {item.selector}
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div className='flex items-center justify-between'>
                  {
                    item.username.map((item)=>(
                      <div key={item.key} className='flex items-center justify-between w-full px-4'>
                        <div className='w-1/6 text-left'>
                          {item.name}
                        </div>
                        <div className='flex items-center justify-between w-full'>
                          {
                            item.select.map((item)=>(
                              <div key={item.key}>
                                {item.selector}
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    ))
                  }
                </div>
                </div>
            ))
          }
        </div>
      </div>
      <div className='w-[50%] m-auto flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='mb-2'>
            Row Tier
          </div>
          <div>
          <Common.Selects
              array={[
                { id: 1, name: "1" },
                { id: 2, name: "2" },
               
              ]}
              label="Select"
              value={"name"}
              description={"id"}
              isfield="true"
              hidelabel
              name="row"
              initialValue={'1'}
              className="mt-1 w-[100%]"
            />
          </div>
        </div>
        <div className='flex items-center'>
        <Switch 
          style={{ backgroundColor: "#f0f0f0" }}
          defaultChecked
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          />
          <span className="ml-2">Active</span>
        </div>
        <div>
          <div className='flex items-center'>
          <Switch 
          style={{ backgroundColor: "#f0f0f0",display:'flex',alignItems:'center' }}
          
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          />
          <span className="ml-2">Default</span>
          </div>
      

        </div>
      </div>
      </div>
    </Form>
    </div>
    <div>
     <ReportFooter data={data}/>
    </div>
  </div>
  
 )
}

export default Index


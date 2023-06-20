import React from 'react'
import Common from '../../../common'
import Vitals from './Vitals'
import SocialHistory from './SocialHistory'
import PostCovit from './PostCovit'
import { Form } from 'antd'

const Index=()=>{

    const onFinish = (values) =>{
        console.log('values',values);
    }


    return(
        <Form onFinish={onFinish}>
            <div className='grid gap-2'>
                <div>
                    <Common.Cards>
                        <div className='lg:grid lg:grid-cols-6 gap-2 p-2'>
                        <div className=' font-Poppins font-semibold'> 
                        Patient ID: <span class="font-normal">78001638</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Patient Name: <span class="font-normal">Sanjog Piya</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Age/Gender: <span class="font-normal">25 yr/ Male</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Blood Group: <span class="font-normal">A+</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Date: <span class="font-normal">2079/02/30
                        </span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Time: <span class="font-normal">13:41:25</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Department: <span class="font-normal">ACUPUNCTURE</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Unit: <span class="font-normal">ICU</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Doctor: <span class="font-normal">Sudarshan Pandeb</span>
                        </div>
                        <div className=' font-Poppins font-semibold'> 
                        Entered By: <span class="font-normal">Rajesh Khatri</span>
                        </div>
                          
                        </div>
                    </Common.Cards>
                    </div>
                    <div>
                        <Vitals/>
                    </div>
                    <div>
                        <SocialHistory/>
                    </div>
                    <div>
                    <PostCovit/>
                     </div>
            </div>
            <Common.Buttons size={"tiny"}
            name="Submit"
            htmlType="submit"
            className="my-button btn-primary ml-auto text-uppercase flex bg-[#0d2f66] flex items-center justify-center"
          />
        </Form>
    )
}
export default Index
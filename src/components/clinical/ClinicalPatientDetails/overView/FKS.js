import React from 'react'
import Common from '../../../common'

const FKS=()=>{
    const [id,setId]=React.useState(1)
    return(
       <Common.Cards>
        <div className='px-4'>
        <div className='flex items-center gap-6 py-4'>
            {
                item.map((item)=>(
                    <div key={item.id} onClick={()=>setId(item.id)}>
                        <div className={item.id ===id ?'p-3 bg-primary text-sm text-[white] cursor-pointer rounded-lg font-Poppins font-light':'text-primary font-Poppins font-medium cursor-pointer'}>
                            {item.name}
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='m-4'>
        <ul>
            <li className='text-left font-Poppins font-normal mb-2 list-disc'>
            Elevated temperature (above 100.4°) The medical community generally defines a fever as a body temperature above 100.4 degrees Fahrenheit. A body temp between 100.4 and 102.2 degree is usually
            </li>
            <li className='text-left font-Poppins font-normal mb-2 list-disc'>
            considered a low-grade fever. Hyperhidrosis disorder Hyperhidrosis disorder is a condition that results in excessive sweating. This sweating can occur in unusual situations, such as in cooler weather, or without any trigger at all. It can also be caused by other medical conditions, such as menopause or hyperthyroidism. Hyperhidrosis can be uncomfortable.            </li>
            <li className='text-left font-Poppins font-normal list-disc'>
            Elevated temperature (above 100.4°) The medical community generally defines a fever as a body temperature above 100.4 degrees Fahrenheit. A body temp between 100.4 and 102.2 degree is usually considered a low-grade fever. Flushed complexion or hot skin. Flushed skin is often a visual sign of embarrassment, anxiety, or being too hot. However, frequent flushing can sometimes indicate an underlying medical condition. Flushed skin occurs when the hundreds of tiny blood vessels just beneath the skin dilate, or widen. Hyperhidrosis disorder Hyperhidrosis disorder is a condition that results in excessive sweating. This sweating can occur in unusual situations, such as in cooler weather, or without any trigger at all.
            </li>
        </ul>
        </div>
        </div>
       
       </Common.Cards>
    )
}
export default FKS
const item=[
    {
        name:'Findings',
        id:1
    },
    {
        name:'Known Allergies',
        id:2
    },
    {
        name:'Symptoms',
        id:3
    },
]
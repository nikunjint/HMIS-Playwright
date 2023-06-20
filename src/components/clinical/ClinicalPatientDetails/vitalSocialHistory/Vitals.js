import React from 'react'
import Common from '../../../common'
import { HiUser } from 'react-icons/hi'

const Vitals=()=>{
    return(
        <div>
            <Common.AntdCard title="VITALS" icon={<HiUser/>} bg="#0d2f66" tc='white'>
                <div className="flex items-center justify-content-center">
                    <div className="w-full grid-flow-row  gap-x-4 gap-y-1 lg:grid lg:grid-cols-5">
                        <Common.Inputs
                            name="temperature"
                            hidelabel
                            initialValue="55555566"
                            type='number'
                        />
                        <Common.Inputs
                            name="height"
                            placeholder="Height in CM :(60-200)"
                            hidelabel
                        
                        />
                        <Common.Inputs
                            name="weight"
                            hidelabel
                            placeholder="Weight in (KG)"

                            
                        />
                        <Common.Inputs
                            name="bmi"
                            hidelabel
                            initialValue=""
                            prefix="BMI"
                            
                        />
                        <Common.Inputs
                            name="bsa"
                            hidelabel 
                            className="mb-0"
                            prefix="BSA"
                            
                        />

                        <Common.Selects
                            array={[
                            { id: 1 },
                            { id: 2 },
                            { id: 3 },
                            { id: 4 },
                            { id: 5 },
                            { id: 6 },
                            ]}
                            label="Blood Group:"
                            value={"id"}
                            isfield="true"
                            hidelabel
                            name="bloodgroup"
                        />
                        <Common.Inputs
                            name="bp"
                            hidelabel 
                            className="mb-0"
                            placeholder="Systolic BP (mm of Hg)(90-120)"
                            
                        />
                         <Common.Inputs
                            name="diastolic"
                            hidelabel 
                            className="mb-0"
                            placeholder="Diastolic (mm of Hg)(60-80)"
                            
                        />
                          <Common.Inputs
                            name="pulse"
                            hidelabel 
                            className="mb-0"
                            placeholder="Pulse (bpm)(60-90)"
                            
                        />
                          <Common.Inputs
                            name="respiration"
                            hidelabel 
                            className="mb-0"
                            placeholder="Respiration (/m) (12-18)"
                            
                        />
                          <Common.Inputs
                            name="spo"
                            hidelabel 
                            className="mb-0"
                            placeholder="Spo2 (95-100)"
                            
                        /> 
                        <Common.Inputs
                            name="headcric"
                            hidelabel 
                            className="mb-0"
                            placeholder="Head Cric (CM) (30-70)"
                            
                        /> 
                         <Common.Inputs
                            name="waist"
                            hidelabel 
                            className="mb-0"
                            placeholder="Waist (CM) (30-125)"
                            
                        /> 
                           <Common.Inputs
                            name="hip"
                            hidelabel 
                            className="mb-0"
                            placeholder="Hip (CM) (30-100)"
                            
                        /> 
                            <Common.Inputs
                            name="avg"
                            hidelabel 
                            className="mb-0"
                            placeholder="Avg.Nor Genitical Height (CRR)"
                            
                        /> 
                    </div>
                </div>
            </Common.AntdCard>
        </div>
    )
}
export default Vitals
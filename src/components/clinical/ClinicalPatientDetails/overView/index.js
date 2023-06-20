import React from 'react'
import Profile from './Profile'
import MedicalHistory from './MedicalHistory'
import FKS from './FKS'
import VisitDetails from './VisitDetails'
import Labinvestigation from './LabInvestigation'
import TreatmentHistory from './TretmentHistory'

const Index=()=>{
    return(
        <div className='grid gap-5'>
            <div className='lg:grid lg:grid-cols-2 gap-4'>
                <div className='grid gap-0'>
                  <div>
                    <Profile/>
                  </div>
                  <div>
                    <FKS/>
                  </div>
                </div>
                <div>
                  <MedicalHistory/>
                </div>
            </div>
            <div className='lg:grid lg:grid-cols-2 gap-4'>
              <div>
                <VisitDetails/>
              </div>
              <div>
                <Labinvestigation/>
              </div>
              <div>
               <TreatmentHistory/>
              </div>
            </div>
        </div>
    )
}
export default Index
import analyticsIcon from '../assets/analytics.png';
import { FaBriefcaseMedical, FaCalendarDay, FaUserCog, FaHospitalUser} from "react-icons/fa";
import { ImCalculator, ImLab } from "react-icons/im";
import { MdLocalPharmacy, MdMiscellaneousServices, MdOutlineNewLabel, MdQueue } from "react-icons/md";
import { GiCheckboxTree } from "react-icons/gi";
import { CiMedicalCross } from "react-icons/ci";
import { AiFillFilePdf, AiFillPropertySafety, AiOutlineDeploymentUnit, AiOutlineFileProtect, AiOutlineFileSync } from 'react-icons/ai';
import { TbChartInfographic, TbDisabled, TbEmergencyBed } from 'react-icons/tb';
import { BsFolderCheck } from 'react-icons/bs';
import { HiUserAdd } from 'react-icons/hi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { FiPrinter } from 'react-icons/fi';
import { BiBowlHot } from 'react-icons/bi';



export const rightsiderData = [
    {
      to: '/account',
      name: 'Account',
      icon:<ImCalculator size={25} color="#00BD9C"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },
        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Account heads'
        },

        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Voucher Entry'
        },

        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Voucher Book'
        },

        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Ledger Analysis'
        },

        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Account Analysis'
        },


        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Managerical Analysis'
        },

        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Reconcilation'
        },

        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Account Setup'
        },

        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Account Logs'
        },

        
        

   

      ]
    },
    {
      to: '/analytics',
      name: 'Analytics',
      icon:<FaUserCog size={25} color="#60D8F4"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },
        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Analytics'
        },
        


      ]

    },
    {
      to: '/appointment',
      name: 'Appointment',
      icon:<FaCalendarDay size={25} color="#FFB600"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },

        {
          to:'/',
          childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
          name:'Doctor Appointment'
        },
        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Report'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Call Appointment'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Setup '
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Complain'
        },




      ]

    },
    {
      to: '/assets',
      name: 'Assets',
      icon:<FaBriefcaseMedical size={25} color="#ae7cfb"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },
        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Assets'
        },
        {
          to:'/',
          childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
          name:'Maintenance'
        },
        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Insurance Information'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Depreciation'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Reports'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Setup'
        },




      ]

    },
  
    {
      to: '/cath',
      name: 'Cath lab',
      icon:<MdOutlineNewLabel size={25} color="#60D8F4"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },
        
      ]

    },
    {
      to: '/claim',
      name: 'Claim Management',
      icon:<GiCheckboxTree size={25} color="#ae7cfb"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'3Dashboard'
        },
       

      ]

    },
    {
      to: '/clinical',
      name: 'Clinical',
      icon:<CiMedicalCross size={25} color="#00BD9C"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },
        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Clinic'
        },
       
        

      ]

    },
    {
      to: '/covid',
      name: 'Covid Sync',
      icon:<AiOutlineFileSync size={25} color="#60D8F4"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },
        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Data Capture'
        },
       
      ]

    },
    {
      to: '/daily',
      name: 'Daily Report',
      icon:<FaBriefcaseMedical size={25} color="#FFB600"/>,
      children:[
        {
          to:'/',
          childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
          name:'Dashboard'
        },
        {
          to:'/pathology',
          childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
          name:'Hospital Collection'
        },
        {
          to:'/',
          childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
          name:'Revenue Report'
        },
        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Patient Statstics'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Hospital Revenue'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Fraction Report'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Inventory'
        },

        {
          to:'/',
          childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
          name:'Log'
        },


      ]

    },
    {
        to: '/diet',
        name: 'Diet Plan',
        icon:<BiBowlHot size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'Patient List'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'Setup'
          },
         
        ]

      },
      {
        to: '/Emergency',
        name: 'Emergency',
        icon:<TbEmergencyBed size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'Emergency'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'Emergency'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'Complains'
          },

          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'Neuo Hospital'
          },
  
  
        ]

      },
      {
        to: '/File',
        name: 'File Management',
        icon:<BsFolderCheck size={25} color="#FFB600"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'Dashboard'
          },
          
  
        ]

      },
      {
        to: '/ICU',
        name: 'ICU',
        icon:<AiOutlineDeploymentUnit size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'10Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'10Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'10Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'10Radiology'
          },
  
        ]

      },
      {
        to: '/Insurance',
        name: 'Insurance',
        icon:<AiFillPropertySafety size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'11Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'11Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'11Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'11Radiology'
          },
  
        ]

      },
      {
        to: '/Inventory',
        name: 'Inventory',
        icon:<FaBriefcaseMedical size={25} color="#FFB600"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'12Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'12Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'12Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'12Radiology'
          },
  
        ]

      },
      {
        to: '/Investigation',
        name: 'Investigation',
        icon:<ImLab size={25} color="#60D8F4"/>,
        childicon:<FaBriefcaseMedical size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'Radiology'
          },
  
        ]

      },
      {
        to: '/Kitchen',
        name: 'Kitchen',
        icon:<FaBriefcaseMedical size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'13Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'13Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'13Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'13Radiology'
          },
  
        ]

      },
      {
        to: '/Master',
        name: 'Master Setup',
        icon:<MdMiscellaneousServices size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'14Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'14Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'14Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'14Radiology'
          },
  
        ]

      },
      {
        to: '/Medical',
        name: 'Medical Record',
        icon:<AiOutlineFileProtect size={25} color="#FFB600"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'15Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'15Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'15Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'15Radiology'
          },
  
        ]

      },
      {
        to: '/Membership',
        name: 'Membership',
        icon:<HiUserAdd size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'16Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'16Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'16Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'16Radiology'
          },
  
        ]

      },
      {
        to: '/MIS',
        name: 'MIS Report',
        icon:<TbChartInfographic size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'17Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'17Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'17Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'17Radiology'
          },
  
        ]

      },
      {
        to: '/New',
        name: 'New Report',
        icon:<FaUserCog size={25} color="#FFB600"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'18Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'18Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'18Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'18Radiology'
          },
  
        ]
      
      },
      {
        to: '/Online',
        name: 'Online Transaction Report',
        icon:<FaUserCog size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'19Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'19Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'19Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'19Radiology'
          },
  
        ]

      },
      {
        to: '/OPD',
        name: 'OPD',
        icon:<FaBriefcaseMedical size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'20Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'20Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'20Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'20Radiology'
          },
  
        ]

      },
      {
        to: '/OT',
        name: 'OT',
        icon:<FaBriefcaseMedical size={25} color="#FFB600"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'21Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'21Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'21Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'21Radiology'
          },
  
        ]

      },
      {
        to: '/Patient',
        name: 'Patient Administration',
        icon:<FaHospitalUser size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'22Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'22Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'22Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'22Radiology'
          },
  
        ]

      },
      {
        to: '/Pharmacy',
        name: 'Pharmacy',
        icon:<MdLocalPharmacy size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'23Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'23Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'23Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'23Radiology'
          },
  
        ]

      },
      {
        to: '/Physiotherapy',
        name: 'Physiotherapy',
        icon:<TbDisabled size={25} color="#FFB600"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'24Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'24Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'24Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'24Radiology'
          },
  
        ]

      },
      {
        to: '/Pis',
        name: 'Pis',
        icon:<FaBriefcaseMedical size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'25Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'25Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'25Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'25Radiology'
          },
  
        ]

      },
      {
        to: '/Print',
        name: 'Print Setup',
        icon:<FiPrinter size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'26Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'26Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'26Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'26Radiology'
          },
  
        ]

      },
      {
        to: '/Queue',
        name: 'Queue Management',
        icon:<MdQueue size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'27Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'27Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'27Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'27Radiology'
          },
  
        ]

      },
      {
        to: '/Reception',
        name: 'Reception',
        icon:<RiCustomerService2Fill size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'28Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'28Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'28Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'28Radiology'
          },
  
        ]
      
      },
      {
        to: '/Scan',
        name: 'Scan Document',
        icon:<AiFillFilePdf size={25} color="#60D8F4"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'29Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'29Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'29Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'29Radiology'
          },
  
        ]

      },
      {
        to: '/TV',
        name: 'TV Display',
        icon:<FaBriefcaseMedical size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'30Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'30Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'30Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'30Radiology'
          },
  
        ]

      },
      {
        to: '/Utilities',
        name: 'Utilities & Setup',
        icon:<FaUserCog size={25} color="#00BD9C"/>,
        children:[
          {
            to:'/',
            childrenicon:<FaBriefcaseMedical size={12} color="#00BD9C"/>,
            name:'31Dashboard'
          },
          {
            to:'/pathology',
            childrenicon:<AiOutlineDeploymentUnit size={12} color="#60D8F4"/>,
            name:'31Pathology'
          },
          {
            to:'/',
            childrenicon:<AiFillPropertySafety size={12} color="#FFB600"/>,
            name:'31Histology'
          },
          {
            to:'/',
            childrenicon:<HiUserAdd size={12} color="#00BD9C"/>,
            name:'31Radiology'
          },
  
        ]

      },
      {
        to: '/user',
        name: 'User Managment',
        icon:<FaUserCog size={25} color="#60D8F4"/>,
        childicon:<FaUserCog size={25}/>,
        children:[
          {
            to:'/user/setup',
            childrenicon:<img className="w-[25px] mr-3" src={analyticsIcon} alt="Account Icon" />,
            name:'Set Up'
          },
          {
            to:'/user',
            childrenicon:<img className="w-[25px] mr-3" src={analyticsIcon} alt="Account Icon" />,
            name:'User'
          },
          {
            to:'/user/menu',
            childrenicon:<img className="w-[25px] mr-3" src={analyticsIcon} alt="Account Icon" />,
            name:'Menue'
          }
        ]

      },
  ]
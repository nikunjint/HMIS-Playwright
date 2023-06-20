import { HiChartSquareBar, HiOutlineDocumentDuplicate, HiPaperClip, HiPlus, HiUser } from "react-icons/hi";
import PatientList from "../components/investigation/pathology/PatientList";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const  rootSubmenuKeys = ['/user', '/pathology', "/organization","/feature","/ward","/clinical","/operation-theatre"];
export const determineDefaultOpenKeys = (location) => {
  if (
    ["/users", "/feature", "/manage/permissions", "/organizations"].includes(
      location?.pathname
    )
  ) { 
    return ["/user"];
  }
  if (["/pathology", "/pathology/patientlist"].includes(location?.pathname)) {
    return ["/pathology"];
  }
  if (["/suborganizations", "organizations"].includes(location?.pathname)) {
    return ["/user", "/organization"];
  }
  if (["/menus", "/submenus"].includes(location?.pathname)) {
    return ["/user", "/menu"];
  }
  if (["/features", "/subfeatures"].includes(location?.pathname)) {
    return ["/user", "/feature"];
  }
  if (["/ward", ].includes(location?.pathname)) {
    return ["/ward",];
  }
  if (["/clinical", "/clinical/details"].includes(location?.pathname)) {
    return ["/clinical",];
  }
  if (["/operation-theatre", ].includes(location?.pathname)) {
    return ["/operation-theatre",];
  }
  return [];
};
export const items = [

  getItem("Dashboard", "/", <HiChartSquareBar/>),

  getItem("User Management", "/user", <HiUser />, [
    getItem("Users", "/users"),
    getItem("Organizations", "/organizations", null, [
      getItem("Organizations", "/organizations"),
      getItem("Sub Organizations", "/suborganizations"),
    ]),
    getItem("Menus", "/menu", null, [
      getItem("Menus", "/menus"),
      getItem("Sub Menus", "/submenus"),
    ]),
    getItem("Features", "/features", null, [
      getItem("Features", "/features"),
      getItem("Sub Features", "/subfeatures"),
    ]),
    getItem("Manage Permission", "/manage/permissions"),
  ]),

  getItem("Pathology", "/pathology", <HiOutlineDocumentDuplicate/>, [
    getItem("Patient List", "/patto/patientlist"),
  ]),
  getItem("Clinical", "/clinical", <HiOutlineDocumentDuplicate/>, [
    getItem("Clinical", "/clinical"),
  ]),

  getItem("Ward", "/ward", <HiPaperClip/>, [
    getItem("Ward", "/ward"),
  ]), 

  getItem("Operation Theatre", "/operation-theatre", <HiPlus/>, [
    getItem("Operation Theatre", "/operation-theatre"),
  ]),

];


export const pathologyHdata = [
  {
    key: '/patientlist',
    label: 'Patient List',
    name: <PatientList />,
  },
  {
    key: '/samplecollection',
    label: 'Sample Collection',
    name: <PatientList />,
  },
  {
    key: '/collectsample',
    label: 'Collect Sample'
  },
  {
    key: '/labreceive',
    label: 'Lab Receive'
  },

  {
    key: '/departmentreceive',
    label: 'Department Receive'
  },
  {
    key: '/testresult',
    label: 'Test Result'
  },
  {
    key: '/verification',
    label: 'Verification'
  },
  {
    key: '/authorization',
    label: 'Authorization'
  },
  {
    key: '/dispatch',
    label: 'Dispatch'
  },
]
export const options=[
  {
      option:"Yes",
      value:'yes'
  },
  {
      option:"No",
      value:'no'
  }
]
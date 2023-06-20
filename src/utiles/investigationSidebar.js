import { HiArrowCircleRight, HiBookmark,  HiCog } from "react-icons/hi";
import { AiOutlineDashboard } from "react-icons/ai";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const investigationitems = [
  getItem("Dashboard", "/",  <AiOutlineDashboard  className='text-[white] text-base font-semibold'/>),

  getItem(
    "Pathology",
    "/investigation/pathology",
    <HiBookmark />,
  //   [getItem("Patient List", "/investigation/pathology"),
  //   getItem("Sample Collection", "/investigation/pathology/sample/collection")
  // ]
  ),

  getItem("Lab Setup", "/investigation/lab-setup", <HiCog />, [

    getItem("Lab Template", "/investigation/lab-setup/labtemplate",
    <HiArrowCircleRight />), 
  ]),
];

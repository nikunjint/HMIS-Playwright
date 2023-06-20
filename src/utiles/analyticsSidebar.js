import { HiArrowCircleRight, HiChartSquareBar, HiUser ,HiCog } from "react-icons/hi";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
export const analyticsitems = [

    getItem("Dashboard", "/", <HiChartSquareBar color="white"/>),
  
    getItem("Analytics", "/account", <HiUser color="white" />, [
      getItem("Statistics", "/account/tree"),
      getItem("Revenue", "/account/tree"),
      getItem("Lab Investigation", "/account/tree"),
      getItem("Lab Turn Around Time (TAT)", "/account/tree"),
      getItem("OPD Turn Around Time", "/account/tree"),
      getItem("Inventory", "/account/tree"),
      getItem("Pharmacy", "/account/tree"),
      getItem("Finance", "/account/tree"),
      getItem("HR", "/account/tree"),
      getItem("Dashboard Setup", "/account/tree"),
      getItem("Appointment", "/account/tree"),
    ]),
  

  
  
  ];
  export const userItem = [  
    getItem("Setup", "/user/setup", <HiCog />, [
      getItem("Organization", "/user/organizations",<HiArrowCircleRight />),
      getItem("Sub-Organization", "/user/suborganizations",<HiArrowCircleRight />),
      getItem("Department", "/user/setup/department",<HiArrowCircleRight />),
      getItem("Designation", "/user/setup/designation",<HiArrowCircleRight />),
      getItem("Position", "/user/setup/position",<HiArrowCircleRight />),
      getItem("Employee", "/user/setup/employee",<HiArrowCircleRight />),
    ]),
  
    getItem("Menu setup", "/user/menusetup", <HiCog />, [
      getItem("Menu", "/user/menus",<HiArrowCircleRight />),
      getItem("Submenu", "/user/submenus",<HiArrowCircleRight />),
      getItem("Features", "/user/features",<HiArrowCircleRight />),
      getItem("Sub Features", "/user/subfeatures",<HiArrowCircleRight />),
    ]),
  
    getItem("Users setup", "/user/usersetup", <HiCog />, [
      getItem("Users", "/user/setupuser",<HiArrowCircleRight />),
      getItem("Roll", "/user/roll",<HiArrowCircleRight />),
      getItem("Previlege", "/user/privilege",<HiArrowCircleRight />),
    ]),
  ];
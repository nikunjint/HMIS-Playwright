import { lazy } from "react";

export const LoginScreen = lazy(() => import("../components/auth/LoginScreen"));
export const HomeScreen = lazy(() => import("../components/home"));
export const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));




export const LoginLayout = lazy(() => import("../layouts/LoginLayout"));

export const PageNotFound = lazy(() =>
  import("../components/pageNotFound/PageNotFound")

);


//Clinical
export const Clinical = lazy(() =>
  import("../components/clinical")
);

export const ClinicalPatientDetails = lazy(() =>
  import("../components/clinical/ClinicalPatientDetails"));

//patientregistration
export const PatientRegistration = lazy(() =>import("../components/patientregistration"))
//Ward
export const Ward = lazy(() =>import("../components/ward"))

//operationtheatre
export const OperationTheatre = lazy(() =>import("../components/operationtheatre"))
//Account 

export const AccountLayout=lazy(()=>import('../layouts/AccountLayout'))
export const Account=lazy(()=>import('../components/account'))

//Analytics
export const AnalyticsLayout=lazy(()=>import('../layouts/AnalyticsLayout'))
export const Analytics=lazy(()=>import('../components/analytics'))

//Investigation
export const InvestigationLayout=lazy(()=>import('../layouts/InvestigationLayout'))
export const Investigation=lazy(()=>import('../components/investigation'))
export const Pathology = lazy(() =>
  import("../components/investigation/pathology")
);

export const ParameterRangeSetup=lazy(()=>import('../components/investigation/setup/parameterrangesetup'))
export const LabTemplate=lazy(()=>import('../components/investigation/setup/labTemplate'))


//users
export const User=lazy(()=>import('../layouts/UserManagement'))
export const Userdashboard=lazy(()=>import('../components/usermanagement/dashboard'))
export const DepartmentList=lazy(()=>import('../components/usermanagement/setup/department/DepartmentList'))
export const OrganizationList=lazy(()=>import('../components/usermanagement/setup/organizations/OrganizationList'))
export const SubOrganizationList=lazy(()=>import('../components/usermanagement/setup/subOrganization/SubOrganizationList'))
export const DeginationList=lazy(()=>import('../components/usermanagement/setup/degination/DeginationList'))
export const EmployeeList=lazy(()=>import('../components/usermanagement/setup/Employee/EmployeeList'))
export const PrevilegeList=lazy(()=>import('../components/usermanagement/userSetup/previlege/PrevilegeList'))
export const UserList=lazy(()=>import('../components/usermanagement/userSetup/users/UserList'))

export const Menu = lazy(() =>
  import("../components/usermanagement/menu/menu/MenuList")
);
export const SubMenu = lazy(() =>
  import("../components/usermanagement/menu/subMenu/SubMenuList")
);
export const Features = lazy(() =>
  import("../components/usermanagement/menu/features/Features")
);
export const SubFeatures = lazy(() =>
  import("../components/usermanagement/menu/subFeatures/SubFeatures")
);

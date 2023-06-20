import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  Features,
  HomeScreen,
  DashboardLayout,
  LoginLayout,
  LoginScreen,
  Menu,
  Pathology,
  SubFeatures,
  SubMenu,
  PageNotFound,
  Users,
  Clinical,
  ClinicalPatientDetails,
  PatientRegistration,
  Ward,
  OperationTheatre,
  AccountLayout,
  Account,
  AnalyticsLayout,
  Analytics,
  InvestigationLayout,
  Investigation,
  ParameterRangeSetup,
  LabTemplate,
  User,
  DepartmentList,
  OrganizationList,
  SubOrganizationList,
  DeginationList,
  EmployeeList,
  Usermanagement,
  PrevilegeList,
  UserList
} from "./Lazyroute";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<LoginLayout />}>
        <Route index element={<LoginScreen />} />
      </Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="clinical" element={<Clinical />} />
        <Route
          path="clinical/details/:id"
          element={<ClinicalPatientDetails />}
        />
        <Route path="patientregistration" element={<PatientRegistration />} />
        <Route path="ward" element={<Ward />} />

        <Route path="operation-theatre" element={<OperationTheatre />} />
      </Route>
      <Route path="/user" element={<User />}>
        <Route index element={<Usermanagement/>}/>
        <Route path="menus" element={<Menu />} />
        <Route path="submenus" element={<SubMenu />} />
        <Route path="features" element={<Features />} />
        <Route path="subfeatures" element={<SubFeatures />} />
        <Route path="users" element={<Users />} />
        <Route path='setup/department' element={<DepartmentList/>}/>
        <Route path="organizations" element={<OrganizationList/>}/>
        <Route path='suborganizations' element={<SubOrganizationList/>}/> 
        <Route path="setup/designation" element={<DeginationList/>}/>
        <Route path="setup/employee" element={<EmployeeList/>}/>
        <Route path="privilege" element={<PrevilegeList/>}/>
        <Route path="setupuser" element={<UserList/>}/>
        </Route>
      <Route path="/account" element={<AccountLayout />}>
        <Route index element={<Account />} />
      </Route>
      <Route path="/analytics" element={<AnalyticsLayout />}>
        <Route index element={<Analytics />} />
      </Route>
      <Route path="/investigation" element={<InvestigationLayout />}>
        <Route index element={<Investigation />} />
        <Route path="pathology" element={<Pathology />} />
        <Route
          path="/investigation/lab-setup/parameterrangesetup/:slug"
          element={<ParameterRangeSetup />}
        />
        <Route
          path="/investigation/lab-setup/labtemplate"
          element={<LabTemplate />}
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

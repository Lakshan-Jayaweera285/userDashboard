// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import RouterIcon from "@material-ui/icons/Router";
import StoreIcon from "@material-ui/icons/Store";
import SettingsIcon from '@material-ui/icons/Settings';
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Icons from "views/Icons/Icons.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Devices",
    rtlName: "قائمة الجدول",
    icon: RouterIcon,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Settings",
    rtlName: "إخطارات",
    icon: SettingsIcon,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Store",
    rtlName: "الرموز",
    icon: StoreIcon,
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/upgrade-to-pro",
    name: "Log Out",
    rtlName: "التطور للاحترافية",
    icon: PowerSettingsNewIcon,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;

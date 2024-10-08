
import Budget from "../screens/budget/Budget";
import Guest from "../screens/guest/Guest";
import MySupplier from "../screens/mySuppliers/MySuppliers";
import UserCheckList from "../screens/userCheckList/UserCheckList";
import UserSetting from "../screens/userSetting/UserSetting";

export const UserRoutes = [
  {
    path: "my-supplier/:id",
    route: <MySupplier/>,
    protectRoutes: true,
  },
  {
    path: "my-checkList/:id",
    route: <UserCheckList/>,
    protectRoutes: true,
  },
  {
    path: "my-budget/:id",
    route: <Budget/>,
    protectRoutes: true,
  },
  {
    path: "my-guest/:id",
    route: <Guest/>,
    protectRoutes: true,
  },
  {
    path: "user-setting/:id",
    route: <UserSetting/>,
    protectRoutes: true,
  }
];

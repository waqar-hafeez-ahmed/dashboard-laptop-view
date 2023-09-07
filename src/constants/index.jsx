import { CMS } from "../assets/sidebar";
import { ReactComponent as SBCreate } from "../assets/sidebar/SBCreate.svg";
import { ReactComponent as SBDashboard } from "../assets/sidebar/SBDashboard.svg";
import { ReactComponent as SBPayment } from "../assets/sidebar/SBPayment.svg";
import { ReactComponent as SBSetting } from "../assets/sidebar/SBSetting.svg";
import { ReactComponent as SBSubscription } from "../assets/sidebar/SBSubscription.svg";

import { ReactComponent as Profile } from "../assets/settings/Profile.svg";
import { ReactComponent as Password } from "../assets/settings/Password.svg";
import { ReactComponent as DeleteAccount } from "../assets/settings/DeleteAccount.svg";

export const admin = [
  {
    img: <Profile />,
    title: "Profile",
    to: "profile",
  },
  {
    img: <Password />,
    title: "Password",
    to: "password",
  },
  {
    img: <DeleteAccount />,
    title: "Delete Account",
    to: "delete-account",
  },
];

import {
  Customers,
  Merchants,
  pendingRequests,
  Refunds,
} from "../assets/dashboard";

export const sidebar = [
  {
    title: "Super Admin",
    link: [
      { name: "Dashboard", img: <SBDashboard />, to: "/" },
      { name: "Subscription", img: <SBSubscription />, to: "subscription" },
      { name: "Setting", img: <SBSetting />, to: "setting" },
    ],
  },
  {
    title: "Merchant",
    titleImg: CMS,
    link: [
      { name: "Dashboard", img: <SBSubscription />, to: "dashboard" },
      { name: "Payment", img: <SBPayment />, to: "pashboard" },
    ],
  },
  {
    title: "CMS",
    titleImg: CMS,
    link: [
      { name: "Create Blog", img: <SBCreate />, to: "create-blog" },
      { name: "Create Admin", img: <SBCreate />, to: "create-admin" },
    ],
  },
];

export const dashboardCard = [
  {
    title: "Total Merchants",
    img: Merchants,
    value: "41564",
    border: "border-[#008BD9]",
  },
  {
    title: "Total Customers",
    img: Customers,
    value: "153413",
    border: "border-[#008BD9]",
  },
  {
    title: "Pending Requests",
    img: pendingRequests,
    value: "4654",
    border: "border-[#FF7A00]",
  },
  {
    title: "Active Installments",
    img: Merchants,
    value: "1564",
    border: "border-[#008BD9]",
  },
  {
    title: "Refund",
    img: Refunds,
    value: "₦ 155461564",
    border: "border-[#FF9356]",
  },
];

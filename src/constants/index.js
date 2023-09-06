import {
  SBCreate,
  SBDashboard,
  SBPayment,
  SBSetting,
  SBSubscription,
  CMS,
} from "../assets/sidebar";

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
      { name: "Dashboard", img: SBDashboard },
      { name: "Subscription", img: SBSubscription },
      { name: "Setting", img: SBSetting },
    ],
  },
  {
    title: "Merchant",
    titleImg: CMS,
    link: [
      { name: "Dashboard", img: SBSubscription },
      { name: "Payment", img: SBPayment },
    ],
  },
  {
    title: "CMS",
    titleImg: CMS,
    link: [
      { name: "Create Blog", img: SBCreate },
      { name: "Create Admin", img: SBCreate },
    ],
  },
];

export const dashboardCard = [
  {
    title: "Total Merchants",
    img: Merchants,
    value: "41564",
    border: "#008BD9",
  },
  {
    title: "Total Customers",
    img: Customers,
    value: "153413",
    border: "#008BD9",
  },
  {
    title: "Pending Requests",
    img: pendingRequests,
    value: "4654",
    border: "#FF7A00",
  },
  {
    title: "Active Installments",
    img: Merchants,
    value: "1564",
    border: "#008BD9",
  },
  {
    title: "Refund",
    img: Refunds,
    value: "₦ 155461564",
    border: "#FF9356",
  },
];

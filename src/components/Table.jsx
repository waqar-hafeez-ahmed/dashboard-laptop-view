import { StatusOnlineIcon } from "@heroicons/react/outline";
import { StatusOfflineIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import DashboardCard from "../components/DashboardCard";
import { dashboardCard } from "../constants";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
  TextInput,
} from "@tremor/react";
import { NavLink } from "react-router-dom";

const data = [
  {
    name: "Naseem Muneer",
    email: "emial@email.com",
    country: "Pakistan",
    status: "Active",
    icon: StatusOnlineIcon,
    to: "merchant-profile",
  },
  {
    name: "Naseem Muneer",
    email: "emial@email.com",
    country: "Pakistan",
    status: "Inactive",
    icon: StatusOfflineIcon,
    to: "merchant-inactive",
  },
  {
    name: "Naseem Muneer",
    email: "emial@email.com",
    country: "Pakistan",
    status: "Active",
    icon: StatusOnlineIcon,
    to: "merchant-profile",
  },
  {
    name: "Naseem Muneer",
    email: "emial@email.com",
    country: "Pakistan",
    status: "Inactive",
    icon: StatusOfflineIcon,
    to: "merchant-inactive",
  },
  {
    name: "Naseem Muneer",
    email: "emial@email.com",
    country: "Pakistan",
    status: "Active",
    icon: StatusOnlineIcon,
    to: "merchant-profile",
  },
];
const TableComp = () => (
  <section className=" flex flex-col section">
    <div className="flex justify-between items-center w-full gap-14 mt-[20px]">
      {dashboardCard.map((card) => (
        <DashboardCard key={card.title} {...card} />
      ))}
    </div>
    {/* Table Section */}
    <div className="mt-10">
      <h4 className="text-[25px] font-Poppins font-semibold text-primary ml-4 ">
        All Merchants
      </h4>
      <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] mt-4 ">
        <div className="flex flex-1 flex-col w-full">
          <div className="flex w-full justify-end mb-4">
            <TextInput
              icon={SearchIcon}
              placeholder="Search by name, email"
              className="flex flex-1 flex-row-reverse items-center h-10 max-w-[500px]"
            />
          </div>
          <div className=" rounded-xl  ">
            <Table>
              <TableHead>
                <TableRow className="bg-[#E0E0E0] text-sm font-Poppins text-[#181818] ">
                  <TableHeaderCell>Merchant</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Country</TableHeaderCell>
                  <TableHeaderCell>STATUS</TableHeaderCell>
                  <TableHeaderCell>ACTION</TableHeaderCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((item) => (
                  <TableRow key={item.name} className="bg-[#EDEDED]">
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Text>{item.email}</Text>
                    </TableCell>
                    <TableCell>
                      <Text>{item.country}</Text>
                    </TableCell>
                    <TableCell>
                      {item.status === "Active" && (
                        <Badge color="emerald" icon={item.icon}>
                          {item.status}
                        </Badge>
                      )}
                      {item.status === "Inactive" && (
                        <Badge color="red" icon={item.icon}>
                          {item.status}
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="">
                      <NavLink to={item.to}>
                        <button className="bg-[#008BEF] text-white py-2 px-3 rounded-md  font-Poppins text-xs">
                          View
                        </button>
                      </NavLink>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex w-full justify-end gap-2 font-Poppins mt-4">
            <button className="py-1 px-3 text-gray-500 rounded-md border border-gray-400">
              1
            </button>
            <button className="py-1 px-3 text-gray-500 rounded-md border border-gray-400">
              2
            </button>
            <button className="py-1 px-3 text-gray-500 rounded-md border border-gray-400">
              3
            </button>
            <button className="py-1 px-3 text-gray-500 rounded-md border border-gray-400">
              4
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TableComp;

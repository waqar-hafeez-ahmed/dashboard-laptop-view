import Admin from "../assets/settings/Admin.png";
import subscribed from "../assets/merchant/subscribed.svg";
import active from "../assets/merchant/active.svg";
import payment from "../assets/merchant/paystack.svg";
import { merchantProfileCard } from "../constants";
import DashboardCard from "./DashboardCard";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

const userData = [
  { title: "Name", info: "Naseem Muneer" },
  { title: "Email Address", info: "naseembaloch7524@gmail.com" },
  { title: "Address", info: "Islamabad, Pakistan" },
  { title: "Phone Number", info: "+923160598938" },
  { title: "Country", info: "Pakistan" },
  { title: "Shop Address", info: "Islamabad, Pakistan" },
];

const Profile = () => {
  return (
    <section className=" flex flex-col section">
      {/* Back Button */}
      <NavLink to="/merchant-dashboard">
        <button className=" flex flex-row items-center  text-[17px] font-Poppins font-bold -mt-4">
          <ArrowLeftIcon className="w-[20px] mr-4" />
          Back
        </button>
      </NavLink>
      <h4 className="text-lg font-Poppins font-semibold mt-8 ">Merchant</h4>
      {/* Cards */}
      <div className="flex justify-between items-center w-full gap-20 mt-12">
        {merchantProfileCard.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>
      {/* Main Section */}
      <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] mt-14 ">
        <div className="flex flex-1 flex-col  pl-16 pr-8 h-[500px]">
          <div className=" flex justify-between items-center mt-10">
            <div className=" flex justify-between items-center gap-6">
              <img src={Admin} alt="" />
              <div className="flex flex-col gap-4 mt-9">
                <div className="flex flex-wrap gap-4">
                  <h3 className="text-[17px] font-Poppins font-bold text-primary">
                    Merchant Name
                  </h3>
                  {/* Subscriber Signal */}
                  <div className="flex flex-wrap gap-2 items-center">
                    <img src={subscribed} alt="" />
                    <h3 className="text-xs font-Poppins font-bold text-[#00D548] uppercase">
                      subscribed
                    </h3>
                  </div>
                </div>
                {/* Active signal */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center justify-center  bg-[#00C3CF] h-[16px] w-[16px] rounded-full">
                    <img src={active} alt="" />
                  </div>
                  <h3 className="text-[10px] font-Poppins font-semibold">
                    Active
                  </h3>
                </div>
              </div>
            </div>
            {/* Right Side Buttons */}
            <div className=" flex justify-between items-center gap-3">
              <button className="flex items-center rounded-md px-6 gap-2 py-2 font-Poppins font-medium text-white text-xs leading-[24px] bg-[#DF2E3A] ">
                Block Account
              </button>
              <NavLink to="/merchant-dashboard/sendemail">
                <button className="flex items-center rounded-md px-10 gap-2 py-2 font-Poppins font-medium text-white text-xs leading-[24px] bg-primary ">
                  Send Mail
                </button>
              </NavLink>
            </div>
          </div>
          <hr className=" mt-10 mb-8 border-primary " />
          <div className="flex justify-between items-start">
            {/* Table */}
            <div className="grid grid-cols-2 justify-between items-center  flex-1">
              {userData.map((data) => (
                <div key={data} className="text-sm font-Poppins">
                  <p className="text-[#5F5F5F] mb-1">{data.title}</p>
                  <p className="text-primary font-semibold mb-7">{data.info}</p>
                </div>
              ))}
            </div>
            {/* Payment */}
            <div className="flex flex-initial justify-center items-center rounded-md border-dashed border border-[#008BD9] px-20 py-10">
              <div className="flex flex-col gap-5  items-start">
                <h3 className="text-[#008BD9] font-Poppins font-semibold text-sm">
                  payment processors
                </h3>
                <img src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

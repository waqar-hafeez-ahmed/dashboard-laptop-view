import { ArrowLeftIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";
import Admin from "../assets/settings/Admin.png";
import inactive from "../assets/merchant/inactive.svg";

const userData = [
  { title: "Name", info: "Naseem Muneer" },
  { title: "Email Address", info: "naseembaloch7524@gmail.com" },
  { title: "Address", info: "Islamabad, Pakistan" },
  { title: "Phone Number", info: "+923160598938" },
  { title: "Country", info: "Pakistan" },
  { title: "Shop Address", info: "Islamabad, Pakistan" },
];

const MerchantInactive = () => {
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
      {/* Main Section */}
      <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] mt-14 ">
        <div className="flex flex-1 flex-col  pl-16 pr-8 h-[500px]">
          {/* HeaderSection */}
          <div className=" flex justify-between items-center mt-10">
            {/* Profile Section */}
            <div className=" flex justify-between items-center gap-6">
              <img src={Admin} alt="" />
              <div className="flex flex-col gap-4 mt-9">
                <h3 className="text-[17px] font-Poppins font-bold text-primary">
                  Merchant Name
                </h3>
                {/* Active signal */}
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center justify-center  bg-[#FE0000] h-[16px] w-[16px] rounded-full">
                    <img src={inactive} alt="" />
                  </div>
                  <h3 className="text-[10px] font-Poppins font-semibold text-[#FE0000]">
                    Inactive
                  </h3>
                </div>
              </div>
            </div>
            {/* Right Side Buttons */}
            <div className=" flex justify-between items-center gap-3">
              <button className="flex items-center rounded-md px-4 gap-2 py-2 font-Poppins font-medium text-white text-xs leading-[24px] bg-[#008BD9] ">
                Activate Account
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
            <div className="grid grid-cols-2 justify-between items-center  flex-1 lg:mr-52">
              {userData.map((data) => (
                <div key={data} className="text-sm font-Poppins">
                  <p className="text-[#5F5F5F] mb-1">{data.title}</p>
                  <p className="text-primary font-semibold mb-7">{data.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantInactive;

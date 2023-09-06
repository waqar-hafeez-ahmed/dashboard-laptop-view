import Phone from "../assets/dashboard/PhoneGirl.png";
import Docs from "../assets/dashboard/pendingRequests.png";
import DashboardCard from "../components/DashboardCard";
import Donut from "../components/Donut";
import { dashboardCard } from "../constants";
import { DailyRevenueCard } from "../assets/dashboard";
import Area from "../components/Area";

const Dashboard = () => {
  return (
    <section className="mx-8 flex flex-col my-6">
      {/* Frist Row  */}
      <div className="flex justify-between items-center w-full gap-5">
        <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] h-[147px] flex-1">
          <div className="flex flex-1 justify-between items-center">
            <h2 className="font-Poppins font-medium text-black text-[17px] ">
              Welcome back,{" "}
              <span className="font-semibold text-lg">ADMIN !</span>
            </h2>
          </div>
          <img src={Phone} alt="/" width={104} height={110} className="mr-5" />
        </div>
        <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] h-[147px] flex-1">
          <h2 className="font-Poppins text-black  font-semibold text-lg">
            Total Revenue
          </h2>

          <img src={Docs} alt="/" className="ml-14" />
          <h2 className="font-Poppins text-black  font-bold text-[28.5px]">
            ₦ 15154646
          </h2>
        </div>
      </div>
      {/* Second Row */}
      <div className="flex justify-between items-center w-full gap-14 mt-6">
        {dashboardCard.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>
      {/* Third Row */}
      <div className="flex justify-between  w-full  mt-4 gap-12">
        <div className="flex flex-1 flex-col ">
          <h4 className="text-lg font-Poppins font-medium text-[#252525] mb-1">
            Daily Revenue
          </h4>
          <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] h-[260px]">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 flex-wrap">
                <img src={DailyRevenueCard} alt="" />
                <p className="font-Poppins font-bold text-lg text-[#008BD9]">
                  Today’s Total revenue
                </p>
              </div>
              <p className="font-Poppins font-bold text-xl text-[#252525] mt-4">
                ₦ 15154646.1255
              </p>
            </div>
            <Donut />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <h4 className="text-lg font-Poppins font-medium text-[#252525] mb-1">
            Weekly Revenue
          </h4>
          <div className="flex flex-1 justify-between overflow-hidden items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] h-[260px]">
            <Area />
          </div>
        </div>
      </div>
      {/* Last Row */}
      <div className="flex flex-1 flex-col w-full mt-4 gap-4 ">
        <h4 className="text-lg font-Poppins font-medium text-[#252525] mb-1">
          Total yearly and monthly Revenue
        </h4>
        <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] ">
          <Area />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

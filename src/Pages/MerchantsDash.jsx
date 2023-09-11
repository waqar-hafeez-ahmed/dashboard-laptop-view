import DashboardCard from "../components/DashboardCard";
import { dashboardCard } from "../constants";
import TableComp from "../components/Table";

const MerchantsDash = () => {
  return (
    <section className=" flex flex-col section">
      <div className="flex justify-between items-center w-full gap-14 mt-[50px]">
        {dashboardCard.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>

      <div className="flex flex-1 flex-col w-full mt-14 gap-4 ">
        <h4 className="text-[25px] font-Poppins font-semibold text-primary ml-4">
          All Merchants
        </h4>
        <div className="flex justify-between items-center w-full px-12 py-4 rounded-md bg-white shadow-[0_0_5px_0_#00000052] ">
          <TableComp />
        </div>
      </div>
    </section>
  );
};

export default MerchantsDash;

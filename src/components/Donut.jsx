import { DonutChart } from "@tremor/react";
const revenu = [
  {
    name: "Today's Subscription",
    sales: 27,
  },
  {
    name: "Total Subscription",
    sales: 70,
  },
];



  
  const Donut = () => {
    return (
      <DonutChart
        className="my-6 text-sm text-[#181818] font-Poppins font-semibold w-[205px]"
        label="27 Subs.."
        data={revenu}
        category="sales"
        index="name"
        colors={["amber","blue"]}
      />
    );
  }
  
  export default Donut
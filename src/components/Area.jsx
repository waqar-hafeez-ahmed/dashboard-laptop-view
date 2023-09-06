import { AreaChart } from "@tremor/react";
import { Select, SelectItem } from "@tremor/react";

const chartdata = [
  {
    date: "Sun",
    SemiAnalysis: 1400,
  },
  {
    date: "Mon",
    SemiAnalysis: 900,
  },
  {
    date: "Tue",
    SemiAnalysis: 1520,
  },
  {
    date: "Wed",
    SemiAnalysis: 1000,
  },
  {
    date: "Thr",
    SemiAnalysis: 1400,
  },
  {
    date: "Fri",
    SemiAnalysis: 1700,
  },
  {
    date: "Sat",
    SemiAnalysis: 1000,
  },
];

const dataFormatter = (number) => {
  return "" + Intl.NumberFormat("us").format(number).toString();
};

const Area = () => (
  <div className="flex-1">
    <div className="flex justify-between">
      <p className="font-Poppins font-bold text-sm text-[#252525] mt-4">
        ₦ 15154646.1255
      </p>
      <div>
        <Select className="text-[10px] font-Poppins font-bold text-[#0000ff]  rounded-md border-[blue]">
          <SelectItem value="1">This week</SelectItem>
          <SelectItem value="2">Two week</SelectItem>
          <SelectItem value="3">Three week</SelectItem>
        </Select>
      </div>
    </div>
    <AreaChart
      className="max-h-[150px] mt-8 "
      showYAxis={false}
      data={chartdata}
      showGridLines={false}
      showLegend={false}
      curveType="monotone"
      index="date"
      categories={["SemiAnalysis"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
     
    />
  </div>
);

export default Area;

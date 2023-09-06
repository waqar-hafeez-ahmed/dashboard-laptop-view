import { Select, SelectItem, BarChart } from "@tremor/react";

const chartdata2 = [
  {
    name: "Jan",
    "Number of threatened species": 2488,
  },
  {
    name: "Feb",
    "Number of threatened species": 1445,
  },
  {
    name: "Mar",
    "Number of threatened species": 743,
  },
  {
    name: "Apr",
    "Number of threatened species": 2488,
  },
  {
    name: "May",
    "Number of threatened species": 1445,
  },
  {
    name: "Jun",
    "Number of threatened species": 743,
  },
  {
    name: "Jul",
    "Number of threatened species": 2488,
  },
  {
    name: "Aug",
    "Number of threatened species": 1445,
  },
  {
    name: "Sep",
    "Number of threatened species": 743,
  },
  {
    name: "Oct",
    "Number of threatened species": 2488,
  },
  {
    name: "Nov",
    "Number of threatened species": 1445,
  },
  {
    name: "Dec",
    "Number of threatened species": 743,
  },
];

const dataFormatter = (number) => {
  return " " + Intl.NumberFormat("us").format(number).toString();
};

const Bar = () => {
  return (
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
      <BarChart
        className="max-h-[235px]  mt-8 "
        data={chartdata2}
        index="name"
        categories={["Number of threatened species"]}
        valueFormatter={dataFormatter}
        showYAxis={false}
        showGridLines={false}
        showLegend={false}
        curveType="monotone"
        colors={["blue"]}
      />
    </div>
  );
};

export default Bar;

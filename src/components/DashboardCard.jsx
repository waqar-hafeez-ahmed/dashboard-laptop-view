const DashboardCard = ({ title, img, value, border }) => {
  return (
    <div
      className={`flex flex-1 w-full flex-col  py-4 rounded-md bg-white shadow-[0_0_3px_0_#00000040]  border-b-[10px] h-[110px] border-[${border}]`}
    >
      <p className="text-center font-Poppins font-bold text-sm text-primary">
        {title}
      </p>
      <div className="flex justify-between items-center mt-3 px-5 ">
        <img src={img} className="" />
        <p className="text-center font-Poppins font-bold text-sm text-primary">
          {value}
        </p>
      </div>
    </div>
  );
};

export default DashboardCard;

import Admin from "../assets/settings/Admin.png";

const Password = () => {
  return (
    <div className="flex flex-1 flex-col rounded-md shadow-[0_0_5px_0_#00000052] bg-white pl-16 pr-20 h-[200px]">
      <div className=" flex justify-between items-center mt-10">
        <div className=" flex justify-between items-center gap-6">
          <img src={Admin} alt="" />
          <h3 className="text-[17px] font-Poppins font-bold text-primary">
            Merchant Name
          </h3>
        </div>
        <div className=" flex justify-between items-center">
          <button
            type="button"
            className=" px-3 py-[6px] font-medium text-[17px] font-Poppins rounded-md text-primary  border border-primary"
          >
            Request new password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Password;

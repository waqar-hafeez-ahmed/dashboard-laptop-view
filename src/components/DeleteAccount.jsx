import WarnSign from "../assets/settings/Warning.png";
import Bin from "../assets/settings/DeleteBin.png";
import { useState } from "react";
const DeleteAccount = () => {
  const [deleted, setDeleted] = useState(false);
  const handleClick = () => {
    setDeleted(!deleted);
  };
  setTimeout(() => {
    setDeleted(false);
  }, 2000);
  return (
    <div className="flex flex-1 flex-col items-center rounded-md shadow-[0_0_5px_0_#00000052] bg-white px-20 h-[360px]">
      {deleted && (
        <div className="absolute mx-auto top-24 rounded-md py-2 pl-28 pr-14 bg-[#FFACAC] text-lg font-Poppins font-medium text-[#A50000] transition ease-in delay-150  duration-300  ">
          Account Deleted!
          <span className="font-normal ml-8">Please check your e-mail</span>
        </div>
      )}
      <h2 className="text-xl font-Poppins font-semibold text-[#050505] mt-8 ">
        Delete Account
      </h2>
      <p className="text-[17px] font-Poppins max-w-[560px] text-[#0A0A0A] leading-[33px] mt-4 text-center">
        Are you sure you want to delete your account?. Deleting your account
        will wipe out everything in your account
      </p>
      <div className="flex  flex-col items-center rounded-md bg-[#FFACAC] h-[126px] w-[615px] mt-4 border-l-[6px] border-[#DF2E3A]">
        <div className="flex justify-start items-center w-full mt-3 ml-10 gap-3">
          <img src={WarnSign} alt="" />
          <h2 className="text-xl font-Poppins font-semibold text-[#6F0000]">
            Warning
          </h2>
        </div>
        <p className="text-[17px] font-Poppins max-w-[410px] text-[#A50000] leading-[33px]  text-center mt-1.5">
          By deleting your account, you will lose access to
          <span className="font-medium"> Tranchepay</span>
        </p>
      </div>
      <div className="flex justify-end w-[615px] mt-4 ">
        <button
          className="flex items-center rounded-md px-4 gap-2 py-2 font-Poppins font-medium text-white text-xs leading-[24px] bg-[#DF2E3A] "
          onClick={handleClick}
        >
          <img src={Bin} alt="" /> Delete Account
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;

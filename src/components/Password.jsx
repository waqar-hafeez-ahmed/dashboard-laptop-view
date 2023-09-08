import Admin from "../assets/settings/Admin.png";
import { useState } from "react";

const Password = () => {
  const [sendEmail, setSendEmail] = useState(false);
  const handleClick = () => {
    setSendEmail(!sendEmail);
  };
  setTimeout(() => {
    setSendEmail(false);
  }, 1500);

  return (
    <div className="flex flex-1 flex-col rounded-md shadow-[0_0_5px_0_#00000052] bg-white pl-16 pr-20 h-[200px]">
      {sendEmail && (
        <div className="absolute mx-auto top-24 rounded-md py-2 pl-28 pr-14 bg-[#008BD9] text-lg font-Poppins font-medium text-white transition ease-in delay-150  duration-300  ">
          Email Sent!
          <span className="font-normal ml-8">Please check your e-mail</span>
        </div>
      )}
      <div className=" flex justify-between items-center mt-10">
        <div className=" flex justify-between items-center gap-6">
          <img src={Admin} alt="" />
          <h3 className="text-[17px] font-Poppins font-bold text-primary">
            Merchant Name
          </h3>
        </div>
        <div className=" flex justify-between items-center">
          <button
            onClick={handleClick}
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

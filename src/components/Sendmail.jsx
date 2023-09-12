import { useState } from "react";
import mail from "../assets/merchant/mail.svg";

const EditProfile = () => {
  const [sent, setSent] = useState(false);
  const handleClick = () => {
    setSent(!sent);
  };
  setTimeout(() => {
    setSent(false);
  }, 2000);
  return (
    <div className=" rounded-md shadow-[0_0_5px_0_#00000052] bg-white h-[500px] w-full">
      <div className="flex w-full items-center justify-center">
        {sent && (
          <div className="absolute mx-auto top-24 rounded-md py-2 px-24 bg-[#008BD9] text-lg font-Poppins font-medium text-white ">
            Sent Successfully
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between items-center font-Poppins">
        {/* Header */}
        <div className="flex justify-start items-center w-full px-12 bg-[#008BD9] h-[60px] rounded-t-md pt-[2px]">
          <img src={mail} alt="" />
          <p className="text-primary text-[17px] font-bold leading-[32px] ml-3">
            Email to
          </p>
          <p className="text-primary text-[17px] leading-[32px] ml-3">
            merchant@email.com
          </p>
        </div>
        {/* Form */}
        <div className=" flex flex-col px-16 max-xl:px-8 w-full mt-8 ml-3">
          <div className="flex flex-1">
            <p className="text-primary leading-[32px] mr-16">From</p>
            <p className="text-primary text-lg font-medium leading-[32px]">
              admin@admin.com
            </p>
          </div>
          <hr className=" mt-4 mb-4 border-[#C8C8C8] " />
          <div className="flex flex-1">
            <p className="text-primary leading-[32px] mr-12 ">Subject</p>
            <p className="text-primary text-lg font-medium leading-[32px]">
              admin@admin.com
            </p>
          </div>
          <hr className=" mt-4 mb-4 border-[#C8C8C8] " />
          <div className="flex  h-[190px]">
            <p className="text-primary leading-[32px] mr-12  ">
              Your Email ....
            </p>
          </div>
          <hr className=" mt-4 border-[#C8C8C8] " />
        </div>
        {/* Buttons */}
        <div className="flex justify-end mt-3 px-16 max-xl:px-8 w-full">
          <button
            onClick={handleClick}
            className="py-2 px-8 rounded-md text-white bg-[#008BD9] border border-[#008BD9]"
          >
            Send email
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

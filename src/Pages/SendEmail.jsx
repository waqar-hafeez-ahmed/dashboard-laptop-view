import Admin from "../assets/settings/Admin.png";
import active from "../assets/merchant/active.svg";
import Sendmail from "../components/Sendmail";

const SendEmail = () => {
  return (
    <section className="section flex flex-col">
      {/* Profile */}
      <div className=" flex justify-start items-center gap-6">
        <img src={Admin} alt="" />
        <div className="flex flex-col gap-4 mt-9">
          <div className="flex flex-wrap gap-4">
            <h3 className="text-[17px] font-Poppins font-bold text-primary">
              Merchant Name
            </h3>
          </div>
          {/* Active signal */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center justify-center  bg-[#00C3CF] h-[16px] w-[16px] rounded-full">
              <img src={active} alt="" />
            </div>
            <h3 className="text-[10px] font-Poppins font-semibold">Active</h3>
          </div>
        </div>
      </div>
      <h4 className="text-lg font-Poppins font-bold mt-8 ">Send mail</h4>
      <div className="mt-4">
        <Sendmail />
      </div>
    </section>
  );
};

export default SendEmail;

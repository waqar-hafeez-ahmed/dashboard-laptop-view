import bell from "../assets/sidebar/NotificationBell.png";
import profile from "../assets/sidebar/Profile.png";

const Navbar = () => {
  return (
    <section className="w-full flex justify-end h-[66px] bg-white shadow-[0_2px_4px_0px_#b2b9c2] ">
      <div className="flex justify-center items-center mr-[160px] gap-8">
        <img src={bell} alt="notification" className="cursor-pointer" />
        <div className="flex justify-center items-center gap-4 cursor-pointer">
          <img src={profile} alt="/" />
          <h4 className="text-primary font-medium font-Poppins text-lg leading-[32px] cursor-pointer">
            Admin
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Navbar;

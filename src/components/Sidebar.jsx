import { sidebar } from "../constants";
import { SBLogout } from "../assets/sidebar";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Sidebar = () => {
  return (
    <section className="flex flex-col text-center py-4 bg-primary w-[191px] h-[752px]">
      <div className="mt-3 flex justify-center">
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="mt-[80px]">
        {sidebar.map((list) => (
          <div key={list.title} className="ml-4 flex flex-col mb-5 ">
            <div className="bg-white flex justify-start items-center w-[180px] h-[33px] shadow-[3px_0px_4px_0px_#a0aec0]">
              {list.titleImg && (
                <div className=" ml-3">
                  <img src={list.titleImg} alt="/" width={18} height={18} />
                </div>
              )}
              <p className="text-sm font-Poppins font-medium text-primary absolute ml-11">
                {list.title}
              </p>
            </div>
            <div className="h-[120px]">
              <ul className=" flex flex-col gap-2.5">
                {list.link.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        "font-Poppins text-sm " +
                        (isActive
                          ? "text-white  font-medium"
                          : "text-[#9D9D9D] font-normal")
                      }
                    >
                      <div className="flex ml-[35px] gap-3 cursor-pointer mt-3">
                        {link.img}
                        <a href="">{link.name}</a>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="realtive  flex ml-8 gap-4 items-center mt-6">
        <img src={SBLogout} alt="" />
        <p href="/" className="text-[#9D9D9D] text-sm font-Poppins font-normal">
          Log out
        </p>
      </div>
    </section>
  );
};

export default Sidebar;

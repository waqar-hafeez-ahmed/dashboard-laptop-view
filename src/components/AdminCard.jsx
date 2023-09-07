import { NavLink } from "react-router-dom";
import { admin } from "../constants";

const AdminCard = () => {
  return (
    <div className="flex flex-initial rounded-md shadow-[0_0_5px_0_#00000052] bg-white px-12 py-4 w-[273px] h-[225px]">
      <ul className=" flex flex-col gap-2.5">
        {admin.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                "font-Poppins text-[17px] " +
                (isActive
                  ? "text-primary  font-bold tracking-wide"
                  : "text-[#A6A6A6] font-normal")
              }
            >
              <div className="flex gap-3 cursor-pointer mt-3">
                {item.img}
                <a href="">{item.title}</a>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCard;

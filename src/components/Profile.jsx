import { useState } from "react";
import Admin from "../assets/settings/Admin.png";
import Edit from "../assets/settings/Edit.svg";
import EditProfile from "./EditProfile";

const userData = [
  { title: "Name", info: "Naseem Muneer" },
  { title: "Email Address", info: "naseembaloch7524@gmail.com" },
  { title: "Address", info: "Islamabad, Pakistan" },
  { title: "Phone Number", info: "+923160598938" },
  { title: "Country", info: "Pakistan" },
  { title: "Shop Address", info: "Islamabad, Pakistan" },
];

const Profile = () => {
  const [editProfile, seteditProfile] = useState(false);
  const handleClick = () => {
    seteditProfile(true);
  };
  const handlerChildClick = () => {
    seteditProfile(false);
  };

  return (
    <>
      <div className="flex flex-1 flex-col rounded-md shadow-[0_0_5px_0_#00000052] bg-white pl-16 pr-8 h-[500px]">
        {editProfile && (
          <div className="relative -top-10 -left-32">
            <EditProfile change={handlerChildClick} />
          </div>
        )}
        <div className=" flex justify-between items-center mt-10">
          <div className=" flex justify-between items-center gap-6">
            <img src={Admin} alt="" />
            <h3 className="text-[17px] font-Poppins font-bold text-primary">
              Admin Name
            </h3>
          </div>
          <div className=" flex justify-between items-center">
            <button
              type="button"
              className="flex items-center gap-4 px-6 py-[6px] text-sm font-semibold font-Poppins rounded-md text-primary  border border-primary"
              onClick={handleClick}
            >
              Edit
              <img src={Edit} alt="" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between items-center">
          <hr className=" mt-6 mb-8 border-primary col-span-2 max-w-[1000px]  2xl:mr-40 xl:mr-20" />
          {userData.map((data) => (
            <div key={data} className="text-sm font-Poppins">
              <p className="text-[#5F5F5F] mb-1">{data.title}</p>
              <p className="text-primary font-semibold mb-7">{data.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;

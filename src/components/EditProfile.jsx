import cross from "../assets/settings/close.svg";

const inputDate = [
  { label: "First Name", id: "firstName", placeholder: "First Name" },
  { label: "Last Name", id: "lastName", placeholder: "Last Name" },
  { label: "Email", id: "email", placeholder: "info@email.com" },
  { label: "Zip code", id: "zipcode", placeholder: "Zip code" },
  { label: "Address", id: "Address", placeholder: "Islamabad, Pakistan" },
  {
    label: "Shop address",
    id: "Shopaddress",
    placeholder: "Islamabad, pakistan",
  },
  { label: "Phone", id: "Phone", placeholder: "+923160598938" },
];

const EditProfile = ({ change }) => {
  return (
    <div className="absolute rounded-md shadow-[0_0_5px_0_#00000052] bg-white h-[500px] w-full">
      <div className="flex flex-1 flex-col justify-between items-center font-Poppins">
        {/* Header */}
        <div className="flex justify-between items-center w-full px-12 bg-[#008BD9] h-[54px] rounded-t-md pt-[2px]">
          <p className="text-white font-medium leading-[32px] pl-4">
            Edit Profile
          </p>
          <img
            src={cross}
            alt=""
            className="cursor-pointer"
            onClick={() => change()}
          />
        </div>
        {/* Form */}
        <div className="grid grid-cols-2 px-16 max-xl:px-8 w-full gap-x-10 justify-evenly max-xl:gap-x-4 mt-8">
          {inputDate.map((item, index) => (
            <div key={index} className="flex flex-col mb-6">
              <label htmlFor={item.id}>{item.label}</label>
              <input
                id={item.id}
                type="text"
                className="border rounded-md border-black py-2 px-4 text-sm text-[#676767]"
                placeholder={item.placeholder}
              />
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex justify-end mt-4 mr-14 w-full gap-3 items-center">
          <button
            className="text-sm text-[#303030] font-medium rounded-[3px] py-1 px-10 bg-white border border-[#303030]"
            onClick={() => change()}
          >
            Cancel
          </button>
          <button
            className="text-sm  font-medium py-1 px-6 rounded-[3px] text-white bg-[#008BD9] border border-[#008BD9]"
            onClick={() => change()}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

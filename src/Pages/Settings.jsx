import { Route, Routes } from "react-router-dom";
import Profile from "../components/Profile";
import AdminCard from "../components/AdminCard";
import Password from "../components/Password";
import DeleteAccount from "../components/DeleteAccount";

const Settings = () => {
  return (
    <section className="flex flex-col section">
      <h2 className="text-2xl font-semibold font-Poppins text-primary ml-8 mt-2">
        Settings
      </h2>
      <div className="flex justify-between flex-row  mt-10 gap-4">
        <div>
          <AdminCard />
        </div>
        <div className="flex-1">
          <Routes>
            <Route index path="/" element={<Profile />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="password" element={<Password />}></Route>
            <Route path="delete-account" element={<DeleteAccount />}></Route>
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default Settings;

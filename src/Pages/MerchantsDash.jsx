import { Route, Routes } from "react-router-dom";
import TableComp from "../components/Table";
import MerchantProfile from "../components/MerchantProfile";
import MerchantInactive from "../components/MerchantInactive";
import SendEmail from "./SendEmail";

const MerchantsDash = () => {
  return (
    <section className=" section">
      <div>
        <Routes>
          <Route index element={<TableComp />}></Route>
          <Route path="merchant-profile" element={<MerchantProfile />}></Route>
          <Route
            path="merchant-inactive"
            element={<MerchantInactive />}
          ></Route>
          <Route path="sendemail" element={<SendEmail />}></Route>
        </Routes>
      </div>
    </section>
  );
};

export default MerchantsDash;

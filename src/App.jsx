import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Subscription from "./Pages/Subscription";
import MerchantsDash from "./Pages/MerchantsDash";
import MerchantsPayment from "./Pages/MerchantsPayment";
import CreateBlog from "./Pages/CreateBlog";
import CreateAdmin from "./Pages/CreateAdmin";

const App = () => {
  return (
    <main className="flex flex-row bg-[#F0F0F0] min-h-[120vh]">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/subscription" element={<Subscription />}></Route>
            <Route path="/setting/*" element={<Settings />}></Route>
            <Route
              path="/merchant-dashboard/*"
              element={<MerchantsDash />}
            ></Route>

            <Route
              path="/merchant-payment"
              element={<MerchantsPayment />}
            ></Route>
            <Route path="/create-blog" element={<CreateBlog />}></Route>
            <Route path="/create-admin" element={<CreateAdmin />}></Route>
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default App;

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import Subscription from "./Pages/Subscription";

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
            <Route path="/setting/*" element={<Settings />}></Route>
            <Route path="/subscription" element={<Subscription />}></Route>
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default App;

import Dashboard from "./Pages/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <main className="flex flex-row bg-[#F0F0F0] h-full">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Navbar />
        <div>
          <Dashboard />
        </div>
      </div>
    </main>
  );
};

export default App;

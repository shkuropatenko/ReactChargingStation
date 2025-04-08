import { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const DashboardContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>(location.pathname);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(tab);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">Welcome to the Dashboard</h2>
      <p className="mt-4">Here is the main content of your Dashboard.</p>
      <div className="flex space-x-4 mt-6">
        <button
          onClick={() => handleTabClick("/dashboard/home")}
          className={`cursor-pointer text-white text-lg border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] ${
            activeTab === "/dashboard/home" ? "bg-blue-500" : "bg-transparent"
          }`}
        >
          Charging Stations
        </button>
        <button
          onClick={() => handleTabClick("/dashboard/home")}
          className={`cursor-pointer text-white text-lg bg-transparent border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px]`}
        >
          Fleet Sizing
        </button>
        <button
          onClick={() => handleTabClick("/dashboard/home")}
          className={`cursor-pointer text-white text-lg bg-transparent border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px]`}
        >
          Parking
        </button>
      </div>

      <div className="mt-8">
        <Routes>
          <Route
            path="/dashboard/home"
            element={<div>Charging Stations Content</div>}
          />

          <Route
            path="/dashboard/home"
            element={<div>Fleet Sizing Content</div>}
          />
          <Route path="/dashboard/home" element={<div>Parking Content</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardContent;

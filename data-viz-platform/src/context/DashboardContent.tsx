import { useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SearchInput from "../components/SearchInput/SearchInput";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DrawerBar from "../components/DrawerBar/DrawerBar";

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
      <div className="flex items-center justify-between p-[20px]">
        <div className="flex space-x-4">
          <button
            onClick={() => handleTabClick("/dashboard/home")}
            className={`cursor-pointer text-white text-lg border  hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] ${
              activeTab === "/dashboard/home"
                ? "bg-grey-200 border-grey-100"
                : "bg-transparent border-transparent"
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
        <SearchInput />
      </div>
      <div className="border rounded-tl-[5px] rounded-bl-[5px] border-grey-400 p-[40px] border-r-0 bg-[#161618]">
        <div className="flex items-center justify-between ">
          <h1 className="!text-2xl font-bold">
            <FlashOnIcon className="mr-2 !w-[30px] !h-[30px]" />
            Charging Station{" "}
          </h1>
          <div className="flex items-center justify-between ">
            <button className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px]">
              1
            </button>
            <DrawerBar />
            <button>2</button>
          </div>
        </div>
      </div>
      {/* 
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
      </div> */}
    </div>
  );
};

export default DashboardContent;

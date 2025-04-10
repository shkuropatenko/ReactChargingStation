import { Key, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import TabButton from "../components/TabButton/TabButton";
import SearchInput from "../components/SearchInput/SearchInput";
import CustomLineChart from "../components/CustomLineChart/CustomLineChart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import DrawerBar from "../components/DrawerBar/DrawerBar";
import HistoryIcon from "@mui/icons-material/History";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Indicator from "../components/Indicators/Indicators";
import { indicators } from "../consts/consts";
import AddIcon from "@mui/icons-material/Add";

const tabItems = [
  { label: "Charging Stations", route: "/dashboard/home" },
  { label: "Fleet Sizing", route: "/dashboard/fleet" },
  { label: "Parking", route: "/dashboard/parking" },
];

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
      <div className="flex items-center justify-between p-[22px]">
        <div className="flex space-x-4">
          {tabItems.map((tab) => (
            <TabButton
              key={tab.route}
              label={tab.label}
              route={""}
              active={activeTab === tab.route}
              onClick={handleTabClick}
            />
          ))}
        </div>
        <SearchInput />
      </div>
      <div className="border rounded-tl-[5px] rounded-bl-[5px] border-grey-400 p-[40px] border-r-0 bg-[#161618]">
        <div className="flex items-center justify-between">
          <h1 className="!text-2xl font-bold">
            <FlashOnIcon className="mr-2 !w-[30px] !h-[30px]" />
            Charging Station{" "}
          </h1>
          <div className="flex items-center justify-between ">
            <button className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px]">
              <HistoryIcon />
            </button>
            <DrawerBar />
            <button className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px]">
              <FileUploadIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="!text-xl font-bold text-olive-100">
            <AutoAwesomeIcon /> Best Scenario Results
          </h2>
          <button className="cursor-pointer text-olive-200 border border-olive-200 w-[44px] h-[34px] rounded-[20px] hover:opacity-75 transition transform duration-500 ease-in-out">
            <KeyboardArrowUpIcon />
          </button>
        </div>
        <div className="flex items-center justify-between p-2 mb-6 border border-olive-400 rounded-[6px] text-olive-300 hover:text-olive-500 transition transform duration-500 ease-in-out">
          <span>
            The best found configuration based on profit is characterized by 11
            zones (max) with charging stations and 48 total number of poles.
          </span>
          <button className="cursor-pointer w-[44px] h-[34px]">
            <MoreHoriz />
          </button>
        </div>
        <div className="flex items-center justify-between p-2 mb-6 border border-olive-400 rounded-[6px] text-olive-300 hover:text-olive-500 transition transform duration-500 ease-in-out">
          <span>
            The best found configuration based on satisfied demand is
            characterized by 11 zones (max) with charging stations and 48 total
            number of poles.
          </span>
          <button className="cursor-pointer w-[44px] h-[34px]">
            <MoreHoriz />
          </button>
        </div>
        <div className="grid grid-cols-9 gap-4 p-2">
          <div className="col-span-5">
            <h2 className="text-white text-2xl font-semibold mb-4">Graphs</h2>
            <CustomLineChart />
          </div>
          <div className="col-span-4">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-2xl font-semibold mb-0">
                Key Performance Indicators
              </h2>
              <button className="cursor-pointer border border-[#414142] p-2 rounded-[6px]">
                Variables <AddIcon />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {indicators.map((item, index: Key | null | undefined) => (
                <div>
                  <Indicator
                    key={index}
                    title={item.title}
                    text={item.text}
                    cost={item.cost}
                  />
                </div>
              ))}
            </div>
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

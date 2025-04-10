import { Key, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
      <div className="xl:flex items-center justify-between px-[27px] py-[25px]">
        <div className="flex space-x-1 mb-[20px] xl:mb-0">
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
        <div className="md:w-[237px]">
          <SearchInput />
        </div>
      </div>
      <div className="border rounded-tl-[5px] rounded-bl-[5px] rounded-br-[10px]  border-grey-400 px-[40px] py-[31px] border-r-0 bg-[#161618] border-b-0">
        <div className="md:flex items-center justify-between mb-[20px] md:mb-[51px]">
          <h1 className="!text-[31px] font-bold pt-[19px]">
            <FlashOnIcon className="mr-5 !w-[30px] !h-[30px]" />
            Charging Station
          </h1>
          <div className="flex items-center pt-[20px] md:pt-0">
            <button className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium w-[40px] h-[40px] ml-[14px] transition transform duration-500 ease-in-out">
              <HistoryIcon />
            </button>
            <DrawerBar />
            <button className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium w-[40px] h-[40px] ml-[14px] transition transform duration-500 ease-in-out">
              <FileUploadIcon />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="!text-[23px] font-bold text-olive-100">
            <AutoAwesomeIcon />{" "}
            <span className="pl-[3px]">Best Scenario Results</span>
          </h2>
          <button className="cursor-pointer text-olive-200 border border-olive-200 w-[44px] h-[34px] rounded-[20px] hover:opacity-75 transition transform duration-500 ease-in-out">
            <KeyboardArrowUpIcon />
          </button>
        </div>
        <div className="flex items-center justify-between px-[27px] py-[11px] text-[17px] mb-[16px] border border-olive-400 rounded-[8px] text-olive-300 hover:text-olive-500 transition transform duration-500 ease-in-out">
          <span>
            The best found configuration based on profit is characterized by 11
            zones (max) with charging stations and 48 total number of poles.
          </span>
          <button className="cursor-pointer w-[44px] h-[34px] mr-[-15px]">
            <MoreHoriz />
          </button>
        </div>
        <div className="flex items-center justify-between px-[27px] py-[11px] text-[17px] mb-[16px] border border-olive-400 rounded-[8px] text-olive-300 hover:text-olive-500 transition transform duration-500 ease-in-out">
          <span>
            The best found configuration based on satisfied demand is
            characterized by 11 zones (max) with charging stations and 48 total
            number of poles.
          </span>
          <button className="cursor-pointer w-[44px] h-[34px] mr-[-15px]">
            <MoreHoriz />
          </button>
        </div>
        <div className="2xl:flex justify-between gap-4 px-2 pt-[41px] pr-0 pl-0">
          <div className="2xl:w-[59.5%] 2xl:mb-0 mb-[40px]">
            <h2 className="text-white text-2xl font-semibold mb-4">Graphs</h2>
            <CustomLineChart />
          </div>
          <div className="2xl:w-[39%]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-2xl font-semibold mb-0">
                Key Performance Indicators
              </h2>
              <button className="inline-flex items-center justify-between cursor-pointer border border-[#414142] text-[13px] px-[7px] py-1 pl-[10px] rounded-[6px] transition transform duration-500 ease-in-out hover:border-grey-100 hover:bg-grey-700 hover:text-grey-800">
                <span className="pr-[11px]">Variables</span>{" "}
                <AddIcon className="!text-[18px]" />
              </button>
            </div>

            <div className="md:grid grid-cols-2 gap-4">
              {indicators.map((item, index: Key | null | undefined) => (
                <div key={index} className="mb-[20px] md:mb-0">
                  <Indicator
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
    </div>
  );
};

export default DashboardContent;

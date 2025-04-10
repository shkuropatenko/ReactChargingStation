import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import SearchInput from "../SearchInput/SearchInput";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { useState, useRef } from "react";
import { CheckboxGroup } from "../CheckboxGroup/CheckboxGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

type Anchor = "right";

const DrawerBar: React.FC = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  // Стейты для выбора переменных
  const [selectedCategoryA, setSelectedCategoryA] = useState<string[]>([
    "Fleet Sizing",
  ]);
  const [selectedCategoryB, setSelectedCategoryB] = useState<string[]>([
    "Request rate",
    "Variable 1",
  ]);
  const [selectedCategoryC, setSelectedCategoryC] = useState<string[]>([
    "Variable 2",
    "Variable 3",
  ]);

  // State for hover CO₂ Distribution
  const [hovered, setHovered] = useState(false);

  // timer useRef
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // handleHover
  const handleHover = (label: string) => {
    if (label === "CO₂ Distribution") {
      hoverTimeout.current = setTimeout(() => {
        setHovered(true);
      }, 1500);
    } else {
      // clearTimeOut
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
      setHovered(false);
    }
  };

  // Drawer Panel
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box role="presentation" className="md:w-[690px]">
      <div className="h-[100vh] bg-black-100 block text-white-100 border border-grey-100 px-[29px] py-[41px] pr-[35px]">
        <div className="flex items-center justify-between mb-[28px]">
          <h2 className="text-white text-[23px] font-semibold mb-0">
            Edit Variables
          </h2>
          <button
            onClick={toggleDrawer(anchor, false)}
            className="cursor-pointer text-lg text-wgite rounded-[4px] font-medium"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between mb-[30px]">
          <div className="md:w-[56%]">
            <SearchInput />
          </div>

          <button className="cursor-pointer text-[15px] border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] transition transform duration-500 ease-in-out font-medium px-4 h-[40px] w-full md:w-[129px]">
            <AutoAwesomeIcon /> Autofill
          </button>
          <button className="cursor-pointer relative text-[15px] text-olive-500 bg-linear-to-b from-[#C8E972] to-[#708340] text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] transition transform duration-500 ease-in-out font-medium px-4 h-[40px] w-full md:w-[124px]">
            <span className="flex items-center justify-center rounded-[4px] absolute left-[1px] right-[1px] bottom-[1px] top-[1px] bg-[#23291E]">
              <span>
                <RotateRightIcon /> Rerun
              </span>
            </span>
          </button>
        </div>
        <div className="bg-[#161618] border border-grey-1000 rounded-[5px] py-[30px] px-[29px] pb-0 mb-[17px]">
          <strong className="block text-white text-[14px] font-medium mb-[20px]">
            Variable category 1
          </strong>
          <CheckboxGroup
            options={["Carbon 1", "CO₂ Distribution", "Fleet Sizing"]}
            selected={selectedCategoryA}
            setSelected={setSelectedCategoryA}
            onHover={handleHover}
          />

          <strong className="block text-white text-[14px] font-medium mb-[20px]">
            Variable category 2
          </strong>
          <CheckboxGroup
            options={[
              "Parking Rate",
              "Border Rate",
              "Request rate",
              "Variable 1",
              "Variable 2",
              "Variable 3",
            ]}
            selected={selectedCategoryB}
            setSelected={setSelectedCategoryB}
            onHover={handleHover}
          />
          <strong className="block text-white text-[14px] font-medium mb-[20px]">
            Variable category 3
          </strong>
          <CheckboxGroup
            options={["Variable 1", "Variable 2", "Variable 2"]}
            selected={selectedCategoryC}
            setSelected={setSelectedCategoryC}
            onHover={handleHover}
          />
          {/* Block with animation on hover */}
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ml-[-29px] mr-[-29px] ${
              hovered ? "max-h-[500px] opacity-100 mb-[0]" : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 bg-grey-900 text-sm text-gray-200 py-[34px] px-[34px] rounded-bl-[5px] rounded-br-[5px] bg-opacity-50 border-t-[1px] border-grey-1000 ">
              <strong className="font-medium text-[20px] text-white flex items-center mb-[21px]">
                <span>Co2 Distribution</span>
                <InfoOutlineIcon className="text-white !w-[16px] h-![16px] ml-[10px]" />
              </strong>
              <p className="text-[15px] text-[#BBBBBB] leading-[150%]">
                But what truly sets Switch apart is its versatility. It can be
                used as a scooter, a bike, or even a skateboard, making it
                suitable for people of all ages. Whether you're a student, a
                professional, or a senior citizen, Switch adapts to your needs
                and lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[20px] bg-grey-900 border border-grey-1000 rounded-[5px] px-[23px] py-[10px] pr-[18px] text-2xl text-olive-200 mb-[17px]">
          <span>Primary Variables</span>
          <button className="cursor-pointer text-olive-200 border border-olive-200 w-[44px] h-[34px] rounded-[20px] bg-[#1D1D1F] hover:opacity-75 transition transform duration-500 ease-in-out">
            <KeyboardArrowDownIcon />
          </button>
        </div>
        <div className="flex items-center justify-between text-[20px] bg-grey-900 border border-grey-1000 rounded-[5px] px-[23px] py-[10px] pr-[18px] text-2xl text-olive-200 mb-[17px]">
          <span>Secondary Variables</span>
          <button className="cursor-pointer text-olive-200 border border-olive-200 w-[44px] h-[34px] rounded-[20px] bg-[#1D1D1F] hover:opacity-75 transition transform duration-500 ease-in-out">
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <button
        onClick={toggleDrawer("right", true)}
        className="cursor-pointer text-[15px] text-white border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-grey-800 rounded-[4px] font-medium px-[9px] ml-[12px] h-[40px] transition transform duration-500 ease-in-out"
      >
        Edit Variables
      </button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
};

export default DrawerBar;

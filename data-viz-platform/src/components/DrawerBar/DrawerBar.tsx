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
    <Box sx={{ width: 690 }} role="presentation">
      <div className="h-[100vh] bg-black-100 block text-white-100 border border-grey-100 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl font-semibold mb-0">
            Edit Variables
          </h2>
          <button
            onClick={toggleDrawer(anchor, false)}
            className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center justify-between">
          <SearchInput />
          <button className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] w-[129px]">
            <AutoAwesomeIcon /> Autofill
          </button>
          <button className="button-glow cursor-pointer text-lg border border-grey-100 bg-olive-600 text-olive-500 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px] w-[129px]">
            <RotateRightIcon />
          </button>
        </div>
        <div className="bg-[#161618] border border-grey-1000 rounded-[5px] p-6">
          <strong className="block text-white text-lg font-medium mb-4">
            Variable category 1
          </strong>
          <CheckboxGroup
            options={["Carbon 1", "CO₂ Distribution", "Fleet Sizing"]}
            selected={selectedCategoryA}
            setSelected={setSelectedCategoryA}
            onHover={handleHover}
          />

          <strong className="block text-white text-lg font-medium mb-4">
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
          <strong className="block text-white text-lg font-medium mb-4 text-olive-200">
            Variable category 3
          </strong>
          <CheckboxGroup
            options={["Variable 1", "Variable 2", "Variable 2"]}
            selected={selectedCategoryC}
            setSelected={setSelectedCategoryC}
            onHover={handleHover}
          />
          {/* Block with ani,ation on hover */}
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ml-[-24px] mr-[-24px] ${
              hovered
                ? "max-h-[500px] opacity-100 mb-[-24px]"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 bg-grey-900 text-sm text-gray-200 p-4 rounded-bl-[5px] rounded-br-[5px] bg-opacity-50 border-t-[1px] border-grey-1000 ">
              <p className="mb-2 font-medium">
                But what truly sets <strong>Switch</strong> apart is its
                versatility.
              </p>
              <p>
                It can be used as a scooter, a bike, or even a skateboard,
                making it suitable for people of all ages. Whether you're a
                student, a professional, or a senior citizen, Switch adapts to
                your needs and lifestyle.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-grey-900 border border-grey-1000 rounded-[5px] p-4 text-2xl text-olive-200">
          <span>Primary Variables</span>
          <button className="cursor-pointer text-olive-200 border border-olive-200 w-[44px] h-[34px] rounded-[20px] bg-[#1D1D1F] hover:opacity-75 transition transform duration-500 ease-in-out">
            <KeyboardArrowDownIcon />
          </button>
        </div>
        <div className="flex items-center justify-between bg-grey-900 border border-grey-1000 rounded-[5px] p-4 text-2xl text-olive-200">
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
        className="cursor-pointer text-lg border border-grey-100 bg-grey-700 text-grey-800 hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[4px] font-medium px-4 h-[40px]"
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

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { MenuItem } from "../../types/types";
import SidebarMenuButton from "../SidebarMenuButton/SidebarMenuButton";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Navigate } from "react-router-dom";
import DashboardContent from "../../context/DashboardContent";
import Notifications from "../../pages/Notifications";
import Settings from "../../pages/Settings";
import Cloud from "../../pages/Cloud";
import Notes from "../../pages/Notes";
import { useEffect, useState } from "react";

const menuItems: MenuItem[] = [
  { icon: <HomeIcon />, label: "Home", route: "/dashboard/home" },
  {
    icon: <NotificationsIcon />,
    label: "Notifications",
    route: "/dashboard/notifications",
  },
  { icon: <PendingActionsIcon />, label: "Notes", route: "/dashboard/notes" },
  { icon: <CloudUploadIcon />, label: "Cloud", route: "/dashboard/cloud" },
  { icon: <SettingsIcon />, label: "Settings", route: "/dashboard/settings" },
];

const SidebarMenu = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      navigate("/dashboard/home");
    }
  }, [navigate]);
  return (
    <div className="flex">
      <nav className="p-[20px]">
        <ul className="">
          <li>
            <button className="cursor-pointer text-grey-300 bg-transparent border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[10px] w-[40px] h-[40px]">
              <MenuRoundedIcon />
            </button>
          </li>
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.route;
            return (
              <li key={index} className="mb-2">
                {" "}
                <Link
                  key={index}
                  to={item.route!}
                  className={`rounded-[10px] w-[40px] h-[40px] flex items-center border justify-center transition-colors duration-200 hover:bg-grey-200 hover:border-grey-100 ${
                    isActive
                      ? "bg-grey-200 text-white border-grey-100"
                      : "bg-transparent text-grey-300 border-transparent"
                  }`}
                  title={item.label}
                >
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex-1">
        <Routes>
          <Route path="home" element={<DashboardContent />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="notes" element={<Notes />} />
          <Route path="cloud" element={<Cloud />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="/" element={<Navigate to="/dashboard/home" />} /> */}
        </Routes>
      </div>
    </div>
  );
};
export default SidebarMenu;

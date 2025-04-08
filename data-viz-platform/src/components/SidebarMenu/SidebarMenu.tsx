import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SettingsIcon from "@mui/icons-material/Settings";
import { MenuItem } from "../../types/types";
import SidebarMenuButton from "../SidebarMenuButton/SidebarMenuButton";

const menuItems: MenuItem[] = [
  { icon: <MenuRoundedIcon />, label: "Menu" },
  { icon: <HomeIcon />, label: "Home" },
  { icon: <NotificationsIcon />, label: "Notifications" },
  { icon: <PendingActionsIcon />, label: "Pending" },
  { icon: <CloudUploadIcon />, label: "Upload" },
  { icon: <SettingsIcon />, label: "Settings" },
];

const SidebarMenu = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <SidebarMenuButton
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default SidebarMenu;

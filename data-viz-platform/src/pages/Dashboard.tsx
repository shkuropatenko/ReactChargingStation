// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import HeaderMenu from "../components/HeaderMenu/HeaderMenu";

// type Anchor = "right";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   const logout = async () => {
//     await signOut(auth);
//     navigate("/");
//   };

//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer =
//     (anchor: Anchor, open: boolean) =>
//     (event: React.KeyboardEvent | React.MouseEvent) => {
//       if (
//         event.type === "keydown" &&
//         ((event as React.KeyboardEvent).key === "Tab" ||
//           (event as React.KeyboardEvent).key === "Shift")
//       ) {
//         return;
//       }

//       setState({ ...state, [anchor]: open });
//     };

//   const list = (anchor: Anchor) => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div className="p-8">
//       {/* <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
//       <button onClick={logout} className="text-yellow-500 py-2 px-4 rounded">
//         Log Out
//       </button> */}
//       <header>
//         <HeaderMenu />
//         <SidebarMenu />
//       </header>
//       <div>
//         {(["right"] as const).map((anchor) => (
//           <React.Fragment key={anchor}>
//             <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//             <Drawer
//               anchor={anchor}
//               open={state[anchor]}
//               onClose={toggleDrawer(anchor, false)}
//             >
//               {list(anchor)}
//             </Drawer>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Navigate } from "react-router-dom";

import Notifications from "./Notifications";
import Settings from "./Settings";
import DashboardContent from "../context/DashboardContent";
const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("home");
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/dashboard") {
      navigate("/dashboard/home");
    }
  }, [navigate]);

  return (
    <div className="flex">
      <nav className="w-16 h-screen bg-gray-800 p-4">
        <ul className="space-y-4">
          <li>
            <Link
              to="/dashboard/home"
              className={`block p-2 text-white rounded-full ${
                activeTab === "home" ? "bg-blue-500" : "hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("home")}
            >
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/notifications"
              className={`block p-2 text-white rounded-full ${
                activeTab === "notifications"
                  ? "bg-blue-500"
                  : "hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("notifications")}
            >
              <NotificationsIcon />
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/settings"
              className={`block p-2 text-white rounded-full ${
                activeTab === "settings" ? "bg-blue-500" : "hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              <SettingsIcon />
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-1 p-8">
        <Routes>
          <Route path="home" element={<DashboardContent />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/" element={<Navigate to="/dashboard/home" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { MenuItem } from "../../types/types";

const SidebarMenuButton: React.FC<MenuItem> = ({ icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer text-grey-300 bg-transparent border border-transparent hover:bg-grey-200 hover:text-white hover:border-grey-100 rounded-[10px] w-[40px] h-[40px]"
    >
      {icon}
    </button>
  );
};

export default SidebarMenuButton;

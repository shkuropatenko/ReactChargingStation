import { ReactNode } from "react";

// SidebarMenuButtons Interface
export interface MenuItem {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

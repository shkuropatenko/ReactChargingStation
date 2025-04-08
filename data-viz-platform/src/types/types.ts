import { ReactNode } from "react";

// SidebarMenuButtons Interface
export interface MenuItem {
  icon: React.ReactNode;
  label: string;
  route?: string;
  onClick?: () => void;
}

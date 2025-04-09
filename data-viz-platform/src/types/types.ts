import { JSX } from "react";

// SidebarMenuButtons Interface
export type MenuItem = {
  icon: JSX.Element;
  label: string;
  route?: string;
};

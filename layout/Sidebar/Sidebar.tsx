import React from "react";
import { ISidebarProps } from "./Sidebar.props";

export const Sidebar: React.FC<ISidebarProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

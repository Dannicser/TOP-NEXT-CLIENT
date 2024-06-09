import React from "react";
import { IFooterProps } from "./Footer.props";

export const Footer: React.FC<IFooterProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Footer</div>;
};

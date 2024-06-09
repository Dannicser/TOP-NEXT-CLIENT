import React from "react";
import { IHeaderProps } from "./Header.props";

export const Header: React.FC<IHeaderProps> = ({ ...props }): JSX.Element => {
  return <div {...props}>Header</div>;
};

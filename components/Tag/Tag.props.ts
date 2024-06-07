import { HTMLAttributes, ReactNode } from "react";

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "small" | "medium";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}

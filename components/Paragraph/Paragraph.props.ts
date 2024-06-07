import { HTMLAttributes, ReactNode } from "react";

export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: "small" | "medium" | "large";
}

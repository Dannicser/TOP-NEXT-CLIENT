import { HTMLAttributes } from "react";

export interface IRatingProps extends HTMLAttributes<HTMLDivElement> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
  size?: "small" | "medium" | "large";
  theme?: "primary" | "danger" | "success";
  form?: "star" | "circle";
}

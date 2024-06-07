import React from "react";

import { IParagraphProps } from "./Paragraph.props";

import cn from "classnames";

import styles from "./Paragraph.module.css";

export const Paragraph: React.FC<IParagraphProps> = ({ children, size = "medium", className, ...props }): JSX.Element => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

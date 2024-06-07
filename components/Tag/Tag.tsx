import React from "react";

import cn from "classnames";

import { ITagProps } from "./Tag.props";

import styles from "./Tag.module.css";

export const Tag: React.FC<ITagProps> = ({ children, size = "medium", href, color = "ghost", className, ...props }): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.ghost]: color === "ghost",
        [styles.green]: color === "green",
        [styles.grey]: color === "grey",
        [styles.primary]: color === "primary",
        [styles.red]: color === "red",
      })}
    >
      {href ? <a href={href}> {children}</a> : <>{children}</>}
    </div>
  );
};

import React from "react";

import { IButtonProps } from "./Button.props";

import cn from "classnames";

import ArrowIcon from "./assets/arrow.svg";

import styles from "./Button.module.css";

export const Button: React.FC<IButtonProps> = ({ appearance = "primary", arrow = "none", children, className, ...props }): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" ? (
        <span className={cn(styles.arrow, { [styles.down]: arrow === "down", [styles.right]: arrow === "right" })}>
          <ArrowIcon />
        </span>
      ) : null}
    </button>
  );
};

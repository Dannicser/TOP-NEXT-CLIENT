import React from "react";
import { IFooterProps } from "./Footer.props";

import cn from "classnames";

import styles from "./Footer.module.css";
import { format } from "date-fns";

export const Footer: React.FC<IFooterProps> = ({ className, ...props }): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a>Пользовательское соглашение</a>
      <a>Политика конфиденциальности</a>
    </footer>
  );
};

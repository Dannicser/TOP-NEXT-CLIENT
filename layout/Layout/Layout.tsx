import React, { FunctionComponent } from "react";

import { ILayoutProps } from "./Layout.props";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

import styles from "./Layout.module.css";

const Layout: React.FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};

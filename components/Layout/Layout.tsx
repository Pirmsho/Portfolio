import React from "react";
import Header from "../UI/Header";

import styles from "./Layout.module.scss";

interface ChildrenProp {
  children: React.ReactNode;
}

const Layout = (props: ChildrenProp) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Layout;

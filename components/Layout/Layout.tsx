import React from "react";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

import styles from "./Layout.module.scss";

interface ChildrenProp {
  children: React.ReactNode;
}

const Layout = (props: ChildrenProp) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;

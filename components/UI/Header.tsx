import React from "react";

import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.first_nav_div}>
          <Link href="/projects">My Projects</Link>
          <a href="#contact">Contact Me</a>
        </div>
        <div className={styles.second_nav_div}>
          <Link href="/">Davit Pirmisashvili</Link>
        </div>
        <div className={styles.third_nav_div}>
          <Link href="/about">About Me</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

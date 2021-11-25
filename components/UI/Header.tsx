import React, { useState } from "react";

import Link from "next/link";
import Image from "next/dist/client/image";
import hamburger from "../../public/Icons/hamburger.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <header className={styles.header}>
      <nav>
        {isVisible && (
          <div className={styles.first_nav_div}>
            <Link href="/projects">My Projects</Link>
            <a href="#contact">Contact Me</a>
          </div>
        )}
        <div className={styles.second_nav_div}>
          <Link href="/">Davit Pirmisashvili</Link>
          <Image
            className={styles.hamburger}
            src={hamburger}
            alt="hamburger"
            layout="fixed"
            onClick={visibilityHandler}
          />
        </div>
        {isVisible && (
          <div className={styles.third_nav_div}>
            <Link href="/about">About Me</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

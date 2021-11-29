import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/dist/client/image";
import hamburger from "../../public/Icons/hamburger.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const visibilityHandler = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    if (window.innerWidth < 850) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, []);
  return (
    <header className={styles.header}>
      <nav>
        {isVisible && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={styles.first_nav_div}
          >
            <Link href="/projects">My Projects</Link>
            <a href="#contact">Contact Me</a>
          </motion.div>
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
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={styles.third_nav_div}
          >
            <Link href="/about">About Me</Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import { motion } from "framer-motion";

import Image from "next/dist/client/image";

import styles from "./Hero.module.scss";

import github from "../../public/Icons/github.svg";
import codepen from "../../public/Icons/codepen.svg";
import mail from "../../public/Icons/mail.svg";
import whatsapp from "../../public/Icons/whatsapp.svg";

const parentVariant1 = {
  visible: {
    opacity: 1,
    x: 0,
    transition: { when: "beforeChildren", staggerChildren: 0.5 },
  },
  hidden: { opacity: 0 },
};
const childVariant1 = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0 },
};
const parentVariant2 = {
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    // y: 50,
  },
};
const childVariant2 = {
  visible: {
    opacity: 1,
    // y: 0,
  },
  hidden: {
    opacity: 0,
    // y: 50,
  },
};
const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero_text}>
        <motion.div
          variants={parentVariant1}
          animate="visible"
          initial="hidden"
          className={styles.hero_header}
        >
          <motion.h1 variants={childVariant1}>Hello There,</motion.h1>
          <motion.h3 variants={childVariant1}>
            My Name Is Davit Pirmisashvili
          </motion.h3>
          <motion.h3 variants={childVariant1}>
            I am a Software Developer, Based In Germany, Currently Focusing on
            Front-End Development.
          </motion.h3>
          <motion.p variants={childVariant1}>
            I Mainly Work With Javascript Frameworks Like React and Vue.
          </motion.p>
          <motion.a
            variants={childVariant1}
            whileHover={{ scale: 1.1 }}
            href="#technologies"
          >
            See The Technologies I Use!
          </motion.a>
        </motion.div>
      </div>
      <div className={styles.hero_buttons}>
        <motion.div
          variants={parentVariant2}
          animate="visible"
          initial="hidden"
          className={styles.soc_buttons}
        >
          <motion.a
            href="https://github.com/Pirmsho"
            rel="noreferrer"
            target="_blank"
            className={styles.soc_med}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={github} alt="github"></Image>See My Github Profile
          </motion.a>
          <motion.a
            href="https://codepen.io/your-work/"
            rel="noreferrer"
            target="_blank"
            className={styles.soc_med}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Image src={codepen} alt="codepen"></Image>See My Codepen Page
          </motion.a>
        </motion.div>
        <motion.div
          variants={parentVariant2}
          animate="visible"
          initial="hidden"
          className={styles.mini_contact}
        >
          <motion.div>
            <Image src={mail} alt="mail icon" />
            <a href="mailto:d.pirmisashvili@gmail.com">
              d.pirmisashvili@gmail.com
            </a>
          </motion.div>
          <motion.div>
            <Image src={whatsapp} alt="whatsapp icon" />
            <a href="tel:+4917657850065">+49 176 57850065</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

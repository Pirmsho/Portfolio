import React from "react";
import Image from "next/dist/client/image";
import styles from "./AboutHeader.module.scss";
import { motion } from "framer-motion";
import cs50 from "../../public/cs50.jpg";

const AboutHeader = () => {
  return (
    <div className={styles.about_header}>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={styles.about_text}
      >
        <h1>Little Bit About Me</h1>
        <p>
          I originally come from Georgia, where I studied Business
          Administration at Agrarian University of Georgia.
        </p>
        <p>
          After I discovered programming, I moved to Germany and am currently
          chasing higher education in Computer Science.
        </p>
        <p>
          My hobbies include Programming, Fitness and Listening to music. I
          enjoy learning and discovering new exciting things, and that is
          exactly how I found Web Development.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1, rotate: -720 }}
        transition={{ type: "spring", stiffness: 60 }}
        className={styles.img_div}
      >
        <Image src={cs50} alt="cs50 certificate"></Image>
      </motion.div>
    </div>
  );
};

export default AboutHeader;

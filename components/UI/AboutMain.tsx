import React, { useEffect } from "react";
import Image from "next/dist/client/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import cs50 from "../../public/cs50.jpg";
import styles from "./AboutMain.module.scss";

const imgVariant = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};
const textVariant = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
};

const AboutMain = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);
  return (
    <div className={styles.about_main}>
      <motion.div
        className={styles.img_div}
        ref={ref}
        variants={imgVariant}
        initial="hidden"
        animate={controls}
      >
        <Image src={cs50} alt="CS50 Certificate"></Image>
      </motion.div>
      <motion.div
        ref={ref}
        variants={textVariant}
        initial="hidden"
        animate={controls}
        className={styles.main_text}
      >
        <h1>How I Started Programming</h1>
        <p>
          As a new year&apos;s resolution, I decided to learn a new skill, and
          programming was the best choice, as I was pretty intrigued by this
          sphere.
        </p>
        <p>
          My friend challenged me to take Harvard&apos;s CS50 course as my first
          steps.{" "}
        </p>
        <p>
          It was pretty challenging, especially because I had nearly zero
          experience in the field. But I loved it from the first moments.
          Solving difficult challenges and learning complex principles is one of
          my favorite tasks to do, and programming certainly has no shortages of
          these things.{" "}
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMain;

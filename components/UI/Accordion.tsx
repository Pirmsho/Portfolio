import React, { useState, useEffect } from "react";
import Image from "next/dist/client/image";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/dist/client/link";

import styles from "./Accordion.module.scss";

import html from "../../public/Techs/html.svg";
import css from "../../public/Techs/css.svg";
import Js from "../../public/Techs/Js.svg";
import react from "../../public/Techs/react.svg";
import vue from "../../public/Techs/vue.svg";
import git from "../../public/Techs/git.svg";
import typescript from "../../public/Techs/typescript.svg";
import next from "../../public/Techs/next.svg";
import nuxt from "../../public/Techs/nuxt.svg";
import python from "../../public/Techs/python.svg";

import jest from "../../public/Techs/jest.svg";
import nest from "../../public/Techs/nest.svg";
import angular from "../../public/Techs/angular.svg";
import svelte from "../../public/Techs/svelte.svg";
import go from "../../public/Techs/go.svg";

import right from "../../public/Icons/right-arr.svg";
import down from "../../public/Icons/down-arr.svg";

const accordionVariant = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const parentTechnologiesVariant = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const childTechnologiesVariant = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
};

const Accordion = () => {
  const acc_controls = useAnimation();
  const [ref, inView] = useInView();
  const [firstAccItemOpen, setFirstAccItemOpen] = useState(true);
  const [secondAccItemOpen, setSecondAccItemOpen] = useState(false);
  const [ThirdAccItemOpen, setThirdAccItemOpen] = useState(false);

  useEffect(() => {
    if (inView) {
      acc_controls.start("visible");
    }
  }, [acc_controls, inView]);

  const firstAccItemHandler = () => {
    setFirstAccItemOpen(!firstAccItemOpen);
  };
  const secondAccItemHandler = () => {
    setSecondAccItemOpen(!secondAccItemOpen);
  };
  const thirdAccItemHandler = () => {
    setThirdAccItemOpen(!ThirdAccItemOpen);
  };
  return (
    <section className={styles.acc_section}>
      <h1>Technologies I...</h1>
      <motion.div
        variants={accordionVariant}
        initial="hidden"
        animate={acc_controls}
        ref={ref}
        id="technologies"
        className={styles.accordion_div}
      >
        <div className={styles.acc_item}>
          <h2 onClick={firstAccItemHandler}>
            Feel More Comfortable With:{" "}
            {firstAccItemOpen ? (
              <Image src={down} alt="arrow" />
            ) : (
              <Image src={right} alt="arrows" />
            )}
          </h2>
          {firstAccItemOpen && (
            <motion.div
              variants={parentTechnologiesVariant}
              animate="visible"
              initial="hidden"
            >
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={html} alt="HTML" />
                <p>HTML</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={css} alt="Css" />
                <p>CSS</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={Js} alt="Js" />
                <p>JavaScript</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={react} alt="react" />
                <p>React</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={vue} alt="vue" />
                <p>Vue</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={git} alt="git" />
                <p>Git</p>
              </motion.div>
            </motion.div>
          )}
          <p className={styles.description}>
            Technologies I Use Everyday For My Projects
          </p>
        </div>
        <div className={styles.acc_item}>
          <h2 onClick={secondAccItemHandler}>
            Feel Less Comfortable With:{" "}
            {secondAccItemOpen ? (
              <Image src={down} alt="arrow" />
            ) : (
              <Image src={right} alt="arrows" />
            )}
          </h2>
          {secondAccItemOpen && (
            <motion.div
              variants={parentTechnologiesVariant}
              animate="visible"
              initial="hidden"
            >
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={next} alt="next" />
                <p>Next.js</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={nuxt} alt="nuxt" />
                <p>Nuxt.js</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={typescript} alt="typescript" />
                <p>TypeScript</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={python} alt="python" />
                <p>Python</p>
              </motion.div>
            </motion.div>
          )}
          <p className={styles.description}>
            Technologies I Recently Started Using / Havent Used In A While
          </p>
        </div>
        <div className={styles.acc_item}>
          <h2 onClick={thirdAccItemHandler}>
            Plan to Learn In The Future:{" "}
            {ThirdAccItemOpen ? (
              <Image src={down} alt="arrow" />
            ) : (
              <Image src={right} alt="arrows" />
            )}
          </h2>
          {ThirdAccItemOpen && (
            <motion.div
              variants={parentTechnologiesVariant}
              animate="visible"
              initial="hidden"
            >
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={jest} alt="jest" />
                <p>Jest</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={nest} alt="nest" />
                <p>Nest.js</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={angular} alt="angular" />
                <p>Angular</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={svelte} alt="svelte" />
                <p>Svelte</p>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                  transition: { duration: 0.05, ease: "easeIn" },
                }}
                whileTap={{ scale: 0.9 }}
                variants={childTechnologiesVariant}
              >
                <Image src={go} alt="go" />
                <p>GoLang</p>
              </motion.div>
            </motion.div>
          )}
          <p className={styles.description}>
            Technologies I am Planning To Learn In Near Future
          </p>
        </div>
        <div className={styles.action_buttons_div}>
          <Link href="/projects">Explore My Projects</Link>
          <Link href="/about">Learn More About Me</Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Accordion;

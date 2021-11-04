import React from "react";
import Image from "next/dist/client/image";

import styles from "./Accordion.module.scss";

import html from "../../public/Techs/html.svg";
import css from "../../public/Techs/css.svg";
import Js from "../../public/Techs/Js.svg";
import react from "../../public/Techs/react.svg";
import vue from "../../public/Techs/vue.svg";
import git from "../../public/Techs/git.svg";

const Accordion = () => {
  return (
    <section className={styles.acc_section}>
      <h1>Technologies I...</h1>
      <div id="technologies" className={styles.accordion_div}>
        <div className={styles.acc_item}>
          <h2>Feel More Comfortable With:</h2>
          <div>
            <Image src={html} alt="HTML" />
            <Image src={css} alt="Css" />
            <Image src={Js} alt="Js" />
            <Image src={react} alt="react" />
            <Image src={vue} alt="vue" />
            <Image src={git} alt="git" />
          </div>
        </div>
        <div className={styles.acc_item}>
          <h2>Feel Less Comfortable With:</h2>
          <div></div>
        </div>
        <div className={styles.acc_item}>
          <h2>Plan to Learn In The Future:</h2>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

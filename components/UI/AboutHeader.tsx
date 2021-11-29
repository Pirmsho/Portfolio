import React from "react";
import Image from "next/dist/client/image";
import styles from "./AboutHeader.module.scss";

const AboutHeader = () => {
  return (
    <div className={styles.about_header}>
      <div className={styles.about_text}></div>
      <div className={styles.img_div}></div>
    </div>
  );
};

export default AboutHeader;

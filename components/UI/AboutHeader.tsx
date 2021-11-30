import React from "react";
import Image from "next/dist/client/image";
import styles from "./AboutHeader.module.scss";

import cs50 from "../../public/cs50.jpg";

const AboutHeader = () => {
  return (
    <div className={styles.about_header}>
      <div className={styles.about_text}>
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
      </div>
      <div className={styles.img_div}>
        <Image src={cs50} alt="cs50 certificate"></Image>
      </div>
    </div>
  );
};

export default AboutHeader;

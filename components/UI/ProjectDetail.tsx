import React from "react";
import Image from "next/dist/client/image";
import styles from "./ProjectDetail.module.scss";

import { motion } from "framer-motion";

const ProjectDetail = ({ project }: any) => {
  return (
    <motion.section
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className={styles.detail_section}
    >
      <div className={styles.detail_header}>
        <h1>{project.name}</h1>
        <a href={project.github_link} rel="noreferrer" target="_blank">
          View Source Code
        </a>
        <a href={project.action_link} rel="noreferrer" target="_blank">
          See The App In Action
        </a>
      </div>
      <div className={styles.detail_body}>
        <div className={styles.img_div}>
          <Image
            src={project.image}
            layout="fill"
            objectFit="contain"
            alt="project"
            quality={100}
          />
        </div>
        <div className={styles.text_div}>
          <h2>
            Built With: <span>{project.built_with}</span>
          </h2>
          <h3>{project.description_sm}</h3>
        </div>
      </div>
      <p>{project.description_lg}</p>
    </motion.section>
  );
};

export default ProjectDetail;

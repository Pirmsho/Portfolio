import React from "react";

import styles from "./ProjectDetail.module.scss";

const ProjectDetail = ({ project }: any) => {
  return (
    <section className={styles.detail_section}>
      <div className={styles.detail_header}>
        <h1>{project.name}</h1>
        <a href={project.github_link} rel="noreferrer" target="_blank">
          View Source Code
        </a>
        <a href={project.action_link} rel="noreferrer" target="_blank">
          See The App In Action
        </a>
      </div>
    </section>
  );
};

export default ProjectDetail;

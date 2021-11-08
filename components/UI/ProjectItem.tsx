import React from "react";
import Image from "next/dist/client/image";

import styles from "./ProjectItem.module.css";

const ProjectItem = ({ project }: any) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <Image src={project.image} alt="project" width={300} height={300}></Image>
      {console.log(project.image)}
    </div>
  );
};

export default ProjectItem;

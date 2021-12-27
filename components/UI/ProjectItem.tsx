import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'

import { motion } from 'framer-motion'

import styles from './ProjectItem.module.scss'

const ProjectItem = ({ project }: any) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      className={styles.project_div}
    >
      <Head>
        <title>My Projects</title>
        <meta name="Portfolio Projects" content="Projects" />
      </Head>
      <Link href={`/projects/${project.id}`}>
        <div className={styles.image_div}>
          <Image
            src={project.image}
            layout="responsive"
            width={450}
            height={400}
            objectFit="cover"
            quality={100}
            alt="project"
            priority
          />
        </div>
      </Link>
      <div className={styles.project_info}>
        <Link href={`/projects/${project.id}`}>
          <h1>{project.name}</h1>
        </Link>
        <div>
          <a href={project.githubLink} rel="noreferrer" target="_blank">
            View Source Code
          </a>
          <a href={project.actionLink} rel="noreferrer" target="_blank">
            See The App In Action
          </a>
        </div>
        <p>
          Built With: <span>{project.builtWith}</span>
        </p>
        <p>{project.smallDescription}</p>
      </div>
    </motion.div>
  )
}

export default ProjectItem

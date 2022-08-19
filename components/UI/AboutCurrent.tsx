import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from './AboutCurrent.module.scss'

const parentVariant = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}
const childVariant = {
  hidden: {
    x: 600,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}

const AboutCurrent = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])
  return (
    <motion.div
      ref={ref}
      variants={parentVariant}
      initial="hidden"
      animate={controls}
      className={styles.about_current}
    >
      <motion.h1 variants={childVariant}>Current Situation</motion.h1>
      <motion.p variants={childVariant}>
        Slowly, what started out as a hobby, turned into passion. I made steady
        progress and stayed highly motivated. I chose the Web Development route
        and decided to become a full-stack developer.
      </motion.p>
      <motion.p variants={childVariant}>
        My plan is to improve as a frontend developer, as I feel quite confident
        in my skills in this area, and learn backend infrastructure on the side,
        to transition to full-stack development.
      </motion.p>
      <motion.p variants={childVariant}>
        My focus is on writing functional, clean code and trying to be a
        programmer my linter thinks I am. I do believe that I have a bright
        future in this industry!
      </motion.p>
    </motion.div>
  )
}

export default AboutCurrent

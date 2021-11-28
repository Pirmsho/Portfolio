import React, { SyntheticEvent, useState, useEffect } from "react";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import check from "../../public/Icons/check_green.svg";

import styles from "./Footer.module.scss";

const formVariant = {
  hidden: {
    scale: 0.5,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const Footer = () => {
  const formControl = useAnimation();
  const [ref, inView] = useInView();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (inView) {
      formControl.start("visible");
    }
  }, [formControl, inView]);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    let data = {
      name,
      email,
      message,
    };

    fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("response received");
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <footer className={styles.footer}>
      {!submitted && (
        <motion.form
          variants={formVariant}
          initial="hidden"
          animate={formControl}
          ref={ref}
          className={styles.contact_form}
          id="contact"
          onSubmit={handleSubmit}
        >
          <h3>Want To Hire Me / Have Any Suggestions?</h3>
          <p>Simply Fill In The Form to Send Me An E-mail!</p>
          <div className={styles.input_group}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              cols={50}
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <button>Submit</button>
        </motion.form>
      )}
      {submitted && (
        <motion.div
          className={styles.submitted_div}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <h1>
            <Image src={check} alt="check" />
            Your Message Has Been Received!
          </h1>
          <p>I Will Get Back To You Shortly!</p>
        </motion.div>
      )}
      <div className={styles.dev_footer}>
        <h2>&copy; Davit Pirmisashvili - 2021</h2>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/projects">My Projects</Link>
          <Link href="/about">About Me</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

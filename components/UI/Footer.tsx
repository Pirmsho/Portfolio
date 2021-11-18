import React, { useState } from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <footer className={styles.footer}>
      <form className={styles.contact_form} id="contact">
        <h3>Want To Hire Me / Have Any Suggestions?</h3>
        <p>Simply Fill In The Form to Send Me An E-mail!</p>
        <div className={styles.input_group}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" />
          <label htmlFor="message">Your Message</label>
          <textarea name="message" rows={4} cols={50} />
        </div>
        <button>Submit</button>
      </form>
      <div></div>
    </footer>
  );
};

export default Footer;

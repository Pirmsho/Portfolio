import React, { SyntheticEvent, useState } from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log("sending");

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
        console.log("success");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <footer className={styles.footer}>
      <form
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
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            rows={4}
            cols={50}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button>Submit</button>
      </form>
      <div></div>
    </footer>
  );
};

export default Footer;

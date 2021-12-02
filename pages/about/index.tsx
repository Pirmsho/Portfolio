import React from "react";
import AboutCurrent from "../../components/UI/AboutCurrent";
import AboutHeader from "../../components/UI/AboutHeader";
import AboutMain from "../../components/UI/AboutMain";

const About = () => {
  return (
    <section>
      <AboutHeader />
      <AboutMain />
      <AboutCurrent />
    </section>
  );
};

export default About;

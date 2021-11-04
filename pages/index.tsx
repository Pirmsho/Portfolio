import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Accordion from "../components/UI/Accordion";
import Hero from "../components/UI/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Davit Pirmisashvili</title>
        <meta name="Portfolio Site" content="Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Accordion />
    </>
  );
};

export default Home;

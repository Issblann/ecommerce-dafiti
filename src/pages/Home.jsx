import React from "react";
import Hero from "../components/Hero/Hero";
import Promotion1 from "../components/Promotion1/Promotion1";
import Promotion2 from "../components/Promotion2/Promotion2";
import Promotion3 from "../components/Promotion3/Promotion3";
import CallToAction from "../components/CallToAction/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Promotion1 />
      <Promotion2 />
      <Promotion3 />
      <CallToAction />
    </>
  );
};

export default Home;

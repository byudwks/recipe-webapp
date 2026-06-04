import React from "react";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import About from "../components/About";
import CtaSection from "../components/CtaSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeatureSection />
      <About />
      <CtaSection />
    </div>
  );
};

export default HomePage;

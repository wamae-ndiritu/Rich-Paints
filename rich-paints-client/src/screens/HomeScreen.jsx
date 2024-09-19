import React from "react";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import TitleBar from "../components/TitleBar";
import AboutUs from "../components/about/AboutUs";
import Projects from "../components/projects/Projects";
import Partners from "../components/partners/Partners";
import CSR from "../components/projects/CSR";
import PaintingTips from "../components/paintingTips/PaintingTips";
import PaintsSection from "../components/PaintsSection";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <PaintsSection />
      <Services />
      <AboutUs />
      <Projects />
      <CSR />
      <PaintingTips />
      <Partners />
    </div>
  );
};

export default HomeScreen;

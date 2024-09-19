import React from "react";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import AboutUs from "../components/about/AboutUs";
import Partners from "../components/partners/Partners";
import CSR from "../components/projects/CSR";
import PaintingTips from "../components/paintingTips/PaintingTips";
import PaintsSection from "../components/PaintsSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import ContactUs from "../components/ContactUs";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <PaintsSection />
      <Services />
      <AboutUs />
      <ProjectsSection />
      <CSR />
      <PaintingTips />
      <ContactUs />
      <Partners />
    </div>
  );
};

export default HomeScreen;

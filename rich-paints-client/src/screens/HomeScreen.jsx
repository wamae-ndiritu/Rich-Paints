import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Services from "../components/services/Services";
import TitleBar from "../components/TitleBar";
import AboutUs from "../components/about/AboutUs";
import Projects from "../components/projects/Projects";
import Partners from "../components/partners/Partners";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Products />
      <TitleBar className="mb-3">Our Services</TitleBar>
      <Services />
      <AboutUs />
      <Projects />
      <Partners />
    </div>
  );
};

export default HomeScreen;

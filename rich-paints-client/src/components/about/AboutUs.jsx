import React from "react";
import TitleBar from "../TitleBar";
import "./about.css";

const AboutUs = () => {
  return (
    <div className="container my-3">
      <TitleBar>About Us</TitleBar>
      <div className="about-wrapper">
        <div className="about-left">
          <img src="/Images/products/about-us.png" alt="..." />
        </div>
        <div className="about-right">
          <h6 className="h6 text-center sub-title">Rich Paints Limited</h6>
          <p className="about-text">
            Rich paints is a privately held company and duly registered under
            the Company Laws of Kenya. We are a team of; young, energetic,
            vibrant and free thinking individuals with only one objective:
            Making Rich paints the number one paint company in Kenya.
          </p>
          <h6 className="h6 text-center sub-title">Our Mission</h6>
          <p className="about-text">
            We are not just a paint manufacturing company; we sell beauty and
            happiness. Our aim is to deliver top quality painting solutions that
            exceed our client's expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

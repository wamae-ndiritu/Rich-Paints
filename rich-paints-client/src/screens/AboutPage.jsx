import React from "react";
import TitleBar from "../components/TitleBar";

const AboutPage = () => {
  return (
    <div className="services-cont">
      <TitleBar>About Us</TitleBar>
      <div className="service-banner my-3">
        <img src="/Images/products/about-us.PNG" alt="..." />
      </div>
      <TitleBar>Who we are</TitleBar>
      <div className="about-us">
        <p>
          Rich paints is a privately held company and duly registered under the
          Company Laws of Kenya. We are a team of; young, energetic, vibrant and
          free thinking individuals with only one objective: Making Rich paints
          the number one paint company in Kenya.
        </p>
        <p>
          We are not just a paint manufacturing company; we sell beauty and
          happiness. Our aim is to deliver top quality painting solutions that
          exceed our client's expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

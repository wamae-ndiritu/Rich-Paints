import React from "react";
import { Link } from "react-router-dom";
import "./painting.css";
import EastIcon from "@mui/icons-material/East";

const PaintingTips = () => {
  return (
    <div className="cont">
      <div className="tips-banner">
        <div className="banner-info">
          <h2>Discover Pro Painting Tips and Techniques!</h2>
          <p>
            Uncover the secrets behind creating captivating compositions,
            mastering brushwork, exploring color harmony, and adding depth and
            texture to your artwork. Our expert guidance will empower you to
            refine your craft, unleash your creativity, and achieve remarkable
            results.
          </p>
          <Link to="/painting-tips" className="tips-btn">
            Explore
            <div className="more-icon">
              <EastIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaintingTips;

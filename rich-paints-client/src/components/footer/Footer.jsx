import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";
const Footer = () => {
  return (
    <div className="cont mt-3">
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-about">
              <div className="about-head">
                <div className="footer-logo">
                  <img src="/logo192.png" alt="logo" />
                </div>
                <h6 className="h6">About Us</h6>
              </div>
              <div className="footer-text">
                <p>
                  Rich paints is a privately held company and duly registered
                  under the Company Laws of Kenya. We are a team of; young,
                  energetic, vibrant and free thinking individuals with only one
                  objective: Making Rich paints the number one paint company in
                  Kenya.
                </p>
              </div>
            </div>
            <div className="footer-links">
              <h6 className="h6">Quick Links</h6>
              <ul>
                <li>Products</li>
                <li>Projects</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Painting Tips</li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <h6 className="h6">Connect With Us</h6>
            <div className="mb-3 footer-input">
              <input
                className=""
                type="text"
                placeholder="youremail@example.com"
              />
              <button className="btn-footer">Subscribe</button>
            </div>
            <div className="icon-cont">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <p className="icon-text">richpaintskenya@gmail.com</p>
            </div>
            <div className="icon-cont">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <p className="icon-text">Nairobi, Kenya</p>
            </div>
            <div className="social-cont">
              <div className="social-icon">
                <FacebookIcon />
              </div>
              <div className="social-icon">
                <TwitterIcon />
              </div>
              <div className="social-icon">
                <LinkedInIcon />
              </div>
              <div className="social-icon">
                <WhatsAppIcon />
              </div>
            </div>
          </div>
          <hr />
          <p className="copy-right">
            &copy; Rich Paints Ltd | All Rights Reserved 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

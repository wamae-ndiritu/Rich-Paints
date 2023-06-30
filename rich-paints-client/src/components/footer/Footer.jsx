import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";
const Footer = () => {
  return (
    <div className="cont mt-5">
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-logo">
              <img src="/new_logo.PNG" alt="logo" />
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
            <div className="footer-links"></div>
          </div>
          <div className="footer-center">
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contacts">Contact Us</Link>
              </li>
              <li>
                <Link to="/">Painting Tips</Link>
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <div className="mb-3 footer-input">
              <input
                className=""
                type="text"
                placeholder="youremail@example.com"
              />
              <button className="btn-footer">Subscribe to Tips</button>
            </div>
            <div className="icon-cont">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
              <p className="icon-text">richpaintskenya@gmail.com</p>
            </div>
            <div className="icon-cont">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <p className="icon-text">Nairobi, Kenya</p>
            </div>
            <div className="social-cont">
              <a
                href="https://www.facebook.com/richpaintskenya"
                rel="noreferrer"
                target="_blank"
                className="social-icon"
              >
                <FacebookIcon style={{ color: "blue" }} />
              </a>
              <a
                href="https://twitter.com/richpaintskenya"
                rel="noreferrer"
                target="_blank"
                className="social-icon"
              >
                <TwitterIcon style={{ color: "blue" }} />
              </a>
              {/* <div className="social-icon">
                <LinkedInIcon style={{ color: "darkblue" }} />
              </div>
              <div className="social-icon">
                <WhatsAppIcon style={{ color: "green" }} />
              </div> */}
            </div>
          </div>
        </div>
        <hr />
        <p className="copy-right">
          &copy; Rich Paints Ltd | All Rights Reserved 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;

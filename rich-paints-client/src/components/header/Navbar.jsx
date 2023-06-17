import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="cont">
      <div className="header">
        <div className="header-left">
          <Link to="/">
            <img src="/logo512.png" alt="" className="logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="header-menu" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span>
          </div>
          <div className={`header-items ${menuVisible ? "show" : ""}`}>
            <div className="header-item">
              <Link to="/" className="h5">
                Home
              </Link>
            </div>
            <div className="header-item">
              <Link to="/about" className="h5">
                About Us
              </Link>
            </div>
            <div className="header-item">
              <Link to="/projects" className="h5">
                Projects
              </Link>
            </div>
            <div className="header-item">
              <Link to="/services" className="h5">
                Our Services
              </Link>
            </div>
            <div className="header-item">
              <Link to="/contacts" className="h5">
                Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

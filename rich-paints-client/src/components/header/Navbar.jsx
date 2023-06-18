import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    const navbar = document.getElementById("navbar");
    setMenuVisible(!menuVisible);
    if (menuVisible) {
      navbar.classList.remove("header-items");
      navbar.classList.add("mobile-header");
    } else {
      navbar.classList.remove("mobile-header");
      navbar.classList.add("header-items");
    }
  };

  window.addEventListener("scroll", function () {
    const activeHeader = document.querySelector("#header");
    activeHeader?.classList.toggle("active-header", window.scrollY > 10);
  });

  return (
    <div className="cont">
      <div className="header" id="header">
        <div className="header-left">
          <Link to="/">
            <img src="/logo512.png" alt="" className="logo" />
          </Link>
        </div>
        <div className="header-right">
          <div className="header-menu" onClick={toggleMenu}>
            {menuVisible ? <MenuIcon /> : <CloseIcon />}
            {/* <span className="menu-icon">&#9776;</span> */}
          </div>
          <div className="header-items" id="navbar">
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

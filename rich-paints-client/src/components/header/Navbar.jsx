import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navs } from "./data";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  window.addEventListener("scroll", function () {
    const activeHeaders = document.querySelectorAll(".header");
    activeHeaders.forEach((activeHeader) => {
      activeHeader?.classList.toggle("active-header", window.scrollY > 200);
    });
  });

  useEffect(() => {
    setMenuVisible(false);
  }, [currentPath]);

  return (
    <div className="cont mb-3">
      <div className="mobile-header">
        <div className="header-row header">
          <div className="header-right">
            <div className="header-center">
              <div className="header-list">
                <div className="header-items" id="navbar">
                  {navs.slice(0, 4).map((nav) => {
                    const { _id, title, url } = nav;
                    return (
                      <div className="header-item" key={_id}>
                        <Link
                          to={url}
                          className={`h5 ${
                            url === currentPath ? "active-nav" : ""
                          }`}
                        >
                          {title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Link to="/">
            <img src="/new_logo.PNG" alt="" className="mobile-logo" />
          </Link>
          <div className="header-menu" onClick={toggleMenu}>
            {menuVisible ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div className="header-right">
            <div className="header-center">
              <div className="header-list">
                <div className="header-items" id="navbar">
                  <div className="header-items" id="navbar">
                    {navs.slice(4, 8).map((nav) => {
                      const { _id, title, url } = nav;
                      return (
                        <div className="header-item" key={_id}>
                          <Link
                            to={url}
                            className={`h5 ${
                              url === currentPath ? "active-nav" : ""
                            }`}
                          >
                            {title}
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`block-header header ${menuVisible ? "visible" : ""}`}>
          <div className="header-block">
            {navs.map((nav) => {
              const { _id, title, url } = nav;
              return (
                <div className="header-item" key={_id}>
                  <Link
                    to={url}
                    className={`h5 ${url === currentPath ? "active-nav" : ""}`}
                  >
                    {title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

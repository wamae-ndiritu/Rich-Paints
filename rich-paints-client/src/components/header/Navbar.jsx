import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TopHeader from "./TopHeader";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/Close";
import "./header.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMenuVisible(false);
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleScrollLinkClick = (path, hash) => {
    if (path === location.pathname) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path + hash);
    }
    toggleMenu();
  };

  const getLinkClasses = (path, hash) => {
    return `hover:text-red-500 ${
      location.pathname + location.hash === path + hash
        ? "text-red-500 font-bold"
        : "text-white"
    }`;
  };

  return (
    <header className='bg-gray-800 text-white mb-12 border-b border-blue-500'>
      <div className='grid grid-cols-1 md:grid-cols-12'>
        {/* Left Side: Logo */}
        <div className='col-span-1 md:col-span-2 flex items-center bg-white'>
          <Link to='/'>
            <img src='/new_logo.PNG' alt='logo' className='h-18 md:h-32' />
          </Link>
        </div>

        {/* Right Side: TopBar and Navigation */}
        <div className='col-span-1 md:col-span-10 bg-header flex flex-col md:h-32'>
          <TopHeader />

          <div className='w-full md:flex-grow md:px-12 flex justify-between items-center'>
            <nav className='hidden md:flex space-x-8'>
              <a
                href='/#about-us'
                className={getLinkClasses("/", "#about-us")}
                onClick={() => handleScrollLinkClick("/", "#about-us")}
              >
                About Us
              </a>
              <Link
                to='/our-paints'
                className={getLinkClasses("/our-paints", "")}
                onClick={() => handleScrollLinkClick("/our-paints", "")}
              >
                Paints
              </Link>
              <a
                href='/#our-services'
                className={getLinkClasses("/", "#our-services")}
                onClick={() => handleScrollLinkClick("/", "#our-services")}
              >
                Our Services
              </a>
              <Link
                to='/our-projects'
                className={getLinkClasses("/our-projects", "")}
                onClick={() => handleScrollLinkClick("/our-projects", "")}
              >
                Projects
              </Link>
              <Link
                to='/interior-design'
                className={getLinkClasses("/interior-design", "")}
                onClick={() => handleScrollLinkClick("/interior-design", "")}
              >
                Interior Design
              </Link>
              <Link
                to='/exterior-design'
                className={getLinkClasses("/exterior-design", "")}
                onClick={() => handleScrollLinkClick("/exterior-design", "")}
              >
                Exterior Design
              </Link>
              <Link
                to='/painting-tips'
                className={getLinkClasses("/painting-tips", "")}
                onClick={() => handleScrollLinkClick("/painting-tips", "")}
              >
                Painting Tips
              </Link>
              <a
                href='/#contact-us'
                className={getLinkClasses("/", "#contact-us")}
                onClick={() => handleScrollLinkClick("/", "#contact-us")}
              >
                Contact Us
              </a>
            </nav>

            {/* Hamburger Menu for mobile view */}
            <div className='w-full md:hidden' onClick={toggleMenu}>
              {menuVisible ? (
                <CloseIcon />
              ) : (
                <div className='flex justify-between px-4 py-2'>
                  <div className='flex space-x-4'>
                    <a
                      href='https://www.facebook.com/profile.php?id=61555636222875'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FacebookIcon className='hover:text-blue-500' />
                    </a>
                    <a
                      href='https://x.com/PaintsRich49354'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <XIcon className='hover:text-blue-500' />
                    </a>
                    <a
                      href='https://www.instagram.com/richpaintskenya/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <InstagramIcon className='hover:text-pink-500' />
                    </a>
                  </div>
                  <MenuIcon />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && menuVisible && (
        <nav className='bg-header text-white flex flex-col space-y-4 py-4 px-6 md:hidden'>
          <a
            href='/#about-us'
            className={getLinkClasses("/", "#about-us")}
            onClick={() => handleScrollLinkClick("/", "#about-us")}
          >
            About Us
          </a>
          <Link
            to='/our-paints'
            className={getLinkClasses("/our-paints", "")}
            onClick={() => handleScrollLinkClick("/our-paints", "")}
          >
            Paints
          </Link>
          <a
            href='/#our-services'
            className={getLinkClasses("/", "#our-services")}
            onClick={() => handleScrollLinkClick("/", "#our-services")}
          >
            Our Services
          </a>
          <Link
            to='/our-projects'
            className={getLinkClasses("/our-projects", "")}
            onClick={() => handleScrollLinkClick("/our-projects", "")}
          >
            Projects
          </Link>
          <Link
            to='/interior-design'
            className={getLinkClasses("/interior-design", "")}
            onClick={() => handleScrollLinkClick("/interior-design", "")}
          >
            Interior Design
          </Link>
          <Link
            to='/exterior-design'
            className={getLinkClasses("/exterior-design", "")}
            onClick={() => handleScrollLinkClick("/exterior-design", "")}
          >
            Exterior Design
          </Link>
          <Link
            to='/painting-tips'
            className={getLinkClasses("/painting-tips", "")}
            onClick={() => handleScrollLinkClick("/painting-tips", "")}
          >
            Painting Tips
          </Link>
          <a
            href='/#contact-us'
            className={getLinkClasses("/", "#contact-us")}
            onClick={() => handleScrollLinkClick("/", "#contact-us")}
          >
            Contact Us
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  // Toggle Menu Visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Handle resizing to switch between mobile and desktop views
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hide menu when route changes or on initial load
  useEffect(() => {
    setMenuVisible(false);
  }, []);

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
          {/* Topbar (1/3 of the height) */}
          <div className=''>
            <TopHeader />
          </div>

          {/* Navigation Links (2/3 of the height) */}
          <div className='w-full md:flex-grow md:px-12 flex justify-between items-center'>
            {/* Left side: Links */}
            <nav className='hidden md:flex space-x-8'>
              <a href='/#explore-paints' className='hover:text-white'>
                Paints
              </a>
              <a href='/#our-services' className='hover:text-white'>
                Our Services
              </a>
              <a href='/#our-projects' className='hover:text-white'>
                Projects
              </a>
              <Link to='/interior-design' className='hover:text-white'>
                Interior Design
              </Link>
              <Link to='/painting-tips' className='hover:text-white'>
                Painting Tips
              </Link>
              <a href='/#about-us' className='hover:text-white'>
                About Us
              </a>
              <a href='/#contact-us' className='hover:text-white'>
                Contacts
              </a>
            </nav>

            {/* Right side: Social Icons */}
            <div className='hidden md:flex space-x-4'>
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
            href='/#explore-paints'
            className='hover:text-red-500'
            onClick={toggleMenu}
          >
            Paints
          </a>
          <a
            href='/#our-services'
            className='hover:text-red-500'
            onClick={toggleMenu}
          >
            Our Services
          </a>
          <a
            href='/#our-projects'
            className='hover:text-red-500'
            onClick={toggleMenu}
          >
            Projects
          </a>
          <Link
            to='/painting-tips'
            className='hover:text-red-500'
            onClick={toggleMenu}
          >
            Painting Tips
          </Link>
          <a
            href='/#about-us'
            className='hover:text-red-500'
            onClick={toggleMenu}
          >
            About Us
          </a>
          <a
            href='/#contact-us'
            className='hover:text-red-500'
            onClick={toggleMenu}
          >
            Contacts
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import XIcon from "@mui/icons-material/Close";

const Footer = ({ handleScrollLinkClick }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll event listener to show/hide the scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className='bg-gray-800 text-white py-10 relative'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Section */}
          <div>
            <div className='mb-4'>
              <img src='/new_logo.PNG' alt='logo' className='h-12' />
            </div>
            <p className='text-gray-400'>
              Rich Paints is a privately held company and duly registered under
              the Company Laws of Kenya. We are a team of young, energetic,
              vibrant, and free-thinking individuals with one goal: Making Rich
              Paints the number one paint company in Kenya.
            </p>
          </div>

          {/* Center Section with Links */}
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/#about-us'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/", "#about-us")}
                >
                  About Us
                </a>
              </li>
              <li>
                <Link
                  to='/our-paints'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/our-paints", "")}
                >
                  Paints
                </Link>
              </li>
              <li>
                <a
                  href='/#our-services'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/", "#our-services")}
                >
                  Our Services
                </a>
              </li>
              <li>
                <Link
                  to='/our-projects'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/our-projects", "")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/interior-design'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/interior-design", "")}
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  to='/exterior-design'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/exterior-design", "")}
                >
                  Exterior Design
                </Link>
              </li>
              <li>
                <Link
                  to='/painting-tips'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/painting-tips", "")}
                >
                  Painting Tips
                </Link>
              </li>
              <li>
                <a
                  href='/#contact-us'
                  className='text-gray-300 hover:text-white transition'
                  onClick={() => handleScrollLinkClick("/", "#contact-us")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className='flex flex-col items-center md:items-start'>
            <h4 className='text-lg font-semibold mb-4'>Stay Connected</h4>
            <div className='flex mb-4 space-x-3'>
              <a
                href='https://www.facebook.com/profile.php?id=61555636222875'
                rel='noreferrer'
                target='_blank'
                className='text-blue-500 hover:text-blue-700'
              >
                <FacebookIcon />
              </a>
              <a
                href='https://x.com/PaintsRich49354'
                rel='noreferrer'
                target='_blank'
                className='text-blue-400 hover:text-blue-600'
              >
                <XIcon style={{ fontSize: 24 }} />
              </a>
              <a
                href='https://www.instagram.com/richpaintskenya/'
                rel='noreferrer'
                target='_blank'
                className='text-pink-600 hover:text-pink-800'
              >
                <InstagramIcon />
              </a>
            </div>
            <div className='mb-3 w-full'>
              <input
                type='email'
                placeholder='youremail@example.com'
                className='w-full px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <button className='mt-3 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition'>
                Subscribe to Tips
              </button>
            </div>
            <div className='flex items-center mb-2'>
              <i className='fa fa-envelope-o mr-2 text-blue-400'></i>
              <p className='text-gray-300'>richpaintskenya@gmail.com</p>
            </div>
            <div className='flex items-center'>
              <i className='fa fa-map-marker mr-2 text-blue-400'></i>
              <p className='text-gray-300'>Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='mt-8 border-t border-gray-700 pt-4 text-center text-gray-500'>
          <p>
            &copy; 2024 Rich Paints Ltd | All Rights Reserved | Rich Paints
            Trademark <span className='text-xs'>™</span>
          </p>
        </div>

        {/* Scroll-to-Top Button */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110'
          >
            <ArrowUpwardIcon />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;

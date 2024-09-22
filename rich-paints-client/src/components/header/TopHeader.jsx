import React from "react";
import "./header.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/Close";  

const TopHeader = () => {
  return (
    <div className='cont'>
      <div className='top-header'>
        <div className='top-left'>
          {/* Right side: Social Icons */}
          <div className='hidden md:flex space-x-4 mt-[-5px]'>
            <a
              href='https://www.facebook.com/profile.php?id=61555636222875'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FacebookIcon className='hover:text-blue-500' style={{fontSize: "20px"}}  />
            </a>
            <a
              href='https://x.com/PaintsRich49354'
              target='_blank'
              rel='noopener noreferrer'
            >
              <XIcon className='hover:text-blue-500' style={{fontSize: "20px"}} />
            </a>
            <a
              href='https://www.instagram.com/richpaintskenya/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon className='hover:text-pink-500' style={{fontSize: "20px"}} />
            </a>
          </div>
          <div className='left-item'>
            <MailOutlineIcon className='top-icon' />
            <h4 className='h4'>richpaintskenya@gmail.com</h4>
          </div>
          <div className='left-item'>
            <LocationOnIcon className='top-icon' />
            <h4 className='h4'> Nairobi Kenya</h4>
          </div>
        </div>
        <div className='top-right top-hide'>
          <button className='top-btn'>Call Us: +254 20 8097069</button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

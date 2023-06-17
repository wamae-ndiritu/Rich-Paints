import React from "react";
import "./header.css";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const TopHeader = () => {
  return (
    <div className="cont">
      <div className="top-header">
        <div className="top-left">
          <div className="left-item">
            <PhoneEnabledIcon className="top-icon" />
            <h4 className="h4">+254208097069</h4>
          </div>
          <div className="left-item">
            <MailOutlineIcon className="top-icon" />
            <h4 className="h4">richpaintskenya@gmail.com</h4>
          </div>
          <div className="left-item top-hide">
            <LocationOnIcon className="top-icon" />
            <h4 className="h4"> Nairobi Kenya</h4>
          </div>
        </div>
        <div className="top-right top-hide">
          <button className="top-btn">Call Us: +254 20 8097069</button>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

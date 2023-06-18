import React from "react";
import { Link } from "react-router-dom";
import { services } from "./serviceData";
import EastIcon from "@mui/icons-material/East";
import "./services.css";

const Services = () => {
  return (
    <div className="service-row mt-3">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {services.slice(0, 3).map((service) => {
            const { _id, title, image, descrption: description } = service;
            return (
              <div className="col-lg-4 col-md-4" key={_id}>
                <div className="service-card shadow-sm">
                  <div className="service-img">
                    <img src={image} alt="..." />
                  </div>
                  <h6 className="h6 service-title">{title}</h6>
                  <p className="service-text">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/services" className="btn-more">
          <h6>View More</h6>
          <div className="more-icon">
            <EastIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;

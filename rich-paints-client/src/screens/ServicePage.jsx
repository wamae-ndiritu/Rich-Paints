import React from "react";
import TitleBar from "../components/TitleBar";
import { services } from "../components/services/serviceData";

const ServicePage = () => {
  return (
    <div className="services-cont">
      <TitleBar>Our Services</TitleBar>
      <div className="service-banner my-3">
        <img src="/banners/banner-1.png" alt="..." />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {services.map((service) => {
            const { _id, title, image, descrption: description } = service;
            return (
              <div className="col-lg-4 col-md-4 col-sm-6 service" key={_id}>
                <div className="service-img">
                  <img src={image} alt="..." />
                </div>
                <h6 className="h6 service-title">{title}</h6>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;

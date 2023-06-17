import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="service-row mt-3">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-4">
            <div className="service-card shadow-sm">
              <div className="service-img">
                <img src="/Images/products/product-1.png" alt="..." />
              </div>
              <h6 className="h6 sub-title">House Paiting</h6>
              <p className="service-text">
                We offer our customers house painting services at affordable
                charges.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="service-card shadow-sm">
              <div className="service-img">
                <img src="/Images/products/product-7.png" alt="..." />
              </div>
              <h6 className="h6 sub-title">Wall Rennovation</h6>
              <p className="service-text">
                We offer our customers house painting services at affordable
                charges.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <div className="service-card shadow-sm">
              <div className="service-img">
                <img src="/Images/products/product-5.png" alt="..." />
              </div>
              <h6 className="h6 sub-title">Wall Painting</h6>
              <p className="service-text">
                Our proffessionals have what it takes and they work tirelessly
                to make our clients satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

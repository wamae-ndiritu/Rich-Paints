import React from "react";
import { CSRs } from "./data/projectData";
import TitleBar from "../TitleBar";

const CSR = () => {
  return (
    <div className="container my-5">
      <TitleBar>Community Social Responsibility</TitleBar>
      {CSRs.map((CSR) => {
        const { _id, title, images, after } = CSR;
        return (
          <div className="row" key={_id}>
            <div className="project-subtitle">
              <h6 className="h6">{title}</h6>
            </div>
            {images?.map((image, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-padding caption-cont product-card"
                  key={index}
                >
                  <div className="bottom-badge text-center">
                    <p>{title}</p>
                  </div>
                  <img src={image} alt="..." />
                </div>
              );
            })}
            {after?.map((image, index) => {
              return (
                <div
                  className="col-lg-3 col-md-4 col-padding caption-cont product-card"
                  key={index}
                >
                  <div className="bottom-badge text-center">
                    <p>{title}</p>
                  </div>
                  <img src={image} alt="..." />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CSR;

import React from "react";
import { partners } from "./partnersData";
import TitleBar from "../TitleBar";

const Partners = () => {
  return (
    <div className="cont mt-5 mb-3">
      <TitleBar>Our Partners</TitleBar>
      <div className="partner-wrapper">
        {partners.map((partner) => {
          const { _id, img } = partner;
          return (
            <div className="partner" key={_id}>
              <img src={img} alt="..." />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;

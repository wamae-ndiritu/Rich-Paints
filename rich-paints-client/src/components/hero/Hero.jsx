import React from "react";
import Carousel from "./Carousel";
import { banners } from "./BannerData";

export default function Hero() {
  return (
    <div className="container mb-3">
      <Carousel style={{ width: "100%" }}>
        {banners.map((banner) => {
          return (
            <div key={banner.id}>
              <img src={banner.img} alt="..." />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

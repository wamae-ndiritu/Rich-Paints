import React from "react";
import TitleBar from "../components/TitleBar";
import { tips } from "../components/paintingTips/tipsData";

const PaintingTipsPage = () => {
  return (
    <div className="cont">
      <TitleBar>Painting Tips</TitleBar>
      <div className="tips-cont shadow-sm">
        <div className="blog-img">
          <img src="/banners/tips-10.png" alt="10 painting tips" />
        </div>
        <h2>Top 10 Essential Painting Tips for a Flawless Finish</h2>
        {tips.map((tipItem) => {
          const { _id, title, description } = tipItem;
          return (
            <div className="tips-item" key={_id}>
              <h6>
                {_id + 1}. {title}
              </h6>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaintingTipsPage;

import React from "react";

const TitleBar = ({ children }) => {
  return (
    <div className="section-title">
      <h5 className="h5 text-center">{children}</h5>
      <div className="hr"></div>
    </div>
  );
};

export default TitleBar;

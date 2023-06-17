import React from "react";
import { useParams } from "react-router-dom";
import "./products.css";
import { products } from "./ProductData";

const ProductInfo = () => {
  const params = useParams();
  const productId = Number(params.id);

  const product = products.find((product) => product._id === productId);
  const { title, img, description } = product;
  return (
    <div className="container my-3">
      <div className="info-wrapper">
        <div className="info-left">
          <img src={img} alt={title} className="cover-image" />
        </div>
        <div className="info-right">
          <h5 className="info-title">{title}</h5>
          <p className="info-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

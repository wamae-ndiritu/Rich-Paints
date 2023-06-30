import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TitleBar from "../TitleBar";
import { products } from "./ProductData";

const Products = () => {
  useEffect(() => {
    const cardOverlays = document.querySelectorAll(".product-overlay");
    cardOverlays.forEach((cardOverlay) => {
      cardOverlay.addEventListener("mouseover", function () {
        cardOverlay.classList.add("product-overlay-show");
      });
      cardOverlay.addEventListener("mouseout", function () {
        cardOverlay.classList.remove("product-overlay-show");
      });
    });
  }, []);
  return (
    <div className="container mb-3">
      <TitleBar>Our Products</TitleBar>
      <p className="mt-3">
        Rich paints specialize in manufacturing top quality decorative paints.
        The paints can be used in industrial, residential, commercial spaces
        among others. We partner with some other leading chemical companies in
        the World to provide us with the best raw materials for the best
        results.
      </p>
      <div className="row mt-3 products-row d-flex justify-content-center">
        {products.map((product) => {
          const { _id, title, img } = product;
          return (
            <div
              className="col-lg-3 col-md-4 col-padding product-card"
              key={_id}
            >
              <img src={img} alt={title} />
              <Link to={`/products/${_id}`} className="product-overlay">
                <div className="view-badge">
                  VIEW <VisibilityIcon />
                </div>
              </Link>
              <div className="product-badge">
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;

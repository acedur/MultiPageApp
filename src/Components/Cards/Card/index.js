import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

function Card({ data, singleProduct = false }) {
  const { title, image, price, id, description } = data;
  let navigate = useNavigate();
  if (singleProduct) {
    return (
      <div className="single-card-container">
        <img src={image} alt={"Slika"} className="single-card-image" />
        <div className="card-info-container">
          <div className="single-card-header">{title}</div>
          <div className="description">{description}</div>
          <div className="price-single-product">Price : {price}$</div>
          <NavLink className="btnBack" onClick={() => navigate(-1)}>
            More products
          </NavLink>
        </div>
      </div>
    );
  }
  return (
    <NavLink to={`/product/${id}`} className="card-container">
      <div className="header-card">{title}</div>
      <img src={image} alt={"Slika"} className="image-card" />
      <div className="price-card">Price : {price}$</div>
    </NavLink>
  );
}

export default Card;

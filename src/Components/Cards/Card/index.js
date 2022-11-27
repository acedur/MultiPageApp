import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Card({ data, singleProduct = false }) {
  const { title, image, price, id, description } = data;
  if (singleProduct) {
    return (
      <div className="single-card-container">
        <div className="header">{title}</div>
        <div>{description}</div>
        <img src={image} alt="An Image" className="image" />
        <div className="price">Price : {price}$</div>
      </div>
    );
  }
  return (
    <NavLink to={`/product/${id}`} className="card-container">
      <div className="header">{title}</div>
      <img src={image} alt="An Image" className="image" />
      <div className="price">Price : {price}$</div>
    </NavLink>
  );
}

export default Card;

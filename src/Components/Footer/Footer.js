import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Footer = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="footer-container">
        <div>Aleksandar Duranovski&copy; 2022</div>
        <NavLink className="btnNav" onClick={() => navigate(-1)}>
          Go back
        </NavLink>
      </div>
    </>
  );
};

export default Footer;

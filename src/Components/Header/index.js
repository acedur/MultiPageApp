import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../Loading";
import "./index.css";

function Header() {
  const [data, setData] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData([...data, ...json]));
    // eslint-disable-next-line
  }, []);
  if (data.length === 0) {
    return (
      <div className="header-container">
        <Loading />
      </div>
    );
  }
  return (
    <div className="header-container">
      <NavLink to={"/"}>
        <img
          src="https://previews.123rf.com/images/briang77/briang771602/briang77160200186/51929350-business-storefront.jpg"
          alt="logo"
          className="logo"
        />
      </NavLink>
      <div className="nav-container">
        <div className="primary-nav-container">
          {data.map((item) => {
            return (
              <NavLink key={item} to={`category/${item}`} className="btnNav">
                {item}
              </NavLink>
            );
          })}
        </div>
        <div className="burgerMenu">
          <div className="btnNav" onClick={() => setShowMenu(!showMenu)}>
            <label htmlFor="hamburger">&#9776;</label>
          </div>
          <div className={`hidenMenu ${showMenu ? "active" : ""}`}>
            {data.map((item) => {
              return (
                <NavLink key={item} to={`category/${item}`} className="btnNav">
                  {item}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

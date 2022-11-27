import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loading from "../Loading";
import "./index.css";

function Header() {
  const [data, setData] = useState(["Home"]);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setData([...data, ...json]));
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
          src="https://fakestoreapi.com/icons/logo.png"
          alt="logo"
          className="logo"
        />
      </NavLink>
      <div className="nav-container">
        <div className="primary-nav-container">
          {data.map((item) => {
            return (
              <NavLink
                to={item === "Home" ? "/" : `category/${item}`}
                className="btnNav"
              >
                {item}
              </NavLink>
            );
          })}
        </div>
        <div className="burgerMenu">
          <div className="btnNav" onClick={() => setShowMenu(!showMenu)}>
            <label for="hamburger">&#9776;</label>
          </div>
          <div className={`hidenMenu ${showMenu ? "active" : ""}`}>
            {data.map((item) => {
              return (
                <NavLink
                  to={item === "Home" ? "/" : `category/${item}`}
                  className="btnNav"
                >
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

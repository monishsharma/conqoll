import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <h1 className="header__container__h1">ELIA</h1>
        <div className="header__container__navlinks">
          <NavLink to = "/" exact activeClassName = "active">
            <p>All</p>
          </NavLink>
          <NavLink to = "/shortlist" activeClassName = "active">
            <p>ShortListed</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;

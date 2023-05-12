import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/styles.css";

function Navbar({ populations }) {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <NavLink exact to="/" activeClassName="activeLink">
            Campaign Form
          </NavLink>
        </li>
        <li>
          <NavLink to="/response" activeClassName="activeLink">
            Response
          </NavLink>
        </li>
        <li>
          <NavLink to="/population" activeClassName="activeLink">
            Population
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

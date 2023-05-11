import React from "react";
import "./styles/styles.css";
import { NavLink } from "react-router-dom";

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
        {populations.map((population, index) => (
          <li key={index}>
            <NavLink
              to={`/population/${population.name.replace(/\s+/g, '-').toLowerCase()}`}
              activeClassName="activeLink"
              className="population-link" // Add a CSS class for population links
            >
              {population.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

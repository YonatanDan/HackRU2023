import React from "react";
import './styles/styles.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/CampaignForm">Campaign Form</Link>
        </li>
        <li>
          <Link to="/Response">Response</Link>
        </li>
        <li>
          <Link to="/Population">Population</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
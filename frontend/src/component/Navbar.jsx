import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/d1.png"; // Adjust the path as needed
import "../component/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="logo-link">
          <img src={logo} alt="Diet Plan" className="logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/meal-planner" className="nav-link">Meal Planner</Link>
          <Link to="/diet-plans" className="nav-link">Diet Plans</Link>
          {/* <Link to="/calculators" className="nav-link">Calculators</Link> */}
          <Link to="/articles" className="nav-link">Articles</Link>
          <Link to="/help" className="nav-link">Help</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </div>
        <button className="get1">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;

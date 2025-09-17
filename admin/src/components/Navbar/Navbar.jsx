import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="logo" src={assets.logo} alt="logo" />
        <h2>Admin Panel</h2>
      </div>
      <div className="navbar-right">
        <img className="profile" src={assets.profile_image} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;

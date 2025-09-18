import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";

const Navbar = () => {
  return (
    <div className="admin-navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src={assets.logo} alt="logo" />
        <h2 className="navbar-title">Admin Panel</h2>
      </div>
      <div className="navbar-right">
        <img className="profile-image" src={assets.profile_image} alt="profile" />
      </div>
    </div>
  );
};

export default Navbar;

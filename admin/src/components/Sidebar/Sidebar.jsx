import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Mama's Kitchen.<span className="sub">Admin Panel</span></h2>
      <ul>
        <li>
          <Link to="/add">➕ Add Items</Link>
        </li>
        <li>
          <Link to="/list">📃 List Items</Link>
        </li>
        <li>
          <Link to="/orders">🛒 Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

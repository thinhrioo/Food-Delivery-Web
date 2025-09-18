import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2 className="sidebar-logo">Mama's Kitchen.<span className="sidebar-subtitle">Admin Panel</span></h2>
      <ul className="sidebar-menu">
        <li className="sidebar-item">
          <Link to="/add" className="sidebar-link">➕ Add Items</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/list" className="sidebar-link">📃 List Items</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/orders" className="sidebar-link">🛒 Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

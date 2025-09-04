import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className='logo' />

      {/* Menu */}
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>Menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>Mobile App</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>Contact Us</li>
      </ul>

      {/* Actions: Search + Cart + Sign In */}
      <div className="navbar-actions">
        <FaSearch size={20} className="icon" />
        <FaShoppingCart size={22} className="icon" />
        <button className="signin-btn">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({ setShowLogin }) => {   // ✅ destructuring props đúng cách
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className='logo' />

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <li className={menu === "home" ? "active" : ""} onClick={() => { setMenu("home"); setOpen(false) }}>Home</li>
        <li className={menu === "menu" ? "active" : ""} onClick={() => { setMenu("menu"); setOpen(false) }}>Menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => { setMenu("mobile-app"); setOpen(false) }}>Mobile App</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => { setMenu("contact-us"); setOpen(false) }}>Contact Us</li>
      </ul>

      {/* Actions */}
      <div className="navbar-actions">
        <FaSearch size={20} className="icon" />
        <Link to='/cart'> <FaShoppingCart size={22} className="icon" /> </Link>
        <button onClick={() => setShowLogin(true)} className="signin-btn">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar

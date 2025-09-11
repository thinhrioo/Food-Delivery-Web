import React, { useState, useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'   // ✅ import context

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [open, setOpen] = useState(false);

  const { cartItems } = useContext(StoreContext); // ✅ lấy cartItems
  const cartCount = Object.values(cartItems).reduce((a, b) => a + b, 0); // ✅ tính tổng

  return (
    <div className='navbar'>
      {/* Logo */}
      <Link to='/' ><img src={assets.logo} alt="Logo" className='logo' /></Link>

      {/* Hamburger button */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
      </div>

      {/* Menu */}
      <ul className={`navbar-menu ${open ? "open" : ""}`}>
        <Link to='/' className={menu === "home" ? "active" : ""} onClick={() => { setMenu("home"); setOpen(false) }}>Home</Link>
        <li className={menu === "menu" ? "active" : ""} onClick={() => { setMenu("menu"); setOpen(false) }}>Menu</li>
        <li className={menu === "mobile-app" ? "active" : ""} onClick={() => { setMenu("mobile-app"); setOpen(false) }}>Mobile App</li>
        <li className={menu === "contact-us" ? "active" : ""} onClick={() => { setMenu("contact-us"); setOpen(false) }}>Contact Us</li>
      </ul>

      {/* Actions */}
      <div className="navbar-actions">
        <FaSearch size={20} className="icon" />
        
        {/* Shopping cart with badge */}
        <Link to='/cart' className="cart-icon-wrap">
          <FaShoppingCart size={22} className="icon" />
          {cartCount > 0 && <span className="cart-badge"></span>}  {/* ✅ chấm đỏ */}
        </Link>
        
        <button onClick={() => setShowLogin(true)} className="signin-btn">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './Navbar.css'
import { assets } from '../assets/assets'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className='logo' />

      {/* Menu */}
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile App</li>
        <li>Contact Us</li>
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

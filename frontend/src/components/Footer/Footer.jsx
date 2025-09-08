import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import Home from './../../pages/Home/Home';
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />'
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis iusto incidunt odit vel. Expedita vel voluptate tenetur
            ipsam, cum dolore molestiae aspernatur fugit quis provident modi
            corporis. Veritatis, eaque quod.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook" />
            <img src={assets.tiktok_icon} alt="tiktok" />
            <img src={assets.instagram_icon} alt="instagram" />
            <img src={assets.youtube_icon} alt="youtube" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+84 37 9955 314</li>
                <li>ducthinh.0203.a2@gmail.com</li>
            </ul>
        </div>
      </div>
      <p className="footer-copyright">Project by duc thinh</p>
    </div>
  );
};

export default Footer;

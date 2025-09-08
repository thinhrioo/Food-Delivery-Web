import React, { useState } from "react";
import "./LoginPopup.css";
import { FaTimes } from "react-icons/fa";

const LoginPopup = ({ onClose }) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        
        {/* Title */}
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>

        {/* Inputs */}
        {currState === "Sign Up" && (
          <input type="text" placeholder="Your name" required />
        )}
        <input type="email" placeholder="Your email" required />
        <input type="password" placeholder="Password" required />

        {/* Submit button */}
        <button className="login-btn">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms + switch */}
        {currState === "Sign Up" ? (
          <>
            <div className="login-popup-checkbox">
              <input type="checkbox" required />
              <p>
                By continuing, I agree to the terms of use & privacy policy.
              </p>
            </div>
            <p className="switch">
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          </>
        ) : (
          <p className="switch">
            Don’t have an account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;

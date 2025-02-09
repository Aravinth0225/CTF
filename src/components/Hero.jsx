import React, { useState } from "react";
import "./Hero.css";
import logo from "../images/th3cyb3rhub-fav.png"; // Replace with your logo path

const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="app-container">
      {/* Logo with Dropdown */}
      <div 
        className="logo-container" 
        onMouseEnter={() => setShowDropdown(true)} 
        onMouseLeave={() => setShowDropdown(false)}
      >
        <img src={logo} alt="Logo" className="logo" />
        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={() => console.log("Login clicked")}>➡️ Login</button>
            <button onClick={() => console.log("Register clicked")}>➡️ Register</button>
          </div>
        )}
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <h1>Welcome to Capture The Flag</h1>
        <p>“Technology trust is a good thing, but control is a better one.”</p>
      </div>
    </div>
  );
};

export default Hero;

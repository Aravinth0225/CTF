import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import logo from "../images/th3cyb3rhub-fav.png"; // Replace with your logo path

const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="app-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hero Content */}
      <div className="hero-container">
        <br /> <br /> <br /> <br />
        <h1>Welcome to Capture The Flag</h1>
        <p>“Technology trust is a good thing, but control is a better one.”</p>
      </div>

      {/* Buttons at the bottom */}
      <div className="button-container">
  <button className="hero-button" onClick={() => navigate("/login")}>
    Login
  </button>
  <button className="hero-button" onClick={() => navigate("/register")}>
    Register
  </button>
</div>

    </div>
  );
};

export default Hero;

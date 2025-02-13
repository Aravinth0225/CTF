import React from "react";
import { useState, useEffect } from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";

import Register from "./components/Register.jsx";
import TechCategories from "./components/TechCategories";
import About from "./components/About.jsx";
//import Dashboard from "./components/Dashboard";
//import Scoreboard from "./components/Scoreboard";
//import Categories from "./components/Categories";

// Background Video
// import bgVideo from "./video/videoplayback.mp4";
// import bgVideo from "./video/video bg ctf.mp4";
import bgVideo from "./video/bg-img.mp4";

//Categories Navigation
import General from "./components/categories/General/General";
import Web from "./components/categories/Web/Web";
import Forensic from "./components/categories/Forensic/Forensic";
import Steganography from "./components/categories/Steganography/Steganography";
import Networks from "./components/categories/Networks/Networks";
import Python from "./components/categories/Python/Python";
import Linux from "./components/categories/Linux/Linux";

import axios from "axios";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/register") // ✅ Fetch data from your MongoDB backend
      .then((response) => setItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <Navbar /> {/* ✅ Added Navbar */}
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <video autoPlay loop muted className="background-video">
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <Hero />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />.
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<TechCategories />} />
          <Route path="/about" element={<About />} />

          <Route path="/categories/General/General" element={<General />} />
          <Route path="/categories/Web/Web" element={<Web />} />
          <Route path="/categories/Forensic/Forensic" element={<Forensic />} />
          <Route path="/categories/Steganography/Steganography" element={<Steganography />} />
          <Route path="/categories/Networks/Networks" element={<Networks />} />
          <Route path="/categories/Python/Python" element={<Python />} />
          <Route path="/categories/Linux/Linux" element={<Linux />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

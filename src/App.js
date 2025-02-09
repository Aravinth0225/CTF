import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";

import Register from "./components/Register.jsx";
import bgVideo from "./video/bg-img.mp4";
import TechCategories from "./components/TechCategories";
//import Dashboard from "./components/Dashboard";
//import Scoreboard from "./components/Scoreboard";
//import Categories from "./components/Categories";
import bgVideo from "./video/videoplayback.mp4";

import "./App.css";

function App() {
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

        </Routes>
      </div>
    </Router>
  );
}

export default App;

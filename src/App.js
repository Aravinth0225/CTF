import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";
import bgVideo from "./video/videoplayback.mp4";
import "./App.css";

function App() {
  return (
    <Router>
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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

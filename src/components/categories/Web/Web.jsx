import React, { useState } from "react";
import "./TechCategories.css"; // Import the CSS

const webChallenges = [
  { name: "0x01", points: "50 points", description: "XSS Attack", difficulty: "MEDIUM" },
  { name: "0x02", points: "50 points", description: "SQL Injection", difficulty: "MEDIUM" },
  { name: "0x03", points: "50 points", description: "Broken Authentication", difficulty: "HARD" },
];

const Web = () => {
  const [completed, setCompleted] = useState({});

  const handleSubmit = (index) => {
    setCompleted({ ...completed, [index]: true });
  };

  return (
    <div className="tech-container">
      <h1 className="tech-title">Web Challenges</h1>
      <p className="tech-subtitle">Test your web security skills!</p>
      <div className="tech-underline"></div>

      <div className="tech-grid">
        {webChallenges.map((challenge, index) => (
          <div key={index} className="tech-card">
            <h2 className="tech-card-title">{challenge.name}</h2>
            <p className="tech-card-count">{challenge.points}</p>
            <p className="tech-card-description">{challenge.description}</p>
            <span className="tech-difficulty">{challenge.difficulty}</span>
            <div className={`tech-status ${completed[index] ? "completed" : "not-completed"}`}>
              {completed[index] ? "COMPLETED_SUCCESSFULLY" : "NOT_COMPLETED_YET"}
            </div>
              <button className="tech-button">Go There</button>
            <button className="tech-button">💡 Get HINT</button>

            <div>
              <input
                type="text"
                className="flag-input"
                placeholder="Enter Flag"
              />
              <button className="flag-submit" onClick={() => handleSubmit(index)}>
                GO!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Web;

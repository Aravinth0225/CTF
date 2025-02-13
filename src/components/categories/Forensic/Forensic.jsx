import React, { useState } from "react";
import "./TechCategories.css"; // Import the CSS

const forensicChallenges = [
  { name: "0x67", points: "100 points", description: "Get through it", difficulty: "MEDIUM" },
  { name: "0x68", points: "100 points", description: "ISO", difficulty: "MEDIUM" },
  { name: "0x69", points: "100 points", description: "HDF5 MAN", difficulty: "MEDIUM" },
];

const Forensic = () => {
  const [completed, setCompleted] = useState({});

  const handleSubmit = (index) => {
    setCompleted({ ...completed, [index]: true });
  };

  return (
    <div className="tech-container">
      <h1 className="tech-title">Forensic_Challenges</h1>
      <p className="tech-subtitle">Are you ready to solve ...</p>
      <div className="tech-underline"></div>

      <div className="tech-grid">
        {forensicChallenges.map((challenge, index) => (
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

export default Forensic;

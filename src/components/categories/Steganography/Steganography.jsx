import React, { useState } from "react";
import "./TechCategories.css"; // Import the CSS

const steganographyChallenges = [
  { name: "0x02", points: "50 points", description: "Find Me inSide Me", difficulty: "EASY" },
  { name: "0x1D", points: "200 points", description: "Pixelass", difficulty: "HARD" },
  { name: "0x1E", points: "100 points", description: "~Audio~", difficulty: "MEDIUM" },
  { name: "0x0L", points: "100 points", description: "~DIG IT~", difficulty: "MEDIUM" },
  { name: "0x0M", points: "100 points", description: "~Attack~", difficulty: "EASY" },
];

const Steganography = () => {
  const [completed, setCompleted] = useState({});

  const handleSubmit = (index) => {
    setCompleted({ ...completed, [index]: true });
  };

  return (
    <div className="tech-container">
      <h1 className="tech-title">STEGNOGRAPHY</h1>
      <p className="tech-subtitle">Are you ready to solve the quests?</p>
      <div className="tech-underline"></div>

      <div className="tech-grid">
        {steganographyChallenges.map((challenge, index) => (
          <div key={index} className="tech-card">
            <h2 className="tech-card-title">{challenge.name}</h2>
            <p className="tech-card-count">{challenge.points}</p>
            <p className="tech-card-description">{challenge.description}</p>
            <span className={`tech-difficulty ${challenge.difficulty.toLowerCase()}`}>
              {challenge.difficulty}
            </span>

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

export default Steganography;

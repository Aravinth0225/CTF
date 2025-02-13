import React, { useState } from "react";
import "./TechCategories.css"; // Ensure you have this CSS file for styling

const pythonChallenges = [
  { name: "0x17", points: "50 points", description: "Crack the Arcane Calculator", difficulty: "EASY" },
  { name: "0x18", points: "200 points", description: "XOR Decryption –", difficulty: "HARD" },
  { name: "0x19", points: "100 points", description: "Brute Force Attack*", difficulty: "MEDIUM" },
  { name: "0x1A", points: "50 Points", description: "Break Me", difficulty: "EASY" },
  { name: "0x1B", points: "50 Points", description: "Wait for the Onion to peel", difficulty: "EASY" },
  { name: "0x1C", points: "50 points", description: "Maze Explorer", difficulty: "EASY" },
  { name: "0x1G", points: "50 points", description: "Decrypt the flag", difficulty: "EASY" },
];

const Python = () => {
  const [completed, setCompleted] = useState({});

  const handleSubmit = (index) => {
    setCompleted({ ...completed, [index]: true });
  };

  return (
    <div className="tech-container">
      <h1 className="tech-title">PYTHON-QUESTS</h1>
      <p className="tech-subtitle">Are you ready to solve the quests?</p>
      <div className="tech-underline"></div>

      <div className="tech-grid">
        {pythonChallenges.map((challenge, index) => (
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

export default Python;

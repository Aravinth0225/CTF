import React, { useState } from "react";
import "./TechCategories.css"; // Ensure you have this CSS file for styling

const linuxChallenges = [
  { name: "0x0E", points: "50 points", description: "Just Connect to SSH - GET a Flag", difficulty: "EASY" },
  { name: "0x0D", points: "50 points", description: "Strings STR", difficulty: "EASY" },
  { name: "0x0F", points: "100 points", description: "Debugger --", difficulty: "HARD" },
];

const Linux = () => {
  const [completed, setCompleted] = useState({});

  const handleSubmit = (index) => {
    setCompleted({ ...completed, [index]: true });
  };

  return (
    <div className="tech-container">
      <h1 className="tech-title">LINUX-QUESTS</h1>
      <p className="tech-subtitle">Are you ready to solve the quests?</p>
      <div className="tech-underline"></div>

      <div className="tech-grid">
        {linuxChallenges.map((challenge, index) => (
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

export default Linux;

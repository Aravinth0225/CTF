import React, { useState } from "react";
import "./TechCategories.css"; // Import the CSS

const challenges = [
  { name: "0x04", points: "25 points", description: "DECRYPT THE CIPHER", difficulty: "EASY" },
  { name: "0x05", points: "25 points", description: "HELP", difficulty: "EASY" },
  { name: "0x0G", points: "25 points", description: "QR code encrypt", difficulty: "EASY" },
  { name: "0x0K", points: "25 points", description: "QUIZ", difficulty: "EASY" },
  { name: "0x0I", points: "25 points", description: ".py bug fix", difficulty: "EASY" },
  { name: "0x0J", points: "25 points", description: "JOIN", difficulty: "EASY" },
];

const General = () => {
  const [completed, setCompleted] = useState({});

  const handleSubmit = (index) => {
    setCompleted({ ...completed, [index]: true });
  };

  return (
    <div className="tech-container">
      <h1 className="tech-title">General Quests</h1>
      <p className="tech-subtitle">Ready to dive into the Quantum World!</p>
      <div className="tech-underline"></div>

      <div className="tech-grid">
        {challenges.map((challenge, index) => (
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

export default General;

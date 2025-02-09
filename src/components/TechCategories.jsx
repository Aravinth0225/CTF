import { Link } from "react-router-dom";
import "./TechCategories.css"; // Import external CSS

const categories = [
  { name: "GENERAL QUESTIONS", count: "10 Questions" },
  { name: "Web", count: "10 Challenges" },
  { name: "Forensic", count: "3 Challenges" },
  { name: "Steganography", count: "5 Challenges" },
  { name: "Networks", count: "2 Challenges" },
  { name: "Python", count: "7 Challenges" },
];

const TechCategories = () => {
  return (
    <div className="tech-container">
      

      {/* Title */}
      <h1 className="tech-title">Tech-Categories</h1>
      <div className="tech-underline"></div>

      {/* Categories Grid */}
      <div className="tech-grid">
        {categories.map((category, index) => (
          <div key={index} className="tech-card">
            <h2 className="tech-card-title">{category.name}</h2>
            <p className="tech-card-count">{category.count}</p>
            <button className="tech-button">Go Deeper</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCategories;

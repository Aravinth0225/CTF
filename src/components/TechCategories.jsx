import { Link } from "react-router-dom";
import "./TechCategories.css"; 

const categories = [
  { name: "General", path: "/categories/General/General", count: "10 Questions" },
  { name: "Web", path: "/categories/Web/Web", count: "10 Challenges" },
  { name: "Forensic", path: "/categories/Forensic/Forensic", count: "3 Challenges" },
  { name: "Steganography", path: "/categories/Steganography/Steganography", count: "5 Challenges" },
  { name: "Networks", path: "/categories/Networks/Networks", count: "3 Challenges" },
  { name: "Python", path: "/categories/Python/Python", count: "7 Challenges" },
  { name: "Linux", path: "/categories/Linux/Linux", count: "3 Challenges" },
];

const TechCategories = () => {
  return (
    <div className="tech-container">
      <h1 className="tech-title">Tech-Categories</h1>
      <div className="tech-underline"></div>

      <div className="tech-grid">
        {categories.map((category, index) => (
          <div key={index} className="tech-card">
            <h2 className="tech-card-title">{category.name}</h2>
            <p className="tech-card-count">{category.count}</p>
            <br />
            <Link to={category.path} className="tech-button">
              Go Deeper
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCategories;

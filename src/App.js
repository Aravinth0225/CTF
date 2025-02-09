import './App.css';
import Hero from './components/Hero';
import bgImage from './video/videoplayback.mp4'; // Ensure correct path

function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src={bgImage} type="video/mp4" />
      </video>
      <Hero />
    </div>
  );
}

export default App;

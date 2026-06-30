import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Questionnaire from './components/Questionnaire/Questionnaire';
import MapComponent from './components/MapComponent/MapComponent';
import useTripPlanner from './hooks/useTripPlanner';
import './styles/App.css';

function PlanPage() {
  const {
    phase,
    phaseMessage,
    coordinates,
    centerCoords,
    itinerary,
    error,
    startPlanning,
    reset,
  } = useTripPlanner();

  const handleSubmit = (answers) => {
    startPlanning(answers);
  };

  // Questionnaire phase
  if (phase === 'idle') {
    return (
      <div className="plan-page">
        <Questionnaire onSubmit={handleSubmit} />
      </div>
    );
  }

  // Loading phase
  if (phase === 'planning') {
    return (
      <div className="plan-page">
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <p className="loading-message">{phaseMessage}</p>
        </div>
      </div>
    );
  }

  // Error phase
  if (phase === 'error') {
    return (
      <div className="plan-page">
        <div className="error-screen">
          <h2>Oops!</h2>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={reset}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Results phase
  return (
    <div className="plan-page">
      <div className="results-header">
        <button className="btn btn-secondary" onClick={reset}>
          Plan Another Trip
        </button>
      </div>
      <MapComponent
        coordinates={coordinates}
        centerCoords={centerCoords}
        itinerary={itinerary}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/plan" element={<PlanPage />} />
      </Routes>
    </Router>
  );
}

export default App;

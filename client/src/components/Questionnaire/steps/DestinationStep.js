import React from 'react';
import './Steps.css';

const popularCities = [
  { name: 'New York City', emoji: '\u{1F5FD}' },
  { name: 'Los Angeles', emoji: '\u{1F3AC}' },
  { name: 'Chicago', emoji: '\u{1F32C}' },
  { name: 'Miami', emoji: '\u{1F3D6}' },
  { name: 'San Francisco', emoji: '\u{1F309}' },
  { name: 'Austin', emoji: '\u{1F3B8}' },
  { name: 'Seattle', emoji: '\u2615' },
  { name: 'Nashville', emoji: '\u{1F3B5}' },
];

function DestinationStep({ value, onChange }) {
  return (
    <div className="step-content">
      <h2 className="step-question">Where do you want to go?</h2>
      <p className="step-hint">Pick a city or type your own</p>

      <input
        type="text"
        className="destination-input"
        placeholder="Enter a city..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="city-grid">
        {popularCities.map((city) => (
          <button
            key={city.name}
            className={`city-card ${value === city.name ? 'selected' : ''}`}
            onClick={() => onChange(city.name)}
          >
            <span className="city-emoji">{city.emoji}</span>
            <span className="city-name">{city.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DestinationStep;

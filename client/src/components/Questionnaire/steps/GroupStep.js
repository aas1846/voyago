import React from 'react';
import './Steps.css';

const options = [
  { label: 'Solo', emoji: '\u{1F9D1}' },
  { label: 'Couple', emoji: '\u{1F491}' },
  { label: 'Friends', emoji: '\u{1F46B}' },
  { label: 'Family', emoji: '\u{1F46A}' },
];

function GroupStep({ value, onChange }) {
  return (
    <div className="step-content">
      <h2 className="step-question">Who are you traveling with?</h2>
      <p className="step-hint">This helps us tailor your itinerary</p>

      <div className="option-grid">
        {options.map((opt) => (
          <button
            key={opt.label}
            className={`option-card ${value === opt.label ? 'selected' : ''}`}
            onClick={() => onChange(opt.label)}
          >
            <span className="option-emoji">{opt.emoji}</span>
            <span className="option-label">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default GroupStep;

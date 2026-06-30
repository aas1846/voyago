import React from 'react';
import './Steps.css';

const options = [
  { label: 'Walking', emoji: '\u{1F6B6}' },
  { label: 'Driving', emoji: '\u{1F697}' },
  { label: 'Public Transit', emoji: '\u{1F687}' },
  { label: 'Mix of All', emoji: '\u{1F30D}' },
];

function CommuteStep({ value, onChange }) {
  return (
    <div className="step-content">
      <h2 className="step-question">How do you want to get around?</h2>
      <p className="step-hint">Choose your preferred commute style</p>

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

export default CommuteStep;

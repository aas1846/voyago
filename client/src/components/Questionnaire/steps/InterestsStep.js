import React from 'react';
import './Steps.css';

const interestOptions = [
  'Food & Dining',
  'Art & Museums',
  'Outdoors & Nature',
  'Nightlife',
  'Shopping',
  'History & Culture',
  'Sports & Adventure',
  'Relaxation & Wellness',
];

function InterestsStep({ value, onChange }) {
  const toggleInterest = (interest) => {
    if (value.includes(interest)) {
      onChange(value.filter((i) => i !== interest));
    } else {
      onChange([...value, interest]);
    }
  };

  return (
    <div className="step-content">
      <h2 className="step-question">What are you into?</h2>
      <p className="step-hint">Select all that interest you (at least 1)</p>

      <div className="tags-grid">
        {interestOptions.map((interest) => (
          <button
            key={interest}
            className={`tag-pill ${value.includes(interest) ? 'selected' : ''}`}
            onClick={() => toggleInterest(interest)}
          >
            {interest}
          </button>
        ))}
      </div>
    </div>
  );
}

export default InterestsStep;

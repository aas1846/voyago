import React from 'react';
import ScrollSnapDial from '../../ScrollSnapDial/ScrollSnapDial';
import './Steps.css';

function DurationStep({ value, onChange }) {
  return (
    <div className="step-content">
      <h2 className="step-question">How many days is your trip?</h2>
      <p className="step-hint">Drag or click to select</p>

      <div className="duration-wrapper">
        <ScrollSnapDial
          min={1}
          max={7}
          value={value}
          onChange={onChange}
        />
        <div className="duration-label">
          {value} {value === 1 ? 'day' : 'days'}
        </div>
      </div>
    </div>
  );
}

export default DurationStep;

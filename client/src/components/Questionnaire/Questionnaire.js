import React, { useState } from 'react';
import DestinationStep from './steps/DestinationStep';
import DurationStep from './steps/DurationStep';
import CommuteStep from './steps/CommuteStep';
import GroupStep from './steps/GroupStep';
import InterestsStep from './steps/InterestsStep';
import './Questionnaire.css';

const STEPS = [
  { key: 'destination', label: 'Destination' },
  { key: 'duration', label: 'Duration' },
  { key: 'commute', label: 'Commute' },
  { key: 'group', label: 'Group' },
  { key: 'interests', label: 'Interests' },
];

function Questionnaire({ onSubmit }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    destination: '',
    duration: 3,
    commute: '',
    group: '',
    interests: [],
  });

  const updateAnswer = (field, value) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0: return answers.destination.trim().length > 0;
      case 1: return answers.duration >= 1;
      case 2: return answers.commute.length > 0;
      case 3: return answers.group.length > 0;
      case 4: return answers.interests.length > 0;
      default: return false;
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (isStepValid()) {
      onSubmit(answers);
    }
  };

  const isLastStep = currentStep === STEPS.length - 1;

  return (
    <div className="questionnaire">
      {/* Progress Dots */}
      <div className="progress-dots">
        {STEPS.map((step, i) => (
          <div key={step.key} className="progress-dot-group">
            <div
              className={`progress-dot ${i === currentStep ? 'active' : ''} ${i < currentStep ? 'completed' : ''}`}
            />
            {i < STEPS.length - 1 && (
              <div className={`progress-line ${i < currentStep ? 'completed' : ''}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="questionnaire-body">
        {currentStep === 0 && (
          <DestinationStep
            value={answers.destination}
            onChange={(val) => updateAnswer('destination', val)}
          />
        )}
        {currentStep === 1 && (
          <DurationStep
            value={answers.duration}
            onChange={(val) => updateAnswer('duration', val)}
          />
        )}
        {currentStep === 2 && (
          <CommuteStep
            value={answers.commute}
            onChange={(val) => updateAnswer('commute', val)}
          />
        )}
        {currentStep === 3 && (
          <GroupStep
            value={answers.group}
            onChange={(val) => updateAnswer('group', val)}
          />
        )}
        {currentStep === 4 && (
          <InterestsStep
            value={answers.interests}
            onChange={(val) => updateAnswer('interests', val)}
          />
        )}
      </div>

      {/* Navigation */}
      <div className="questionnaire-nav">
        {currentStep > 0 && (
          <button className="btn btn-secondary nav-btn" onClick={handleBack}>
            Back
          </button>
        )}
        {!isLastStep ? (
          <button
            className="btn btn-primary nav-btn"
            onClick={handleNext}
            disabled={!isStepValid()}
          >
            Next
          </button>
        ) : (
          <button
            className="btn btn-primary nav-btn generate-btn"
            onClick={handleSubmit}
            disabled={!isStepValid()}
          >
            Generate My Itinerary
          </button>
        )}
      </div>
    </div>
  );
}

export default Questionnaire;

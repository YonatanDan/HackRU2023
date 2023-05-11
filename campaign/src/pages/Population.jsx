import React from 'react';
import '../styles/Population.css';
const Population = () => {
  return (
    <div className="population-container">
      <h1>Population Details</h1>
      <div className="field-container">
        <p className="field-label">Population Name:</p>
        <p className="field-value">Population A</p>
      </div>
      <div className="field-container">
        <p className="field-label">Percentage of total population:</p>
        <p className="field-value">30%</p>
      </div>
      <div className="field-container">
        <p className="field-label">Main Platform/s:</p>
        <p className="field-value">Platform A, Platform B</p>
      </div>
      <div className="field-container">
        <p className="field-label">Social Media Post Suggestions:</p>
        <ul className="suggestion-list">
          <li>Suggestion 1</li>
          <li>Suggestion 2</li>
          <li>Suggestion 3</li>
          <li>Suggestion 4</li>
          <li>Suggestion 5</li>
        </ul>
      </div>
      <div className="field-container">
        <p className="field-label">Must Know Things / Accessibility Issues:</p>
        <ul className="accessibility-list">
          <li>Issue 1</li>
          <li>Issue 2</li>
          <li>Issue 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Population;

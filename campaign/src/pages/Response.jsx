import React from 'react';

const Response = () => {
  return (
    <div className="response-container">
      <h1>Campaign General Info</h1>
      <div className="field-container">
        <p className="field-label">Campaign Name:</p>
        <p className="field-value">Campaign A</p>
      </div>
      <div className="field-container">
        <p className="field-label">Target Platforms:</p>
        <p className="field-value">Platform A, Platform B</p>
      </div>
      <div className="field-container">
        <p className="field-label">Start Date:</p>
        <p className="field-value">May 1, 2023</p>
      </div>
      <div className="field-container">
        <p className="field-label">End Date:</p>
        <p className="field-value">June 1, 2023</p>
      </div>
      <div className="field-container">
        <p className="field-label">Target Populations (Top 5):</p>
        <ul className="population-list">
          <li>Population 1</li>
          <li>Population 2</li>
          <li>Population 3</li>
          <li>Population 4</li>
          <li>Population 5</li>
        </ul>
      </div>
      <div className="field-container">
      </div>
    </div>
  );
};

export default Response;

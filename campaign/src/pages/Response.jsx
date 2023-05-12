import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Response = ({ populations }) => {

  const [data, setData] = useState({});
  const {state} = useLocation();
  const uuid = state && state.uuid;

  axios.get('http://127.0.0.1:5000/api/v1/campaign/get/' + uuid).then((response) => {
    setData(response.data);
  }).catch((error) => {
    console.log(error);
  });

  console.log(data);

  return (
    <div className="response-container">
      <h1>Campaign General Info</h1>
      <div className="field-container">
        <p className="field-label">Campaign Name:</p>
        <p className="field-value">Campaign A</p>
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
          {populations.slice(0, 5).map((population, index) => (
            <li key={index}>
              <Link
                to={`/population/${population.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="population-link"
              >
                {population.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Response;

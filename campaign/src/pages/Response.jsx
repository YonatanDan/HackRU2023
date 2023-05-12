import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Response = ({ populations }) => {

  const [data, setData] = useState(undefined);
  const {state} = useLocation();
  const uuid = state && state.uuid;

  async function fetchData(uuid) {
    for (let i = 0; i < 100; i++) {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/campaign/get/' + uuid);
        setData(response.data);
        break;
      } catch (error) {
        // console.log(error);
      }

      await new Promise(resolve => setTimeout(resolve, 5000));
      console.log(i);
    }
  }

  useEffect(() => {
    fetchData(uuid);
  }, [uuid]);

  return (data) ? (
    <div className="response-container">
      <h1>Campaign General Info</h1>
      <div className="field-container">
        <p className="field-label">Campaign Name:</p>
        <p className="field-value">{data.name}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Start Date:</p>
        <p className="field-value">{data.start_date}</p>
      </div>
      <div className="field-container">
        <p className="field-label">End Date:</p>
        <p className="field-value">{data.end_date}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Target Populations (Top 5):</p>
        <ul className="population-list">
          {data.audiences.map((population, index) => (
            <li key={index}>
              <Link
                to={`/population`}
                className="population-link"
                state={{ uuid: uuid, index: index }}
              >
                {population}
              </Link>
            </li>

          ))}
        </ul>
      </div>
    </div>
  ) : <p>Loading...</p>;
};

export default Response;

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Population.css';

const Population = ({ population }) => {
  const postRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState(undefined);
  const {state} = useLocation();
  const uuid = state && state.uuid;
  const index = state && state.index;

  const updateData = async (uuid, index) => {
    for (let i = 0; i < 100; i++) {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/v1/campaign/get_pop/' +
          uuid + '/' + index);
        setData(response.data);
        break;
      } catch (error) {
        // console.log(error);
      }
    }
  }

  useEffect(() => {
    updateData(uuid, index);
  }, [uuid, index]);

  const handleCopy = () => {
    const postText = postRef.current.innerText;
    navigator.clipboard.writeText(postText);
    setCopied(true);
  };

  return (data) ? (
    <div className="population-container">
      <h1>Population Details</h1>
      <div className="field-container">
        <p className="field-label">Population Name:</p>
        <p className="field-value">{data.name}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Percentage of total population:</p>
        <p className="field-value">{data.percentage}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Main Platforms:</p>
        <p className="field-value">{data.platform}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Social Media Post Suggestions:</p>
        <div className="post-container">
          <div className={`post-box ${copied ? 'copied' : ''}`} ref={postRef}>
            <p className="field-value">{data.post}</p>
          </div>
          <button className={`copy-button ${copied ? 'copied' : ''}`} onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="field-container">
        <p className="field-label">Must Know Things:</p>
        <p className="field-value">{data.info}</p>
      </div>
    </div>) : <p>Loading...</p>
};

export default Population;

import axios from 'axios';
import React, { useRef, useState } from 'react';
import '../styles/Population.css';

const Population = ({ population }) => {
  const postRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState({}, []);

  axios.get('http://127.0.0.1:5000/api/v1/campaign/get_pop/' + uuid + '/' + index).then((response) => {
    setData(response.data);
  }).catch((error) => {
    console.log(error);
  });

  console.log(data);

  const handleCopy = () => {
    const postText = postRef.current.innerText;
    navigator.clipboard.writeText(postText);
    setCopied(true);
  };

  return (
    <div className="population-container">
      <h1>Population Details</h1>
      <div className="field-container">
        <p className="field-label">Population Name:</p>
        <p className="field-value">{population.name}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Percentage of total population:</p>
        <p className="field-value">{population.percentage}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Main Platforms:</p>
        <p className="field-value">{population.platforms.join(", ")}</p>
      </div>
      <div className="field-container">
        <p className="field-label">Social Media Post Suggestions:</p>
        <div className="post-container">
          <div className={`post-box ${copied ? 'copied' : ''}`} ref={postRef}>
            <p className="field-value">{population.post}</p>
          </div>
          <button className={`copy-button ${copied ? 'copied' : ''}`} onClick={handleCopy}>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <div className="field-container">
        <p className="field-label">Must Know Things:</p>
        <p className="field-value">{population.mtk}</p>
      </div>
    </div>
  );
};

export default Population;

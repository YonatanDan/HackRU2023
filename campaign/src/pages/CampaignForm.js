import axios from 'axios';
import React, { useState } from 'react';
import Skills from '../campaignForm-components/Skills';
import Chat from '../chat-components/Chat';

function CampaignForm() {
  const [chatButton, setChatButton] = useState(false); 
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    history: false,
    pastConclusions: '',
    skills: ['Customer Service', 'Sales', 'Marketing', 'Tech Support'],
    selectedSkills: '',

  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://127.0.0.1:5000/campaign/generate",{
      name: formData.name,
      start_date: formData.startDate,
      end_date: formData.endDate,
      history: formData.history,
      previous_insights: formData.pastConclusions,
      skills: ['asdmfk', 'asdjfnasdf']
    })
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <form className="CampaignForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Campaign Name:</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="startDate">Start Date:</label>
        <input type="date" name="startDate" id="startDate" value={formData.startDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End Date:</label>
        <input type="date" name="endDate" id="endDate" value={formData.endDate} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="history">History:</label>
        <select name="history" id="history" value={formData.history} onChange={handleChange}>
          <option value="">Select one</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="pastConclusions">Past Conclusions:</label>
        <textarea name="pastConclusions" id="pastConclusions" value={formData.pastConclusions} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label>Skills:</label>
        <Skills />
      </div>
      <div className="form-group">
          <button className="submit-button" type="submit">Submit</button>
      </div>
      <div className='form-group'>
          <button onClick={() => setChatButton(!chatButton)} className="chat-btn">Consult ChatGPT</button>
      </div>
      <Chat trigger={chatButton}> </Chat>
    </form>
  )
}

export default CampaignForm;
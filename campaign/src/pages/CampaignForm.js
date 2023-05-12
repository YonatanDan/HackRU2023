import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chat from '../chat-components/Chat';

function CampaignForm() {
  const [chatButton, setChatButton] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [history, setHistory] = useState(false);
  const [pastConclusions, setPastConclusions] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/v1/skills/get')
      .then(response => setSkills(response.data.skills))
      .catch(error => setSkills([]));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate minimal fields from data and alert the user if they are not filled out
    if (name === '' || startDate === '' || endDate === '' || selectedSkills === [] ) {
      alert('Please fill out all required fields.');
      return;
    }

    // send data to the API
    axios.post("http://127.0.0.1:5000/api/v1/campaign/create",{
      name: name,
      start_date: startDate,
      end_date: endDate,
      history: history,
      previous_insights: pastConclusions,
      skills: selectedSkills,
      description: description
    }).then(response => {
      navigate('/response', {state: {uuid: response.data.uuid}});
    }).catch(error => {console.log(error.data.message);});
  };

  const handleCheckboxChange = (event) => {
    setHistory(event.target.checked);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'endDate':
        setEndDate(value);
        break;
      case 'history':
        setHistory(!history);
        break;
      case 'pastConclusions':
        setPastConclusions(value);
        break;
      default:
        break;
    }
  };


  const handleSkillChange = (selectedSkill) => {

    if (selectedSkill !== undefined){
      // Check if skill is already selected
      if (selectedSkills.includes(selectedSkill)) {
        setSelectedSkills((prevSelectedSkills) =>
          prevSelectedSkills.filter((skill) => skill !== selectedSkill)
        );
      } else {
        // Skill is not selected, so add it to the list
        setSelectedSkills((prevSelectedSkills) => [...prevSelectedSkills, selectedSkill]);
      }
    }
  };

  return (
    <section className="CampaignForm-section">
      <div className="content-container">
        <header className="content-header">Campaign Form</header>
        <form className="CampaignForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Campaign Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Campaign Description:</label>
            <textarea name="description" id="pastConclusidescriptionons" value={description} onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" name="startDate" id="startDate" value={startDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="endDate">End Date:</label>
            <input type="date" name="endDate" id="endDate" value={endDate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="history">History:</label>
            <input type="checkbox" name="history" id="history" checked={history} onChange={handleCheckboxChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="pastConclusions">Past Conclusions:</label>
            <textarea name="pastConclusions" id="pastConclusions" value={pastConclusions} onChange={handleChange}></textarea>
          </div>
          <div className="form-group-column">
            <div className='form-group'>
              <label>Skills:</label>
              <select onChange={(event) => handleSkillChange(event.target.value)}>
                <option value="">Select an option</option>
                {skills.map((option) => (
                  <option key={option} value={String(option)}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
              <ul className='skills-container'>
                {selectedSkills.map((option) => (
                  <li key={option} value={option}>
                    {option}
                  </li>
                ))}
              </ul>
          </div>
          <div className="form-group">
            <button className="submit-button" type="submit">Submit</button>
          </div>
        </form>
        <div className='chat-container'>
            <button onClick={() => setChatButton(!chatButton)} className="chat-btn">Consult ChatGPT</button>
        </div>
        <div className='chat'>
          <Chat trigger={chatButton}> </Chat>
        </div>
      </div>
    </section>
  );
}

export default CampaignForm;
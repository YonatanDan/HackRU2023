import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import Chat from './chat-components/Chat';

function CampaignForm() {
  const [chatButton, setChatButton] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    history: false,
    pastConclusions: '',
    description: '',
    skills: [],
    selectedSkills: [],
  });

  // const selectedSkillsRef = useRef(formData.selectedSkills);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/v1/skills/get')
      .then(response => setFormData({...formData, skills: response.data.skills}))
      .catch(error => setFormData({...formData, skills: []}));
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate minimal fields from data and alert the user if they are not filled out
    if (formData.name === '' || formData.startDate === '' || formData.endDate === '' || formData.selectedSkills === [] ) {
      alert('Please fill out all required fields.');
      return;
    }

    //console the data
    console.log(formData);
    // send data to the API
    axios.post("http://127.0.0.1:5000/api/v1/campaign/create",{
      name: formData.name,
      start_date: formData.startDate,
      end_date: formData.endDate,
      history: formData.history,
      previous_insights: formData.pastConclusions,
      skills: formData.selectedSkills,
      description: formData.description
    }).then(response => {
      console.log(response.data.uuid);
    }).catch(error => {});
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSkillChange = (e) => {
    const selectedSkill = e;
    if (selectedSkill !== undefined){
      // Check if skill is already selected
      if (formData.selectedSkills.includes(selectedSkill)) {
        // Skill is already selected, so remove it from the list
        const newSelectedSkills = formData.selectedSkills.filter(
          (skill) => skill !== selectedSkill
        );
        setFormData((prevState) => ({
          ...prevState,
          selectedSkills: newSelectedSkills,
        }));
      } else {
        // Skill is not selected, so add it to the list
        setFormData((prevState) => ({
          ...prevState,
          selectedSkills: [...prevState.selectedSkills, selectedSkill],
        }));
      }
    }
  };

  const selectedSkillsList = useMemo(() => {
    return formData.selectedSkills.map((option) => (
      <li key={option}>{option}</li>
    ));
  }, [formData.selectedSkills]);

  return (
    <form className="CampaignForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Campaign Name:</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Campaign Description:</label>
        <textarea name="description" id="pastConclusidescriptionons" value={formData.description} onChange={handleChange}></textarea>
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
        <input type="checkbox" name="history" id="history" checked={formData.history} onChange={handleCheckboxChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="pastConclusions">Past Conclusions:</label>
        <textarea name="pastConclusions" id="pastConclusions" value={formData.pastConclusions} onChange={handleChange}></textarea>
      </div>
      <div className="form-group-column">
        <div className='form-group'>
          <label>Skills:</label>
          <select onChange={(event) => handleSkillChange(event.target.value)}>
            <option value="">Select an option</option>
            {formData.skills.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>Selected options:</p>
          <ul>
            {selectedSkillsList}
          </ul>
        </div>
      </div>
      <div className="form-group">
        <button className="submit-button" type="submit">Submit</button>
      </div>
      <div className='form-group'>
        <button onClick={() => setChatButton(!chatButton)} className="chat-btn">Consult ChatGPT</button>
      </div>
      <Chat trigger={chatButton}> </Chat>
    </form>
  );
}

export default CampaignForm;
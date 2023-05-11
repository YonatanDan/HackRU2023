import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Skills = () => {
    const [skillsList, setSkillsList] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    useEffect(() => {
      axios.get('http://127.0.0.1:5000/api/v1/skills/get')
        .then(response => setSkillsList(response.data.skills))
        .catch(error => console.error(error));
    }, []);

    const handleSkillChange = (skill) => {
      if (skill === "") {return}
      if (selectedSkills.includes(skill)) {
        setSelectedSkills(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
      } else {
        setSelectedSkills([...selectedSkills, skill]);
      }
    };

    return (
      <div>
        <select onChange={(event) => handleSkillChange(event.target.value)}>
          <option value="">Select an option</option>
          {skillsList.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          <p>Selected options:</p>
          <ul>
            {selectedSkills.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default Skills;
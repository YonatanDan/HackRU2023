import React, { useState } from 'react';


const Skills = ({skillsList}) => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((selectedSkill) => selectedSkill !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="skill-buttons">
      {skillsList.map((skill) => (
        <button
          key={skill}
          className={selectedSkills.includes(skill) ? 'skill-button selected' : 'skill-button'}
          onClick={() => handleSkillChange(skill)}
        >
          {skill}
        </button>
      ))}
    </div>
  );
};

export default Skills;

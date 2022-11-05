import React, { useState } from "react";
import "./Experience.css"
const Experience = ({ experience }) => {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div>
      <div className="experience">
        <h3 onClick={() => setShowExperience(!showExperience)}>Experience</h3>
        {showExperience ? (
          <div>
            {experience.map((item) => {
              return (
                <div key={JSON.stringify(item)}>
                  <p>{item.name}</p>
                  <p>{item.date}</p>
                  <p>{item.where}</p>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Experience;

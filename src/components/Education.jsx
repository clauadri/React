import React, { useState } from "react";
import "./Education.css";
import { FaGraduationCap, FaDotCircle } from "react-icons/fa";
const Education = ({ education }) => {
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div>
      <div className="education">
        <h3 onClick={() => setShowEducation(!showEducation)}>
          <FaGraduationCap /> Formación Académica
        </h3>
        {showEducation ? (
          <div className="cont-style" >
            {education.map((item) => {
              return (
                <div className="info" key={JSON.stringify(item)}>
                  <div>
                    <p>Año: {item.date}</p>
                  </div>
                  <div>
                    <p><FaDotCircle/> Formación cursada: {item.name}</p>
                    <p><FaDotCircle/> Sitio: {item.where}</p>
                  </div>
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

export default Education;

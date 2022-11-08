import React, { useState } from "react";
import "./Experience.css";
import { FaBriefcase, FaDotCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Experience = ({ experience }) => {
  const [showExperience, setShowExperience] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="experience">
        <h3 onClick={() => setShowExperience(!showExperience)}>
          <FaBriefcase />
        </h3>
        {showExperience ? (
          <div className="cont-style">
            {experience.map((item) => {
              return (
                <div className="info" key={JSON.stringify(item)}>
                  <div>
                    <p>{item.date}</p>
                  </div>
                  <div>
                    <p>
                      <FaDotCircle /> Puesto: {item.name}
                    </p>
                    <p>
                      <FaDotCircle /> Empresa: {item.where}
                    </p>
                    <p>
                      <FaDotCircle /> Descripción: {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </>
  );
};

export default Experience;

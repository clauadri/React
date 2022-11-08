import React, { useState } from "react";
import "./Education.css";
import { FaGraduationCap, FaDotCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Education = ({ education }) => {
  const [showEducation, setShowEducation] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="education">
        <h3 onClick={() => setShowEducation(!showEducation)}>
          <FaGraduationCap />
        </h3>
        {showEducation ? (
          <div className="cont-style">
            {education.map((item) => {
              return (
                <div className="info" key={JSON.stringify(item)}>
                  <div>
                    <p>Año: {item.date}</p>
                  </div>
                  <div>
                    <p>
                      <FaDotCircle /> Formación cursada: {item.name}
                    </p>
                    <p>
                      <FaDotCircle /> Sitio: {item.where}
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

export default Education;

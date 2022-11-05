import React, { useState } from "react";
import './Education.css'

const Education = ({ education }) => {
  
  const [showEducation, setShowEducation] = useState(false)


  return (
    <div>
      <div className="education">
        <h3 onClick={()=>setShowEducation(!showEducation)}>sFormación Académica</h3>
        {showEducation 
        ? <div >
          {education.map((item) => {
          return (
            <div className="info-style" key={JSON.stringify(item)}>
              <p> Formación cursada: {item.name}</p>
              <p>Año: {item.date}</p>
              <p>Sitio: {item.where}</p>
            </div>
          );
        })}
        </div>
        : <div></div>
        }
        
      </div>
    </div>
  );
};

export default Education;

import { useState } from "react";
import "./About.css";
import {FaInfoCircle} from 'react-icons/fa'
const About = ({ aboutMe }) => {
  const [showAbout, setShowAbout] = useState(true);
  return (
    <div className="about">
      <h3 onClick={() => setShowAbout(!showAbout)}><FaInfoCircle/>  Información sobre mi</h3>
      {showAbout ? (
        <div className="cont-style">
          {aboutMe.map((item) => {
            return (
              <div className="info" key={JSON.stringify(item)}>
                <p>{item.info}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default About;

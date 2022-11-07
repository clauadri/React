import React, { useState } from "react";
import "./Habilities.css"
import { FaCogs } from "react-icons/fa";
const Habilities = ({ habilities }) => {
  const [showHabilities, setShowHabilities] = useState(false);
  return (
    <div>
      <div className="habilities">
        <h3 onClick={() => setShowHabilities(!showHabilities)}><FaCogs/>  Habilities</h3>
        {showHabilities ? (
          <div className="cont-style">
            {habilities.map((item) => {
              return (
                <div className="info" key={JSON.stringify(item)}>
                  <p>{item}</p>
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

export default Habilities;

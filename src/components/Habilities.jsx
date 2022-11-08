import React, { useState } from "react";
import "./Habilities.css";
import { FaCogs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Habilities = ({ habilities }) => {
  const [showHabilities, setShowHabilities] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="habilities">
        <h3 onClick={() => setShowHabilities(!showHabilities)}>
          <FaCogs />
        </h3>
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
      <button onClick={() => navigate("/")}>Volver al inicio</button>
    </>
  );
};

export default Habilities;

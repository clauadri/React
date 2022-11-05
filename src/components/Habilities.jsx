import React, { useState } from "react";
import "./Habilities.css"
const Habilities = ({ habilities }) => {
  const [showHabilities, setShowHabilities] = useState(false);
  return (
    <div>
      <div className="habilities">
        <h3 onClick={() => setShowHabilities(!showHabilities)}>Habilities</h3>
        {showHabilities ? (
          <div>
            {habilities.map((item) => {
              return (
                <div key={JSON.stringify(item)}>
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

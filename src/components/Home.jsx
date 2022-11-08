import React from "react";
import './Home.css'
const Home = ({ aboutMe }) => {
  return (
    <div className="home">
      <h4>Bienvenidos a mi curriculum vitae</h4>
      {aboutMe.map((item) => {
        return (
          <div className="info" key={JSON.stringify(item)}>
            <p>{item.info}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

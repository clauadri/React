import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="div-nav">
        <NavLink to="education" activeclassname={"active"}><h3> Formación Académica</h3>
        </NavLink>
        <NavLink to="experience" activeclassname={"active"}><h3>  Experiencia</h3>
        </NavLink>
        <NavLink to="languages" activeclassname={"active"}><h3>  Idiomas</h3>
        </NavLink>
        <NavLink to="habilities" activeclassname={"active"}><h3>  Habilidades Técnicas</h3>
        </NavLink>
        <NavLink to="contact" activeclassname={"active"}><h3>  Contacto</h3>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

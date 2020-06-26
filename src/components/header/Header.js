import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#inicio">Incio</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mi</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

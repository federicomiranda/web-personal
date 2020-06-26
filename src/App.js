import React, { useState } from "react";
import Header from "./components/header/Header";
import Sobremi from "./components/sobremi/Sobremi";
import Experiencia from "./components/experiencia/Experiencia";
import Portfolio from "./components/portfolio/Portfolio";
import Contacto from "./components/contacto/Contacto";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [mode, setMode] = useState(true);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div className={mode ? "dark" : "light"}>
      <div className="container">
        <button
          className={`changeMode ${!mode ? "oscuro" : "claro"}`}
          onClick={handleMode}
        >
          <FontAwesomeIcon className="icon" icon={faLightbulb} />
          <p>{!mode ? "Oscuro" : "Claro"}</p>
        </button>
        <Header />

        <section className="presentacion">
          <div className="container">
            <h1>Federico Miranda</h1>
            <p>Web Developer</p>
          </div>
        </section>

        <Sobremi />
        <Experiencia />
        <Portfolio />
        <Contacto />
      </div>
    </div>
  );
};

export default App;

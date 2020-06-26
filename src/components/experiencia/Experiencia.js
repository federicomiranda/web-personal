import React from "react";
import "./Experiencia.css";

const Experiencia = () => {
  return (
    <section className="experiencia" id="experiencia">
      <div className="title">
        <h2>Experiencia</h2>
      </div>
      <article className="left">
        <h3>Developer</h3>

        <ul>
          <li>
            <h4>Freelance</h4>
            <p>(2015 - Actualidad)</p>
          </li>
          <li>
            <h4>Estudio Index</h4>
            <p>(2017 - Actualidad)</p>
          </li>
        </ul>
      </article>
      <article className="right">
        <h3>Profesor</h3>

        <ul>
          <li>
            <h4>ITMaster Academy</h4>
            <p>(2017 - 2018)</p>
          </li>
          <li>
            <h4>Coderhouse</h4>
            <p>(2016 - Actualidad)</p>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Experiencia;

import React from "react";
import "./Sobremi.css";
import Perfil from "../../assets/profile.jpg";

const Sobremi = () => {
  return (
    <section className="sobremi" id="sobre-mi">
      <div className="left">
        <h2>Sobre mi</h2>
        <p>
          24 años hasta el 22 de marzo. Hace 5 que me dedico al desarrollo web.
          Profesor y apasionado del aprendizaje. Hincha de Boca. Fanático de los
          animales.
        </p>
        <a href="#contacto">¡Contactame!</a>
      </div>
      <div className="right">
        <img src={Perfil} alt="" />
      </div>
    </section>
  );
};

export default Sobremi;

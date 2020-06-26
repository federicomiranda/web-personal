import React, { useState } from "react";
import "./Contacto.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Spinner from "../../assets/spinner.gif";

const Contacto = () => {
  const [msg, setMsg] = useState(null);
  const [spinner, showSpinner] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    showSpinner(true);

    const data = new FormData(document.getElementById("contact_form"));

    fetch("http://www.federicomiranda.com.ar/api/sendForm.php", {
      method: "POST",
      body: data
    })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          return "Error en la llamada Ajax";
        }
      })
      .then(function(texto) {
        setMsg(texto);
        document.getElementById("contact_form").reset();
        showSpinner(false);
      })
      .catch(function(err) {
        document.getElementById("contact_form").reset();
        showSpinner(false);
      });
  };

  return (
    <section className="contacto" id="contacto">
      <div className="left">
        <h2>¡Contactame!</h2>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/__fedev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/__fedev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
          </li>
        </ul>
      </div>

      <div className="right">
        <form id="contact_form">
          <input type="text" name="nombre" placeholder="Nombre" />
          <input type="text" name="apellido" placeholder="Apellido" />
          <input type="email" name="email" placeholder="E-mail" />
          <input type="text" name="asunto" placeholder="Asunto" />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={handleSubmit}>Enviar</button>
          {spinner && <img className="spinner" src={Spinner} />}
          {msg === '"ok"' ? (
            <p className="ok">
              ¡Mensaje enviado!{" "}
              <span role="img" aria-label="Aplausos">
                👏🏼
              </span>
            </p>
          ) : msg === '"error"' ? (
            <p className="error">
              Hubo un error al enviar el mensaje{" "}
              <span role="img" aria-label="Sorprendido">
                😨
              </span>
            </p>
          ) : msg === '"error_campos"' ? (
            <p className="error">
              Todos los campos son obligatorios{" "}
              <span role="img" aria-label="Enojado">
                😠
              </span>
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
};

export default Contacto;

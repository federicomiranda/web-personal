import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Slider from "react-slick";
import BuenaYunta from "../../assets/BuenaYunta.jpg";
import ColegioSanPatricio from "../../assets/ColegioSanPatricio.jpg";
import MLPublicidad from "../../assets/MLPublicidad.jpg";
import RomanoPastas from "../../assets/RomanoPastas.jpg";
import Voltu from "../../assets/Voltu.jpg";

async function Data() {
  let response = await fetch(
    "https://api.coderhouse.com/partners/58120d05be3bb000038fefb6/recomendations",
    {
      method: "GET"
    }
  );
  let result = await response.json();
  return result;
}

const Portfolio = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Data().then(r => setData(r));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="title">
        <h2>Portfolio</h2>
      </div>
      <article className="left">
        <h3>Trabajos</h3>
        <Slider {...settings}>
          <div className="trabajo">
            <a
              href="http://buenayuntagro.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={BuenaYunta} alt="" />
            </a>
          </div>
          <div className="trabajo">
            <a
              href="http://cesanpatricio.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ColegioSanPatricio} alt="" />
            </a>
          </div>
          <div className="trabajo">
            <a
              href="http://publicidad.mercadolibre.com.ar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={MLPublicidad} alt="" />
            </a>
          </div>
          <div className="trabajo">
            <a
              href="http://romanopastas.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={RomanoPastas} alt="" />
            </a>
          </div>
          <div className="trabajo">
            <a
              href="https://voltumotor.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Voltu} alt="" />
            </a>
          </div>
        </Slider>
      </article>
      <article className="right">
        <h3>Opioniones de alumnxs</h3>
        <Slider {...settings}>
          {data &&
            data.map(comentario => {
              return comentario.text.length >= 50 &&
                comentario.text.length <= 400 ? (
                <div className="opinion" key={comentario._id}>
                  <h4>{comentario.fromUser.profile.first_name}</h4>
                  <p>{comentario.text}</p>
                </div>
              ) : null;
            })}
        </Slider>
      </article>
    </section>
  );
};

export default Portfolio;

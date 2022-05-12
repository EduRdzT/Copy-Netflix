import React from "react";
import Imagen from "./imagen";
import logoBatman from "../assets/the_batman_logo.png";

function InfoIntro({ info }) {
  return (
    <figure className="info-intro">
      <Imagen
        location={logoBatman}
        clase="border"
        title={info && info.movie.title}
      />
      <figcaption>{info && info.movie.overview}</figcaption>
      <div className="container-btn">
        <button className="btn-play">
          <p>
            <span className="material-symbols-outlined">play_circle</span>
            Reproducir
          </p>
        </button>
        <button className="btn-info">
          <p>
            <span className="material-symbols-outlined">info</span>
            Más información
          </p>
        </button>
      </div>
    </figure>
  );
}

export default InfoIntro;

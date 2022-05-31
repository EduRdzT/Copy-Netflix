import React from "react";
import Imagen from "./imagen";

function InfoIntro({ info, logo }) {
  return (
    <figure className="info-intro">
      <Imagen
        location={logo}
        clase={false}
        title={info.intro && info.intro.title}
      />
      <figcaption>{info.intro && info.intro.overview}</figcaption>
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

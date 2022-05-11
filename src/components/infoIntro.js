import React from "react";
import Imagen from "./imagen";

function InfoIntro({ info }) {
  return (
    <div className="info-intro">
      <Imagen
        location="./assets/the_batman_logo.png"
        clase="border"
        title="img Perfil"
      />
      <p>{info && info.movie.overview}</p>
      <button className="btn-play">
        <p>
          <span className="material-symbols-outlined">play_circle</span>
          Reproducir
        </p>
      </button>
      <button className="btn-info">
        <p>
          <span className="material-symbols-outlined">info</span>
          Reproducir
        </p>
      </button>
    </div>
  );
}

export default InfoIntro;

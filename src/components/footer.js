import React from "react";
import Imagen from "./imagen";
import TMDB from "../assets/tmdb-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <figure className="card-tmdb">
        <Imagen location={TMDB} clase="logo-tmdb" title="TMDb logo" />
        <figcaption>
          <p>
            Este producto utiliza la API de TMDb, pero no está respaldado ni
            certificado por TMDB.
          </p>
          <a href="https://www.themoviedb.org/">www.themoviedb.org</a>
        </figcaption>
      </figure>
      <p>@Eduardo Rodríguez</p>
    </footer>
  );
};

export default Footer;

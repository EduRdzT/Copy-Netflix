import React from "react";
import Imagen from "./imagen";
import newMovie from "../assets/new-movie.jpg";
import { Link } from "react-router-dom";

export const New = () => {
  return (
    <figure className="new-movie">
      <Imagen location={newMovie} clase="border" title="new movie" />
      <figcaption>
        <p>Estreno</p>
        <p>La cronica Francesa</p>
        <span>Hace 3 días</span>
      </figcaption>
    </figure>
  );
};

export const ChangeUser = ({ user, imgPerfil }) => {
  return (
    <figure className="options-user">
      <Imagen location={imgPerfil} clase="border" title="img Perfil" />
      <figcaption>
        <p>{user}</p>
      </figcaption>
    </figure>
  );
};

export const ChangeOptions = ({ descrip, icon, to }) => {
  return (
    <figure className="options-user">
      <span className="material-symbols-outlined">{icon}</span>
      <figcaption>
        {to ? <Link to={to}>{descrip}</Link> : <p>{descrip}</p>}
      </figcaption>
    </figure>
  );
};

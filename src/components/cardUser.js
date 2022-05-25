import React from "react";
import Imagen from "./imagen";

const CardUser = ({ user, ImgPerfil, setVisible }) => {
  return (
    <figure onClick={() => setVisible(false)}>
      <Imagen location={ImgPerfil} clase="border" title={`Perfil ${user}`} />
      <figcaption>{user}</figcaption>
    </figure>
  );
};

export default CardUser;

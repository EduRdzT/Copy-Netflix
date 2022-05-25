import React from "react";
import ImgPerfil from "../assets/perfil-img.png";
import CardUser from "./cardUser";

const ChooseUser = ({ setVisible }) => {
  return (
    <section id="choose-user">
      <h3>¿Quién está viendo ahora?</h3>
      <div className="container-users">
        <CardUser user="User-0" ImgPerfil={ImgPerfil} setVisible={setVisible} />
        <CardUser user="User-1" ImgPerfil={ImgPerfil} setVisible={setVisible} />
        <CardUser user="User-2" ImgPerfil={ImgPerfil} setVisible={setVisible} />
        <CardUser user="User-3" ImgPerfil={ImgPerfil} setVisible={setVisible} />
        <figure>
          <span className="material-symbols-outlined">add_circle</span>
          <figcaption>Agregar perfil</figcaption>
        </figure>
      </div>
      <button>Administrar perfiles</button>
    </section>
  );
};

export default ChooseUser;
